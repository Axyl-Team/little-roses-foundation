export interface Model {
  id: string;
  name: string;
  chef: string;
  chefSlug: string;
  providers: string[];
}

export const models: Model[] = [
  {
    id: "openai/gpt-oss-120b",
    name: "GPT-OSS 120B",
    chef: "OpenAI",
    chefSlug: "openai",
    providers: ["openai", "azure"],
  },
];
