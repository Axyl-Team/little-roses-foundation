import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import type { Block } from "payload";

export const Banner: Block = {
  slug: "banner",
  labels: {
    singular: {
      en: "Banner",
      vi: "Banner",
    },
    plural: {
      en: "Banners",
      vi: "Banners",
    },
  },
  fields: [
    {
      name: "style",
      type: "select",
      defaultValue: "info",
      options: [
        { label: { en: "Info", vi: "Thông tin" }, value: "info" },
        { label: { en: "Warning", vi: "Cảnh báo" }, value: "warning" },
        { label: { en: "Error", vi: "Lỗi" }, value: "error" },
        { label: { en: "Success", vi: "Thành công" }, value: "success" },
      ],
      required: true,
    },
    {
      name: "content",
      type: "richText",
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [
            ...rootFeatures,
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
      label: false,
      required: true,
    },
  ],
  interfaceName: "BannerBlock",
};
