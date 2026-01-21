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
  {
    id: "meta-llama/Llama-3.3-70B-Instruct",
    name: "Llama 3.3 70B",
    chef: "Meta",
    chefSlug: "llama",
    providers: ["groq", "togetherai", "amazon-bedrock"],
  },
];
