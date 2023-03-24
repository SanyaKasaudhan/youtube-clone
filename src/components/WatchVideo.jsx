import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/sidebarSlice";
import Comment from "./Comment";
import Subscribe from "./Subscribe";

const WatchVideo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [params] = useSearchParams();
  console.log("id",params.get("v"));
  return <><div className="m-5">
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
   <Subscribe />
   <Comment />
   
   </>;
};

export default WatchVideo;
