import React from 'react'
import { Outlet } from 'react-router-dom'
import MaiContainer from './MaiContainer'
import SearchButton from './SearchButton'
import SideNavbar from './SideNavbar'
import VideoCardContainer from './VideoCardContaier'

const Body = () => {
  return (
    <div className='flex'>
        <SideNavbar/>
        <div className='flex-row'>
        <Outlet />
        </div>
    </div>
  )
}

export default Body