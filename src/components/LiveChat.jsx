import React, { useEffect } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {

    const dispatch = useDispatch();
     
    const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // API Polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + " 🚀",
        })
      );
    }, 1000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="w-[450px] h-[500px] overflow-y-hidden mt-5 ml-2 p-3 border border-black bg-slate-100 rounded-lg">
      {
            // Disclaimer: Don't use indexes as keys
            chatMessages.map((c, i) => (
              <LiveMessage key={i} name={c.name} message={c.message} />
            ))
          }
      </div>
    </div>
  );
};

export default LiveChat;
