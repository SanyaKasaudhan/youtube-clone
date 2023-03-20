import React, { useEffect } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";

const VideoCard = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const res = await data.json();
    console.log("res", res);
  };
  return (
    <div>
      <div className="h-72 w-80 m-5 bg-slate-100">
        <img
          alt="img"
          className="rounded-lg h-48 w-80"
          src="https://lh4.googleusercontent.com/proxy/swYKuEQJl3C1vNQG3ATPISkCo-1ddbzniQ8qMExZH4vkaRB800I5aTNsmHHEmU6nMAKewsaYxRVkhH7jf9MYe_DanBZ_ks9lfgpdwi3tZ9oDxsOAVsTN95dgc-oiEUZqpg=w1152-h603-s-nd"
        />
        <div>
          <div className="flex m-1">
            <img
              className="w-8 h-8 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAp58ukK01IQ5raWLOjjO5QoPtwR_7_QI9JA&usqp=CAU"
              alt="logo"
            />
            <div className="flex-row m-1 pl-2">
              <div className="">Vitamins for daily need</div>
              <div className="text-slate-400 m-1 font-semibold">
                Abhi ad Niyu
              </div>
              <div className="text-slate-400 m-1 font-semibold">
                290 views · <span>8 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
