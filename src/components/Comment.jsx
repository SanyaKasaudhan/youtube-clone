import React, { useEffect, useState } from 'react'
import { YOUTUBE_COMMENT_API } from '../utils/constants';
import CommentList from './CommentList';

const Comment = () => {

    const [comment, setComment] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(YOUTUBE_COMMENT_API);
    const json = await data.json();
    setComment(json.items);
    console.log(json.items)
  };

  return (
    <div className='flex flex-col'>
        {
            comment.map((comment)=>
            (<CommentList key={comment.id} info={comment}/>)
            )
        }
    </div>
  )
}

export default Comment