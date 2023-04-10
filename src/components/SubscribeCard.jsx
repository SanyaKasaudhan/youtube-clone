import React from "react";

const SubscribeCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, description, thumbnails, publishedAt } = snippet;

  return (
    <div className="h-72 w-72 ml-2 mt-5 mr-12 p-2 bg-slate-100 rounded-lg">
      <img className="rounded-lg" alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">
          {description.split(" ").slice(0, 10).join(" ")}
        </li>
        <li>{channelTitle}</li>
        <li>{publishedAt} views</li>
      </ul>
    </div>
  );
};

export default SubscribeCard;
