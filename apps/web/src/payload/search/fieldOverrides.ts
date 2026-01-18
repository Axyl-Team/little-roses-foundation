import type { Field } from "payload";

export const searchFields: Field[] = [
  {
    name: "slug",
    type: "text",
    index: true,
    admin: {
      readOnly: true,
    },
  },
  {
    name: "meta",
    label: {
      en: "Meta",
      vi: "Siêu dữ liệu",
    },
    type: "group",
    index: true,
    admin: {
      readOnly: true,
    },
    fields: [
      {
        type: "text",
        name: "title",
        label: {
          en: "Title",
          vi: "Tiêu đề",
        },
      },
      {
        type: "text",
        name: "description",
        label: {
          en: "Description",
          vi: "Mô tả",
        },
      },
      {
        name: "image",
        label: {
          en: "Image",
          vi: "Hình ảnh",
        },
        type: "upload",
        relationTo: "media",
      },
    ],
  },
  {
    label: {
      en: "Categories",
      vi: "Danh mục",
    },
    name: "categories",
    type: "array",
    admin: {
      readOnly: true,
    },
    fields: [
      {
        name: "relationTo",
        type: "text",
      },
      {
        name: "categoryID",
        type: "text",
      },
      {
        name: "title",
        type: "text",
      },
    ],
  },
];
