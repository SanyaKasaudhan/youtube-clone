import { YOUTUBE_PLAYLIST_API } from "./constants";
import { useState, useEffect } from "react";

const usePlayList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_PLAYLIST_API);
    const json = await data.json();
    setVideos(json.items);
    // console.log("playList",json.items)
  };
  return videos;
};

export default usePlayList;
