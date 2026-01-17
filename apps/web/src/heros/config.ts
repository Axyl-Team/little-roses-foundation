import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Field } from "payload";

import { linkGroup } from "@/fields/linkGroup";

export const hero: Field = {
  name: "hero",
  type: "group",
  fields: [
    {
      name: "type",
      type: "select",
      defaultValue: "lowImpact",
      label: {
        en: "Type",
        vi: "Loại",
      },
      options: [
        {
          label: { en: "None", vi: "Không có" },
          value: "none",
        },
        {
          label: { en: "High Impact", vi: "Tác động cao" },
          value: "highImpact",
        },
        {
          label: { en: "Medium Impact", vi: "Tác động trung bình" },
          value: "mediumImpact",
        },
        {
          label: { en: "Low Impact", vi: "Tác động thấp" },
          value: "lowImpact",
        },
      ],
      required: true,
    },
    {
      name: "richText",
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
      label: false,
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: "media",
      type: "upload",
      label: {
        en: "Media",
        vi: "Phương tiện",
      },
      admin: {
        condition: (_, { type } = {}) =>
          ["highImpact", "mediumImpact"].includes(type),
      },
      relationTo: "media",
      required: true,
    },
  ],
  label: false,
};
