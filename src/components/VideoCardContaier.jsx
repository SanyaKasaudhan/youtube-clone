import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants"
import VideoCard, { AdVideoCard } from "./VideoCard";
// import { Link } from "react-router-dom";

const VideoCardContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
        <div key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </div>
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
