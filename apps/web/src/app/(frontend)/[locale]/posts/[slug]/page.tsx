import configPromise from "@payload-config";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { getPayload } from "payload";
import { cache } from "react";
import { PostHero } from "@/components/heroes/PostHero";
import { LivePreviewListener } from "@/components/LivePreviewListener";
import { PayloadRedirects } from "@/components/PayloadRedirects";
import RichText from "@/components/RichText";
import { generateMeta } from "@/lib/utils/generateMeta";
import { RelatedPosts } from "@/payload/blocks/RelatedPosts/Component";
import PageClient from "./page.client";

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise });
  const params: Array<{ locale: string; slug: string }> = [];

  // Generate params for all locales
  for (const locale of ["en", "vi"] as const) {
    const posts = await payload.find({
      locale,
      collection: "posts",
      draft: false,
      limit: 1000,
      overrideAccess: false,
      pagination: false,
      select: {
        slug: true,
      },
    });

    for (const { slug } of posts.docs) {
      params.push({ locale, slug });
    }
  }

  return params;
}

interface Args {
  params: Promise<{
    locale: "en" | "vi";
    slug?: string;
  }>;
}

export default async function Post({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode();
  const { locale, slug = "" } = await paramsPromise;
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug);
  const url = `/posts/${decodedSlug}`;
  const post = await queryPostBySlug({ locale, slug: decodedSlug });

  if (!post) {
    return <PayloadRedirects url={url} />;
  }

  return (
    <article className="pt-16 pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      {draft && <LivePreviewListener />}

      <PostHero post={post} />

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container">
          <RichText
            className="mx-auto max-w-[48rem]"
            data={post.content}
            enableGutter={false}
          />
          {post.relatedPosts && post.relatedPosts.length > 0 && (
            <RelatedPosts
              className="col-span-3 col-start-1 mt-12 max-w-[52rem] grid-rows-[2fr] lg:grid lg:grid-cols-subgrid"
              docs={post.relatedPosts.filter(
                (post) => typeof post === "object"
              )}
            />
          )}
        </div>
      </div>
    </article>
  );
}

export async function generateMetadata({
  params: paramsPromise,
}: Args): Promise<Metadata> {
  const { locale, slug = "" } = await paramsPromise;
  // Decode to support slugs with special characters
  const decodedSlug = decodeURIComponent(slug);
  const post = await queryPostBySlug({ locale, slug: decodedSlug });

  return generateMeta({ doc: post });
}

const queryPostBySlug = cache(
  async ({ locale, slug }: { locale: "en" | "vi"; slug: string }) => {
    const { isEnabled: draft } = await draftMode();

    const payload = await getPayload({ config: configPromise });

    const result = await payload.find({
      locale,
      collection: "posts",
      draft,
      limit: 1,
      overrideAccess: draft,
      pagination: false,
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    return result.docs?.[0] || null;
  }
);
