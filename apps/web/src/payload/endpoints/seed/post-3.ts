import type { RequiredDataFromCollectionSlug } from "payload";
import type { PostArgs } from "./post-1";

// Data for default locale (vi)
export const post3: (
  args: PostArgs
) => RequiredDataFromCollectionSlug<"posts"> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: "dollar-and-sense-the-financial-forecast",
    _status: "published",
    authors: [author],
    title: "Đô la và Lý trí: Dự báo Tài chính",
    content: {
      root: {
        type: "root",
        children: [
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
                          text: "Tuyên bố miễn trừ: ",
                          version: 1,
                        },
                        {
                          type: "text",
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: "Nội dung này được tạo ra chỉ để minh họa. Để chỉnh sửa bài viết này, ",
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
                text: "Tiền không chỉ là tiền tệ; ",
                version: 1,
              },
              {
                type: "text",
                detail: 0,
                format: 2,
                mode: "normal",
                style: "",
                text: "nó là một ngôn ngữ. ",
                version: 1,
              },
              {
                type: "text",
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Đi sâu vào những sắc thái của nó, nơi chiến lược gặp trực giác trong biển tài chính rộng lớn.",
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
                text: "Tiền, về bản chất, vượt ra ngoài khái niệm đơn thuần về tiền xu và giấy bạc; nó trở thành một ngôn ngữ sâu sắc nói về giá trị, niềm tin và cấu trúc xã hội. Giống như bất kỳ ngôn ngữ nào, nó sở hữu những sắc thái và tinh tế phức tạp đòi hỏi sự hiểu biết sâu sắc. Chính ở những độ sâu này, thế giới được tính toán của chiến lược tài chính va chạm với bản chất bản năng, trực giác của con người. Giống như một nhà ngôn ngữ học dày dạn có thể phân tích cú pháp và ngữ nghĩa của một câu, một chuyên gia tài chính điều hướng đại dương rộng lớn và hỗn loạn của tài chính, được hướng dẫn không chỉ bởi logic và dữ liệu mà còn bởi cảm giác ruột và tầm nhìn xa. Mỗi giao dịch, đầu tư và quyết định tài chính trở thành một cuộc đối thoại trong từ điển mở rộng này của thương mại và giá trị.",
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
            type: "heading",
            children: [
              {
                type: "text",
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Động lực thị trường chứng khoán: Bò, Gấu và Vùng giữa không chắc chắn",
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
                text: "Thị trường chứng khoán là một lĩnh vực cơ hội rộng lớn nhưng cũng tiềm ẩn rủi ro. Khám phá các lực lượng thúc đẩy xu hướng thị trường và các chiến lược được sử dụng bởi các nhà giao dịch hàng đầu để điều hướng hệ sinh thái phức tạp này. Từ phân tích thị trường đến hiểu tâm lý nhà đầu tư, có được cái nhìn toàn diện về thế giới cổ phiếu.",
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
            type: "paragraph",
            children: [
              {
                type: "text",
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Thị trường chứng khoán, thường được hình dung như một đấu trường sôi động của số và băng ticker, cũng là về hành vi con người như về kinh tế. Đó là nơi sự lạc quan, được đại diện bởi cuộc biểu tình tăng giá, gặp sự thận trọng của các đợt giảm giá, với mỗi bên cố gắng chỉ đạo hướng đi của thị trường. Nhưng giữa hai thái cực này nằm một vùng đất giữa không chắc chắn, một khu vực được cư trú bởi các nhà giao dịch và nhà đầu tư liên tục cân nhắc hy vọng chống lại nỗi sợ hãi. Điều hướng thành công đòi hỏi nhiều hơn chỉ là tài năng tài chính; nó đòi hỏi sự hiểu biết về cảm xúc tập thể và khả năng dự đoán không chỉ chuyển động thị trường, mà còn phản ứng của các thành viên thị trường khác. Trong điệu nhảy phức tạp này của số và dây thần kinh, những người chơi sáng suốt nhất là những người nắm vững cả dữ liệu cứng và các sắc thái mềm của hành vi con người.",
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
        "Tiền không chỉ là tiền tệ; nó là một ngôn ngữ. Đi sâu vào những sắc thái của nó, nơi chiến lược gặp trực giác trong biển tài chính rộng lớn.",
      image: heroImage.id,
      title: "Đô la và Lý trí: Dự báo Tài chính",
    },
    relatedPosts: [], // this is populated by the seed script
  };
};

// Data for English locale (en) - to be used for update
export const post3En = (args: PostArgs) => ({
  title: "Dollar and Sense: The Financial Forecast",
  content: {
    root: {
      type: "root",
      children: [
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
                        text: "Disclaimer: ",
                        version: 1,
                      },
                      {
                        type: "text",
                        detail: 0,
                        format: 0,
                        mode: "normal",
                        style: "",
                        text: "This content is fabricated and for demonstration purposes only. To edit this post, ",
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
              text: "Money isn't just currency; ",
              version: 1,
            },
            {
              type: "text",
              detail: 0,
              format: 2,
              mode: "normal",
              style: "",
              text: "it's a language. ",
              version: 1,
            },
            {
              type: "text",
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "Dive deep into its nuances, where strategy meets intuition in the vast sea of finance.",
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
              text: "Money, in its essence, transcends the mere concept of coins and paper notes; it becomes a profound language that speaks of value, trust, and societal structures. Like any language, it possesses intricate nuances and subtleties that require a discerning understanding. It's in these depths where the calculated world of financial strategy collides with the raw, instinctive nature of human intuition. Just as a seasoned linguist might dissect the syntax and semantics of a sentence, a financial expert navigates the vast and tumultuous ocean of finance, guided not only by logic and data but also by gut feelings and foresight. Every transaction, investment, and financial decision becomes a dialogue in this expansive lexicon of commerce and value.",
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
          type: "heading",
          children: [
            {
              type: "text",
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "Stock Market Dynamics: Bulls, Bears, and the Uncertain Middle",
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
              text: "The stock market is a realm of vast opportunity but also poses risks. Discover the forces that drive market trends and the strategies employed by top traders to navigate this complex ecosystem. From market analysis to understanding investor psychology, get a comprehensive insight into the world of stocks.",
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
          type: "paragraph",
          children: [
            {
              type: "text",
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "The stock market, often visualized as a bustling arena of numbers and ticker tapes, is as much about human behavior as it is about economics. It's a place where optimism, represented by the bullish rally, meets the caution of bearish downturns, with each vying to dictate the market's direction. But between these two extremes lies an uncertain middle ground, a zone populated by traders and investors who constantly weigh hope against fear. Successful navigation requires more than just financial acumen; it demands an understanding of collective sentiments and the ability to predict not just market movements, but also the reactions of other market participants. In this intricate dance of numbers and nerves, the most astute players are those who master both the hard data and the soft nuances of human behavior.",
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
    description: `Money isn't just currency; it's a language. Dive deep into its nuances, where strategy meets intuition in the vast sea of finance.`,
    image: args.heroImage.id,
    title: "Dollar and Sense: The Financial Forecast",
  },
});
