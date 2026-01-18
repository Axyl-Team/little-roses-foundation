import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

export const FormBlock: Block = {
  slug: "formBlock",
  interfaceName: "FormBlock",
  fields: [
    {
      name: "form",
      type: "relationship",
      label: {
        en: "Form",
        vi: "Biểu mẫu",
      },
      relationTo: "forms",
      required: true,
    },
    {
      name: "enableIntro",
      type: "checkbox",
      label: {
        en: "Enable Intro Content",
        vi: "Bật nội dung giới thiệu",
      },
    },
    {
      name: "introContent",
      type: "richText",
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
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
  ],
  graphQL: {
    singularName: "FormBlock",
  },
  labels: {
    singular: {
      en: "Form Block",
      vi: "Khối biểu mẫu",
    },
    plural: {
      en: "Form Blocks",
      vi: "Khối biểu mẫu",
    },
  },
};
