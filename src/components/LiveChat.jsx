import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState();
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
      <div className="w-[350px] h-[500px] overflow-y-hidden mt-5 ml-2 p-3 border border-black bg-slate-100 rounded-lg flex flex-col-reverse">
        {
          // Disclaimer: Don't use indexes as keys
          chatMessages.map((c, i) => (
            <LiveMessage key={i} name={c.name} message={c.message} />
          ))
        }
      </div>
      <div className="border-black-500">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({
                name: "Sanya",
                message: liveMessage,
              })
            );
            setLiveMessage("")
          }}
        >
          <input
            type="text"
            value={liveMessage}
            onChange={(e) => setLiveMessage(e.target.value)}
            className="border ml-2 border-red-700 w-7/12"
          ></input>
          <button className="ml-2 rounded-lg bg-orange-500 p-1">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LiveChat;
