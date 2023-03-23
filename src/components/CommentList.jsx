import React from "react";

const CommentList = ({ info }) => {
  const { snippet } = info;
  return (
    <div className="flex">
      <div className="flex">
        <img
          className="ml-20 m-5 h-12 rounded-full"
          src={snippet.topLevelComment.snippet.authorProfileImageUrl}
          alt="img"
        />
        <div className="mt-3">
          <div className="text-xl">{snippet.topLevelComment.snippet.authorDisplayName}</div>
          <div>{snippet.topLevelComment.snippet.textDisplay}</div>
          <div>{snippet.topLevelComment.snippet.publishedAt}</div>
          <div className="flex ml-5 mt-3">
            <img className="h-5 w-5" src="https://cdn-icons-png.flaticon.com/128/9513/9513802.png"  alt="dislike"/>
            <img className="ml-5 h-5 w-5" src="https://cdn-icons-png.flaticon.com/128/880/880561.png"  alt="dislike"/>
            <div className="ml-5 text-lg">Reply</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentList;
