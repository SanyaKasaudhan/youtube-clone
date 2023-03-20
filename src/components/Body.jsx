import React from 'react'
import SearchButton from './SearchButton'
import SideNavbar from './SideNavbar'
import VideoCardContainer from './VideoCardContaier'

const Body = () => {
  return (
    <div className='flex'>
        <SideNavbar/>
        <div className='flex-row'>
        <SearchButton />
        <VideoCardContainer/>
        </div>
    </div>
  )
}

export default Body