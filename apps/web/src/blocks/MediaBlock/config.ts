import type { Block } from "payload";

export const MediaBlock: Block = {
  slug: "mediaBlock",
  interfaceName: "MediaBlock",
  labels: {
    singular: {
      en: "Media Block",
      vi: "Khối phương tiện",
    },
    plural: {
      en: "Media Blocks",
      vi: "Khối phương tiện",
    },
  },
  fields: [
    {
      name: "media",
      type: "upload",
      label: {
        en: "Media",
        vi: "Phương tiện",
      },
      relationTo: "media",
      required: true,
    },
  ],
};
