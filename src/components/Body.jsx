import React from 'react'
import SearchButton from './SearchButton'
import SideNavbar from './SideNavbar'
import VideoCard from './VideoCard'

const Body = () => {
  return (
    <div className='flex'>
        <SideNavbar/>
        <div className='flex-row'>
        <SearchButton />
        <VideoCard/>
        </div>
    </div>
  )
}

export default Body