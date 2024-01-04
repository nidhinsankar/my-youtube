import { useEffect } from "react";
import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      // do the api polling
      console.log("api polliing");
    }, 2000);
  }, []);

  return (
    <div className="border-2 border-black w-[25%] mx-auto bg-slate-100 px-2 py-1">
      <ChatMessage message={"this is first message"} name={"Nidhin sankar"} />
    </div>
  );
};

export default LiveChat;
