import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import type React from "react";

import { AdminBar } from "@/components/admin/AdminBar";
import { mergeOpenGraph } from "@/lib/utils/mergeOpenGraph";
import { cn } from "@/lib/utils/ui";
import { Footer } from "@/payload/globals/Footer/Component";
import { Header } from "@/payload/globals/Header/Component";
import { Providers } from "@/providers";
import { InitTheme } from "@/providers/Theme/InitTheme";

import "./globals.css";
import { getServerSideURL } from "@/lib/utils/getURL";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isEnabled } = await draftMode();

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable)}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />

          <Header />
          <div className="container mx-auto">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
};
