import { YOUTUBE_VIDEOS_API } from "./constants";
import { useState, useEffect } from "react";

const useVideoList = ()=>{
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      getVideos();
    }, []);
  
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API);
      const json = await data.json();
      setVideos(json.items);
      console.log("video",json.items)
    };
    return videos;
}

export default useVideoList;