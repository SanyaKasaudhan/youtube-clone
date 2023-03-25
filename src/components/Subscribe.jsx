import React from 'react'
import usePlayList from '../utils/usePlayList';
import { Link } from 'react-router-dom';
import SubscribeCard from './SubscribeCard';
const Subscribe = () => {
    const playList = usePlayList();
  return (
    <div>
      {playList.map((play) => (
         <Link key={play.id} to={"/watchlist?v=" + play.id}>
          <SubscribeCard info={play} />
         </Link>
      ))}
    </div>
  )
}

export default Subscribe