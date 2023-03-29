import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/sidebarSlice";
import Comment from "./Comment";
import NestedComment from "./NestedComment";
import Subscribe from "./Subscribe";

const WatchVideo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [params] = useSearchParams();
  console.log("id",params.get("v"));
  return <>
  <div className="flex">
    <div className="flex-row">
  <div className="m-5">
            <iframe
            width="1000"
            height="500"
            src={"https://www.youtube.com/embed/" + params.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
   </div>
   <div className="ml-12 mb-2 text-2xl font-semibold">React Tutorial in Hindi </div>
   <div className="flex">
    <img className="ml-12 h-10 rounded-full" alt="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&usqp=CAU" />
    <div className="flex-col ml-4">
      <h4 className="font-semibold">The Geeky Show</h4>
      <h4 className="font-normal text-slate-600">3.87M subscribers</h4>
    </div>
    <div className="bg-black text-white rounded-3xl pt-2 ml-10 font-semibold px-3 h-10 mt-2">Join</div>
    <div className="flex bg-slate-100 rounded-3xl pt-2 ml-2 font-semibold px-3 h-10 mt-2">
    <img
          className="h-5 pr-2 mt-1"
          alt="notification-icon"
          src="https://cdn-icons-png.flaticon.com/128/3031/3031145.png"
        ></img>
        Subscribed
    </div>

    <div className="flex bg-slate-100 rounded-3xl pt-2 ml-32 font-semibold px-3 h-10 mt-2">
    <img className="h-5 w-5" src="https://cdn-icons-png.flaticon.com/128/9513/9513802.png"  alt="like"/>
    <div className="ml-2 mr-2"> 15K</div>
    <div className="border bg-gray-800 font-extrabold h-11/12 mb-4"></div>
    <img className="ml-5 mt-1 h-5 w-5" src="https://cdn-icons-png.flaticon.com/128/880/880561.png"  alt="dislike"/>
           
    </div>

    <div className="flex bg-slate-100 rounded-3xl pt-2 ml-2 font-semibold px-3 h-10 mt-2">
    <img
          className="h-5 pr-2 mt-1"
          alt="notification-icon"
          src="https://cdn-icons-png.flaticon.com/128/2550/2550209.png"
        ></img>
        Share
    </div>

    <div className="flex bg-slate-100 rounded-3xl pt-2 ml-2 font-semibold px-3 h-10 mt-2">
    <img
          className="h-5 pr-2 mt-1"
          alt="notification-icon"
          src="https://cdn-icons-png.flaticon.com/128/3502/3502477.png"
        ></img>
        Download
    </div>

    <div className="flex bg-slate-100 rounded-3xl pt-2 ml-2 font-semibold px-3 h-10 mt-2">
    <img
          className="h-5  mt-1"
          alt="notification-icon"
          src="https://cdn-icons-png.flaticon.com/128/1828/1828805.png"
        ></img>
  </div>
    
   </div>
   <NestedComment />
   <Comment />
   </div>
   <Subscribe />
   </div>
   
   </>;
};

export default WatchVideo;
