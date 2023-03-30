import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/sidebarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

export const Navbar = () => {
  const dispatch=useDispatch();

  const toggleMenuHandler= ()=>{
    dispatch(toggleSidebar());
  }
  const[searchQuery, setSearchQuery]= useState ("");
  const[suggestions, setSuggestions] =useState([])
  const[showSuggestion, setShowSuggestion]=useState(false);

  const searchCache = useSelector((store) =>store.search);
  useEffect(()=>{
      const timer = setTimeout(()=> {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }
      else{
      getSuggestionList()     
      }
    }, 200)
    return ()=>{
      clearTimeout(timer);
    }
  },[searchQuery])

  const getSuggestionList = async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1])
    setSuggestions(json[1]);

    console.log("API",searchQuery);
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))

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
      <div>
      <div className="flex col-span-10 m-2 ml-1">
        <input
          className=" border-2 rounded-l-full pl-5 w-10/12"
          type="search"
          placeholder="Search"
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={()=>setShowSuggestion(true)}
          onBlur={()=> setShowSuggestion(false)}
        ></input>
        <img
          alt="search"
          className="h-10 p-2 border-2 rounded-r-full"
          src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
        ></img>
        
      </div>
      {showSuggestion && (
      <div className="fixed bg-white py-2 px-2 w-[30rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
          )}
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
