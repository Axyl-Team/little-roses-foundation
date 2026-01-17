import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

export const Archive: Block = {
  slug: "archive",
  interfaceName: "ArchiveBlock",
  fields: [
    {
      name: "introContent",
      type: "richText",
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            HeadingFeature({ enabledHeadingSizes: ["h1", "h2", "h3", "h4"] }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
      label: {
        en: "Intro Content",
        vi: "Nội dung giới thiệu",
      },
    },
    {
      name: "populateBy",
      type: "select",
      defaultValue: "collection",
      options: [
        {
          label: { en: "Collection", vi: "Bộ sưu tập" },
          value: "collection",
        },
        {
          label: { en: "Individual Selection", vi: "Lựa chọn riêng lẻ" },
          value: "selection",
        },
      ],
    },
    {
      name: "relationTo",
      type: "select",
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
      defaultValue: "posts",
      label: {
        en: "Collections To Show",
        vi: "Bộ sưu tập hiển thị",
      },
      options: [
        {
          label: { en: "Posts", vi: "Bài viết" },
          value: "posts",
        },
      ],
    },
    {
      name: "categories",
      type: "relationship",
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "collection",
      },
      hasMany: true,
      label: {
        en: "Categories To Show",
        vi: "Danh mục hiển thị",
      },
      relationTo: "categories",
    },
    {
      name: "limit",
      type: "number",
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "collection",
        step: 1,
      },
      defaultValue: 10,
      label: {
        en: "Limit",
        vi: "Giới hạn",
      },
    },
    {
      name: "selectedDocs",
      type: "relationship",
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === "selection",
      },
      hasMany: true,
      label: {
        en: "Selection",
        vi: "Lựa chọn",
      },
      relationTo: ["posts"],
    },
  ],
  labels: {
    singular: {
      en: "Archive",
      vi: "Lưu trữ",
    },
    plural: {
      en: "Archives",
      vi: "Lưu trữ",
    },
  },
};
