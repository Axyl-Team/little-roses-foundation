import type { Field, GroupField } from "payload";

import deepMerge from "@/lib/utils/deepMerge";

export type LinkAppearances = "default" | "outline";

export const appearanceOptions: Record<
  LinkAppearances,
  { label: { en: string; vi: string }; value: string }
> = {
  default: {
    label: { en: "Default", vi: "Mặc định" },
    value: "default",
  },
  outline: {
    label: { en: "Outline", vi: "Viền" },
    value: "outline",
  },
};

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false;
  disableLabel?: boolean;
  overrides?: Partial<GroupField>;
}) => Field;

export const link: LinkType = ({
  appearances,
  disableLabel = false,
  overrides = {},
} = {}) => {
  const linkResult: GroupField = {
    name: "link",
    type: "group",
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: "row",
        fields: [
          {
            name: "type",
            type: "radio",
            admin: {
              layout: "horizontal",
              width: "50%",
            },
            defaultValue: "reference",
            options: [
              {
                label: { en: "Internal link", vi: "Liên kết nội bộ" },
                value: "reference",
              },
              {
                label: { en: "Custom URL", vi: "URL tùy chỉnh" },
                value: "custom",
              },
            ],
          },
          {
            name: "newTab",
            type: "checkbox",
            admin: {
              style: {
                alignSelf: "flex-end",
              },
              width: "50%",
            },
            label: {
              en: "Open in new tab",
              vi: "Mở trong tab mới",
            },
          },
        ],
      },
    ],
  };

  const linkTypes: Field[] = [
    {
      name: "reference",
      type: "relationship",
      admin: {
        condition: (_, siblingData) => siblingData?.type === "reference",
      },
      label: {
        en: "Document to link to",
        vi: "Tài liệu để liên kết",
      },
      relationTo: ["pages", "posts"],
      required: true,
    },
    {
      name: "url",
      type: "text",
      admin: {
        condition: (_, siblingData) => siblingData?.type === "custom",
      },
      label: {
        en: "Custom URL",
        vi: "URL tùy chỉnh",
      },
      required: true,
    },
  ];

  if (disableLabel) {
    linkResult.fields = [...linkResult.fields, ...linkTypes];
  } else {
    linkTypes.map((linkType) => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: "50%",
      },
    }));

    linkResult.fields.push({
      type: "row",
      fields: [
        ...linkTypes,
        {
          name: "label",
          type: "text",
          admin: {
            width: "50%",
          },
          label: {
            en: "Label",
            vi: "Nhãn",
          },
          required: true,
        },
      ],
    });
  }

  if (appearances !== false) {
    let appearanceOptionsToUse = [
      appearanceOptions.default,
      appearanceOptions.outline,
    ];

    if (appearances) {
      appearanceOptionsToUse = appearances.map(
        (appearance) => appearanceOptions[appearance]
      );
    }

    linkResult.fields.push({
      name: "appearance",
      type: "select",
      admin: {
        description: {
          en: "Choose how the link should be rendered.",
          vi: "Chọn cách hiển thị liên kết.",
        },
      },
      defaultValue: "default",
      options: appearanceOptionsToUse,
    });
  }

  return deepMerge(linkResult, overrides);
};
