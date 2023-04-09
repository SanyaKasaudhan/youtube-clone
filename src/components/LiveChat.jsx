import React, { useEffect } from "react";
import LiveMessage from "./LiveMessage";

const LiveChat = () => {
    useEffect(()=>{
        const i = setInterval(()=> {}, 2000)
        // API POLLING
        return () => clearInterval(i)
    }, 2000)
  return (
    <div>
      <div className="w-[450px] h-[500px] mt-5 ml-2 p-3 border border-black bg-slate-100 rounded-lg">
        <LiveMessage name="Sanya Kasaudhan" message="My comment" />
      </div>
    </div>
  );
};

export default LiveChat;
