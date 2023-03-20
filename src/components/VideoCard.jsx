import React from "react";

const VideoCard = ({data}) => {
 console.log(data[0].snippet.title);
  return (
    <div>
      <div className="h-72 w-80 m-5 bg-slate-100">
        <img
          alt="img"
          className="rounded-lg h-48 w-80"
          src={data[0].thumbnails.high}
        />
        <div>
          <div className="flex m-1">
            <img
              className="w-8 h-8 rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAp58ukK01IQ5raWLOjjO5QoPtwR_7_QI9JA&usqp=CAU"
              alt="logo"
            />
            <div className="flex-row m-1 pl-2">
              <div className="">
                {data[0].snippet.channelTitle}
                </div>
              <div className="text-slate-400 m-1 font-semibold">
                {data[0].snippet.description}
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
