import ChatBot from "@/components/chat-bot";

const Page = () => {
  return (
    <div className="chat-scroll-container relative mx-auto size-full h-screen max-w-4xl p-6">
      <div className="flex h-full flex-col">
        <ChatBot variant="page" />
      </div>
    </div>
  );
};

export default Page;
