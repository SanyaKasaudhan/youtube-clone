import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/sidebarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
export const Navbar = () => {
  const dispatch=useDispatch();

  const toggleMenuHandler= ()=>{
    dispatch(toggleSidebar());
  }
  const[searchQuery, setSearchQuery]= useState("");

  useEffect(()=>{
    console.log(searchQuery);
    
    //make an API call after every key press
    // but if the difference between 2 key press i.e API CALL is <200ms
    // decline the API call;

    const timer = setTimeout(()=> getSuggestionList(), 2000)
    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])

  const getSuggestionList = async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1])
  }
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <img onClick={()=> toggleMenuHandler()}
          alt="hamburger"
          className="h-8 m-2 ml-4 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAATlBMVEX///8AAADk5OSEhITu7u719fXc3NxAQEC6urpsbGzx8fENDQ1xcXH7+/s6OjpoaGhTU1MfHx/AwMDMzMx9fX2np6cVFRVISEh3d3fV1dWqIJOiAAABVklEQVR4nO3aW46DMAyF4bgFCpTSC73uf6PTjjR9wfBon5H+bwVHJCGJ41IAAAAAACL6TZh+NUhzfewtyP5xfS0GqYeoGH+G2k9yGKOTmI0HN8oxPonZ0UvSZiQxa50op5woJ2fxnHOinJtZlEtOErOLylTxJovQVxGaK2WXE2XnLOakEZqPz1uXkaTzkpRDwhDtFvbDehudZLuQ5O01hB1X3geWbloM8quvgqwf4gAAAPQ17TZM69yAvjbBJZbjZinJLTbIx81PknKB9yo9pbpnRLlXTpRnRhKz5zxJn1Cf/Bjnl5ApJ4nZ/F4mVHUSiiI0QGnT1ikm6CzmrF+cW1DQ+fErbYdKh4QidHQCAAD4D1Qe7KZO5BlT53G31nny1mkEEGqP0GkaEWqlEWowEqo6CX0Vobki1Lio1M4p1OSq1Por1BBdwtvE18tOMs3zAAAAAIBAP3DeJhIbZ/ifAAAAAElFTkSuQmCC"
        ></img>
        
        <a href="/">
        <img
          alt="youtube"
          className="h-12 ml-4"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
        ></img>
        </a>
      </div>
      <div className="flex col-span-10 m-2 ml-60">
        <input
          className=" border-2 rounded-l-full pl-5 w-8/12"
          type="search"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <img
          alt="search"
          className="h-10 p-2 border-2 rounded-r-full"
          src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
        ></img>
      </div>
      <div className="grid grid-flow-col col-span-1">
        <img
          className="h-9 mt-2"
          src="https://cdn-icons-png.flaticon.com/128/4189/4189286.png"
          alt="meeting-icon"
        ></img>
        <img
          className="h-9 mt-2"
          alt="notification-icon"
          src="https://cdn-icons-png.flaticon.com/128/3031/3031145.png"
        ></img>
        <img
          className="h-9 mt-2"
          alt="profile-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"
        ></img>
      </div>
    </div>
  );
};
