import type { CollectionConfig } from "payload";
import { slugField } from "payload";
import { anyone } from "../access/anyone";
import { authenticated } from "../access/authenticated";

export const Categories: CollectionConfig = {
  slug: "categories",
  labels: {
    singular: {
      en: "Category",
      vi: "Danh mục",
    },
    plural: {
      en: "Categories",
      vi: "Danh mục",
    },
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
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
    slugField({
      position: undefined,
    }),
  ],
};
