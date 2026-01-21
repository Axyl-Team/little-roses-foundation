import ChatBot from "@/components/ai/core/chat-bot";

const Page = () => {
  return (
    <div className="chat-scroll-container relative mx-auto size-full h-screen max-w-4xl p-6">
      <div className="flex h-full flex-col">
        <ChatBot />
      </div>
    </div>
  );
};

export default Page;
