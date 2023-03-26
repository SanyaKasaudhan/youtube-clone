import { YOUTUBE_VIDEOS_API } from "./constants";
import { useState, useEffect } from "react";

const useVideoList = (id)=>{
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      getVideos();
    }, []);
  
    const getVideos = async () => {
      const data = await fetch(YOUTUBE_VIDEOS_API+id);
      const json = await data.json();
      setVideos(json.items);
      console.log("video",json.items)
    };
    return videos;
}

export default useVideoList;