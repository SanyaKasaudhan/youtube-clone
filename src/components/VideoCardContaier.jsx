import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoCardContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const [videoList, setVideoList] = useState([]);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const res = await data.json();
    console.log("res", res);
    setVideoList(res.items);
    console.log(videoList);
  };
  return (
    <div>
      <VideoCard data={videoList} />
    </div>
  );
};

export default VideoCardContainer;
