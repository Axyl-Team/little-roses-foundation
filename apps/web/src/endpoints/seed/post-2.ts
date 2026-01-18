import type { RequiredDataFromCollectionSlug } from "payload";
import type { PostArgs } from "./post-1";

// Data for default locale (vi)
export const post2: (
  args: PostArgs
) => RequiredDataFromCollectionSlug<"posts"> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: "global-gaze",
    _status: "published",
    authors: [author],
    title: "Cái nhìn toàn cầu: Vượt ra ngoài tiêu đề",
    content: {
      root: {
        type: "root",
        children: [
          {
            type: "heading",
            children: [
              {
                type: "text",
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Khám phá những điều chưa được kể và bị bỏ qua. Một cái nhìn phóng đại vào các góc của thế giới, nơi mọi câu chuyện đều xứng đáng có ánh đèn sân khấu của nó.",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            tag: "h2",
            version: 1,
          },
          {
            type: "block",
            fields: {
              blockName: "Tuyên bố miễn trừ",
              blockType: "banner",
              content: {
                root: {
                  type: "root",
                  children: [
                    {
                      type: "paragraph",
                      children: [
                        {
                          type: "text",
                          detail: 0,
                          format: 1,
                          mode: "normal",
                          style: "",
                          text: "Tuyên bố miễn trừ:",
                          version: 1,
                        },
                        {
                          type: "text",
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: " Nội dung này được tạo ra chỉ để minh họa. Để chỉnh sửa bài viết này, ",
                          version: 1,
                        },
                        {
                          type: "link",
                          children: [
                            {
                              type: "text",
                              detail: 0,
                              format: 0,
                              mode: "normal",
                              style: "",
                              text: "điều hướng đến bảng quản trị.",
                              version: 1,
                            },
                          ],
                          direction: "ltr",
                          fields: {
                            linkType: "custom",
                            newTab: true,
                            url: "/admin",
                          },
                          format: "",
                          indent: 0,
                          version: 3,
                        },
                      ],
                      direction: "ltr",
                      format: "",
                      indent: 0,
                      textFormat: 1,
                      version: 1,
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  version: 1,
                },
              },
              style: "info",
            },
            format: "",
            version: 2,
          },
          {
            type: "heading",
            children: [
              {
                type: "text",
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Sức mạnh của sự kiên cường: Những câu chuyện về phục hồi và hy vọng",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            tag: "h2",
            version: 1,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Trong suốt lịch sử, các khu vực trên toàn cầu đã phải đối mặt với tác động tàn phá của thiên tai, sự hỗn loạn của bất ổn chính trị, và những gợn sóng đầy thách thức của suy thoái kinh tế. Trong những khoảnh khắc khủng hoảng sâu sắc này, một lực lượng thường bị đánh giá thấp xuất hiện: sự kiên cường bất khuất của tinh thần con người. Đây không chỉ là những câu chuyện về sự sống còn đơn thuần, mà là những câu chuyện về các cộng đồng tạo dựng mối liên kết, đoàn kết với mục đích chung, và thể hiện khả năng bẩm sinh để vượt qua.",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: "block",
            fields: {
              blockName: "",
              blockType: "mediaBlock",
              media: blockImage.id,
            },
            format: "",
            version: 2,
          },
          {
            type: "paragraph",
            children: [
              {
                type: "text",
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Từ những người hàng xóm hình thành các đội cứu hộ tạm thời trong lũ lụt đến toàn bộ các thành phố tập hợp để xây dựng lại sau sự sụp đổ kinh tế, bản chất của nhân loại được thể hiện rõ nhất trong những hành động đoàn kết này. Khi chúng ta đi sâu vào những câu chuyện này, chúng ta chứng kiến sức mạnh chuyển đổi của tinh thần cộng đồng, nơi nghịch cảnh trở thành chất xúc tác cho sự phát triển, đoàn kết và một tương lai tươi sáng hơn, được xây dựng lại.",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            textFormat: 0,
            version: 1,
          },
          {
            type: "block",
            fields: {
              blockName: "Các thành phần động",
              blockType: "banner",
              content: {
                root: {
                  type: "root",
                  children: [
                    {
                      type: "paragraph",
                      children: [
                        {
                          type: "text",
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "Nội dung trên hoàn toàn động sử dụng các khối xây dựng bố cục tùy chỉnh được cấu hình trong CMS. Đây có thể là bất cứ thứ gì bạn muốn từ văn bản phong phú và hình ảnh, đến các thành phần phức tạp được thiết kế cao.",
                          version: 1,
                        },
                      ],
                      direction: "ltr",
                      format: "",
                      indent: 0,
                      textFormat: 0,
                      version: 1,
                    },
                  ],
                  direction: "ltr",
                  format: "",
                  indent: 0,
                  version: 1,
                },
              },
              style: "info",
            },
            format: "",
            version: 2,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        version: 1,
      },
    },
    heroImage: heroImage.id,
    meta: {
      description:
        "Khám phá những điều chưa được kể và bị bỏ qua. Một cái nhìn phóng đại vào các góc của thế giới, nơi mọi câu chuyện đều xứng đáng có ánh đèn sân khấu của nó.",
      image: heroImage.id,
      title: "Cái nhìn toàn cầu: Vượt ra ngoài tiêu đề",
    },
    relatedPosts: [], // this is populated by the seed script
  };
};

// Data for English locale (en) - to be used for update
export const post2En = (args: PostArgs) => ({
  title: "Global Gaze: Beyond the Headlines",
  content: {
    root: {
      type: "root",
      children: [
        {
          type: "heading",
          children: [
            {
              type: "text",
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "Explore the untold and overlooked. A magnified view into the corners of the world, where every story deserves its spotlight.",
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          tag: "h2",
          version: 1,
        },
        {
          type: "block",
          fields: {
            blockName: "Disclaimer",
            blockType: "banner",
            content: {
              root: {
                type: "root",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        detail: 0,
                        format: 1,
                        mode: "normal",
                        style: "",
                        text: "Disclaimer:",
                        version: 1,
                      },
                      {
                        type: "text",
                        detail: 0,
                        format: 0,
                        mode: "normal",
                        style: "",
                        text: " This content is fabricated and for demonstration purposes only. To edit this post, ",
                        version: 1,
                      },
                      {
                        type: "link",
                        children: [
                          {
                            type: "text",
                            detail: 0,
                            format: 0,
                            mode: "normal",
                            style: "",
                            text: "navigate to the admin dashboard.",
                            version: 1,
                          },
                        ],
                        direction: "ltr",
                        fields: {
                          linkType: "custom",
                          newTab: true,
                          url: "/admin",
                        },
                        format: "",
                        indent: 0,
                        version: 3,
                      },
                    ],
                    direction: "ltr",
                    format: "",
                    indent: 0,
                    textFormat: 1,
                    version: 1,
                  },
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                version: 1,
              },
            },
            style: "info",
          },
          format: "",
          version: 2,
        },
        {
          type: "heading",
          children: [
            {
              type: "text",
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "The Power of Resilience: Stories of Recovery and Hope",
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          tag: "h2",
          version: 1,
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "Throughout history, regions across the globe have faced the devastating impact of natural disasters, the turbulence of political unrest, and the challenging ripples of economic downturns. In these moments of profound crisis, an often-underestimated force emerges: the indomitable resilience of the human spirit. These aren't just tales of mere survival, but stories of communities forging bonds, uniting with a collective purpose, and demonstrating an innate ability to overcome.",
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          textFormat: 0,
          version: 1,
        },
        {
          type: "block",
          fields: {
            blockName: "",
            blockType: "mediaBlock",
            media: args.blockImage.id,
          },
          format: "",
          version: 2,
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "From neighbors forming makeshift rescue teams during floods to entire cities rallying to rebuild after economic collapse, the essence of humanity is most evident in these acts of solidarity. As we delve into these narratives, we witness the transformative power of community spirit, where adversity becomes a catalyst for growth, unity, and a brighter, rebuilt future.",
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          textFormat: 0,
          version: 1,
        },
        {
          type: "block",
          fields: {
            blockName: "Dynamic components",
            blockType: "banner",
            content: {
              root: {
                type: "root",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "text",
                        detail: 0,
                        format: 0,
                        mode: "normal",
                        style: "",
                        text: "This content above is completely dynamic using custom layout building blocks configured in the CMS. This can be anything you'd like from rich text and images, to highly designed, complex components.",
                        version: 1,
                      },
                    ],
                    direction: "ltr",
                    format: "",
                    indent: 0,
                    textFormat: 0,
                    version: 1,
                  },
                ],
                direction: "ltr",
                format: "",
                indent: 0,
                version: 1,
              },
            },
            style: "info",
          },
          format: "",
          version: 2,
        },
      ],
      direction: "ltr",
      format: "",
      indent: 0,
      version: 1,
    },
  },
  meta: {
    description:
      "Explore the untold and overlooked. A magnified view into the corners of the world, where every story deserves its spotlight.",
    image: args.heroImage.id,
    title: "Global Gaze: Beyond the Headlines",
  },
});
