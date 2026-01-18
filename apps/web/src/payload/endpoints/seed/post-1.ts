import type { RequiredDataFromCollectionSlug } from "payload";
import type { Media, User } from "@/payload-types";

export type PostArgs = {
  heroImage: Media;
  blockImage: Media;
  author: User;
};

// Data for default locale (vi)
export const post1: (
  args: PostArgs
) => RequiredDataFromCollectionSlug<"posts"> = ({
  heroImage,
  blockImage,
  author,
}) => {
  return {
    slug: "digital-horizons",
    _status: "published",
    authors: [author],
    title: "Chân trời số: Cái nhìn về tương lai",
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
                text: "Khám phá những điều kỳ diệu của đổi mới hiện đại, nơi hằng số duy nhất là sự thay đổi. Một hành trình nơi pixel và dữ liệu hội tụ để kiến tạo tương lai.",
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
                              text: "điều hướng đến bảng quản trị",
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
                        {
                          type: "text",
                          detail: 0,
                          format: 0,
                          mode: "normal",
                          style: "",
                          text: ".",
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
          {
            type: "heading",
            children: [
              {
                type: "text",
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Sự trỗi dậy của AI và Machine Learning",
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
                text: "Chúng ta đang sống trong một kỷ nguyên chuyển đổi nơi trí tuệ nhân tạo (AI) đứng ở tuyến đầu của tiến hóa công nghệ. Những tác động lan tỏa của các tiến bộ của nó đang định hình lại các ngành công nghiệp với tốc độ chưa từng có. Các doanh nghiệp không còn bị ràng buộc bởi những hạn chế của các quy trình thủ công tẻ nhạt. Thay vào đó, các máy móc tinh vi, được cung cấp bởi lượng dữ liệu lịch sử khổng lồ, giờ đây có khả năng đưa ra quyết định trước đây chỉ dành cho trực giác con người. Những hệ thống thông minh này không chỉ tối ưu hóa hoạt động mà còn tiên phong các phương pháp tiếp cận đổi mới, báo hiệu một kỷ nguyên mới của chuyển đổi kinh doanh trên toàn thế giới.",
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
            type: "heading",
            children: [
              {
                type: "text",
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "Để minh họa chức năng AI cơ bản, đây là đoạn mã javascript thực hiện yêu cầu POST đến API AI chung để tạo văn bản dựa trên prompt.",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            tag: "h4",
            version: 1,
          },
          {
            type: "block",
            fields: {
              blockName: "Tạo văn bản",
              blockType: "code",
              code: "async function generateText(prompt) {\n    const apiKey = 'your-api-key';\n    const apiUrl = 'https://api.example.com/generate-text';\n\n    const response = await fetch(apiUrl, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': `Bearer ${apiKey}`\n        },\n        body: JSON.stringify({\n            model: 'text-generation-model',\n            prompt: prompt,\n            max_tokens: 50\n        })\n    });\n\n    const data = await response.json();\n    console.log(data.choices[0].text.trim());\n}\n\n// Example usage\ngenerateText(\"Once upon a time in a faraway land,\");\n",
              language: "javascript",
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
                text: "IoT: Kết nối thế giới xung quanh chúng ta",
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
                text: "Trong bối cảnh công nghệ đang phát triển nhanh chóng ngày nay, Internet of Things (IoT) nổi bật như một lực lượng cách mạng. Từ việc biến đổi nơi ở của chúng ta bằng hệ thống nhà thông minh đến việc định nghĩa lại giao thông vận tải thông qua xe hơi kết nối, ảnh hưởng của IoT có thể cảm nhận được trong hầu hết mọi khía cạnh của cuộc sống hàng ngày của chúng ta.",
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
                text: "Công nghệ này phụ thuộc vào sự tích hợp liền mạch của các thiết bị và hệ thống, cho phép chúng giao tiếp và cộng tác một cách dễ dàng. Với mỗi thiết bị được kết nối, chúng ta tiến thêm một bước gần hơn đến một thế giới nơi sự tiện lợi và hiệu quả được nhúng vào chính cấu trúc của sự tồn tại của chúng ta. Kết quả là, chúng ta đang chuyển đổi sang một kỷ nguyên nơi môi trường xung quanh phản ứng một cách trực quan với nhu cầu của chúng ta, báo hiệu một cộng đồng toàn cầu thông minh hơn và kết nối hơn.",
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
        "Khám phá những điều kỳ diệu của đổi mới hiện đại, nơi hằng số duy nhất là sự thay đổi. Một hành trình nơi pixel và dữ liệu hội tụ để kiến tạo tương lai.",
      image: heroImage.id,
      title: "Chân trời số: Cái nhìn về tương lai",
    },
    relatedPosts: [], // this is populated by the seed script
  };
};

// Data for English locale (en) - to be used for update
export const post1En = (args: PostArgs) => ({
  title: "Digital Horizons: A Glimpse into Tomorrow",
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
              text: "Dive into the marvels of modern innovation, where the only constant is change. A journey where pixels and data converge to craft the future.",
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
                            text: "navigate to the admin dashboard",
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
                      {
                        type: "text",
                        detail: 0,
                        format: 0,
                        mode: "normal",
                        style: "",
                        text: ".",
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
        {
          type: "heading",
          children: [
            {
              type: "text",
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "The Rise of AI and Machine Learning",
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
              text: "We find ourselves in a transformative era where artificial intelligence (AI) stands at the forefront of technological evolution. The ripple effects of its advancements are reshaping industries at an unprecedented pace. No longer are businesses bound by the limitations of tedious, manual processes. Instead, sophisticated machines, fueled by vast amounts of historical data, are now capable of making decisions previously left to human intuition. These intelligent systems are not only optimizing operations but also pioneering innovative approaches, heralding a new age of business transformation worldwide. ",
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
          type: "heading",
          children: [
            {
              type: "text",
              detail: 0,
              format: 0,
              mode: "normal",
              style: "",
              text: "To demonstrate basic AI functionality, here is a javascript snippet that makes a POST request to a generic AI API in order to generate text based on a prompt. ",
              version: 1,
            },
          ],
          direction: "ltr",
          format: "",
          indent: 0,
          tag: "h4",
          version: 1,
        },
        {
          type: "block",
          fields: {
            blockName: "Generate Text",
            blockType: "code",
            code: "async function generateText(prompt) {\n    const apiKey = 'your-api-key';\n    const apiUrl = 'https://api.example.com/generate-text';\n\n    const response = await fetch(apiUrl, {\n        method: 'POST',\n        headers: {\n            'Content-Type': 'application/json',\n            'Authorization': `Bearer ${apiKey}`\n        },\n        body: JSON.stringify({\n            model: 'text-generation-model',\n            prompt: prompt,\n            max_tokens: 50\n        })\n    });\n\n    const data = await response.json();\n    console.log(data.choices[0].text.trim());\n}\n\n// Example usage\ngenerateText(\"Once upon a time in a faraway land,\");\n",
            language: "javascript",
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
              text: "IoT: Connecting the World Around Us",
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
              text: "In today's rapidly evolving technological landscape, the Internet of Things (IoT) stands out as a revolutionary force. From transforming our residences with smart home systems to redefining transportation through connected cars, IoT's influence is palpable in nearly every facet of our daily lives.",
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
              text: "This technology hinges on the seamless integration of devices and systems, allowing them to communicate and collaborate effortlessly. With each connected device, we move a step closer to a world where convenience and efficiency are embedded in the very fabric of our existence. As a result, we're transitioning into an era where our surroundings intuitively respond to our needs, heralding a smarter and more interconnected global community.",
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
          type: "block",
          fields: {
            blockName: "Dynamic Components",
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
      "Dive into the marvels of modern innovation, where the only constant is change. A journey where pixels and data converge to craft the future.",
    image: args.heroImage.id,
    title: "Digital Horizons: A Glimpse into Tomorrow",
  },
});
