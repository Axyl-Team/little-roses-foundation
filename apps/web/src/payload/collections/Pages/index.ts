import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from "@payloadcms/plugin-seo/fields";
import type { CollectionConfig } from "payload";
import { slugField } from "payload";
import { hero } from "@/components/heroes/config";
import { generatePreviewPath } from "@/lib/utils/generatePreviewPath";
import { authenticated } from "../../access/authenticated";
import { authenticatedOrPublished } from "../../access/authenticatedOrPublished";
import { Archive } from "../../blocks/ArchiveBlock/config";
import { CallToAction } from "../../blocks/CallToAction/config";
import { Content } from "../../blocks/Content/config";
import { FormBlock } from "../../blocks/Form/config";
import { MediaBlock } from "../../blocks/MediaBlock/config";
import { populatePublishedAt } from "../../hooks/populatePublishedAt";
import { revalidateDelete, revalidatePage } from "./hooks/revalidatePage";

export const Pages: CollectionConfig<"pages"> = {
  slug: "pages",
  labels: {
    singular: {
      en: "Page",
      vi: "Trang",
    },
    plural: {
      en: "Pages",
      vi: "Trang",
    },
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    hidden: true, // Ẩn collection khỏi admin UI nhưng vẫn giữ trong config để tránh lỗi relation
    defaultColumns: ["title", "slug", "updatedAt"],
    livePreview: {
      url: ({ data, req }) =>
        generatePreviewPath({
          slug: data?.slug,
          collection: "pages",
          req,
        }),
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: data?.slug as string,
        collection: "pages",
        req,
      }),
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      label: {
        en: "Title",
        vi: "Tiêu đề",
      },
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          fields: [hero],
          label: {
            en: "Hero",
            vi: "Hero",
          },
        },
        {
          fields: [
            {
              name: "layout",
              type: "blocks",
              label: {
                en: "Layout",
                vi: "Bố cục",
              },
              blocks: [CallToAction, Content, MediaBlock, Archive, FormBlock],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: {
            en: "Content",
            vi: "Nội dung",
          },
        },
        {
          name: "meta",
          label: {
            en: "SEO",
            vi: "SEO",
          },
          fields: [
            OverviewField({
              titlePath: "meta.title",
              descriptionPath: "meta.description",
              imagePath: "meta.image",
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: "media",
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: "meta.title",
              descriptionPath: "meta.description",
            }),
          ],
        },
      ],
    },
    {
      name: "publishedAt",
      type: "date",
      label: {
        en: "Published At",
        vi: "Ngày xuất bản",
      },
      admin: {
        position: "sidebar",
      },
    },
    slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
      schedulePublish: true,
    },
    maxPerDoc: 50,
  },
};
