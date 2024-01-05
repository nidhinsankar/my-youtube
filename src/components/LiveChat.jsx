import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages, enterMessage } from "../store/chatSlice";
import { generateNames, generateRandomWords } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chat.messages);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      // do the api polling
      dispatch(
        addMessages({
          name: generateNames(),
          message: generateRandomWords(15) + " message",
        })
      );
    }, 2000);

    return () => setInterval(timer);
  }, []);

  const submitMessage = () => {
    dispatch(
      enterMessage({
        name: "Nidhin sankar",
        message: message,
      })
    );
    setMessage("");
  };

  return (
    <div className="flex flex-col w-[25%]  mx-auto">
      <div className="border-2 border-black w-full  h-[550px] bg-slate-100 px-2 py-1 overflow-x-auto flex flex-col-reverse">
        {chats?.map((c) => (
          <ChatMessage message={c.message} name={c.name} />
        ))}
      </div>
      <div className="w-full">
        <input
          type="text"
          name="message"
          id="message"
          className="h-7 border-2 border-gray-400 w-[80%]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className=" bg-slate-400 w-[20%] h-7" onClick={submitMessage}>
          add
        </button>
      </div>
    </div>
  );
};

export default LiveChat;
