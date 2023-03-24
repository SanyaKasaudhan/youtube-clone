import React from "react";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
import useVideoList from "../utils/useVideoList";

const VideoCardContainer = () => {
  
  const videos = useVideoList();

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoCardContainer;

// import React, { useEffect, useState } from "react";
// import { YOUTUBE_VIDEOS_API } from "../utils/constants";
// import VideoCard from "./VideoCard";

// const VideoCardContainer = () => {
//   useEffect(() => {
//     getVideos();
//   }, []);

//   const [videoList, setVideoList] = useState([]);
//   const getVideos = async () => {
//     const data = await fetch(YOUTUBE_VIDEOS_API);
//     const res = await data.json();
//     console.log("res", res);
//     setVideoList(res.items);
//     console.log(videoList);
//   };
//   return (
//     <div>
//       <VideoCard data={videoList} />
//     </div>
//   );
// };

// export default VideoCardContainer;
