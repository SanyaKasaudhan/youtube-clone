import React from "react";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../utils/sidebarSlice";

export const Navbar = () => {
  const dispatch=useDispatch();

  const toggleMenuHandler= ()=>{
    dispatch(toggleSidebar());
  }
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <img onClick={()=> toggleMenuHandler()}
          alt="hamburger"
          className="h-8 m-2 ml-4 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAATlBMVEX///8AAADk5OSEhITu7u719fXc3NxAQEC6urpsbGzx8fENDQ1xcXH7+/s6OjpoaGhTU1MfHx/AwMDMzMx9fX2np6cVFRVISEh3d3fV1dWqIJOiAAABVklEQVR4nO3aW46DMAyF4bgFCpTSC73uf6PTjjR9wfBon5H+bwVHJCGJ41IAAAAAACL6TZh+NUhzfewtyP5xfS0GqYeoGH+G2k9yGKOTmI0HN8oxPonZ0UvSZiQxa50op5woJ2fxnHOinJtZlEtOErOLylTxJovQVxGaK2WXE2XnLOakEZqPz1uXkaTzkpRDwhDtFvbDehudZLuQ5O01hB1X3geWbloM8quvgqwf4gAAAPQ17TZM69yAvjbBJZbjZinJLTbIx81PknKB9yo9pbpnRLlXTpRnRhKz5zxJn1Cf/Bjnl5ApJ4nZ/F4mVHUSiiI0QGnT1ikm6CzmrF+cW1DQ+fErbYdKh4QidHQCAAD4D1Qe7KZO5BlT53G31nny1mkEEGqP0GkaEWqlEWowEqo6CX0Vobki1Lio1M4p1OSq1Por1BBdwtvE18tOMs3zAAAAAIBAP3DeJhIbZ/ifAAAAAElFTkSuQmCC"
        ></img>
        <img
          alt="youtube"
          className="h-12 ml-4"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
        ></img>
      </div>
      <div className="flex col-span-10 m-2">
        <input
          className="border-neutral-500 border-2 rounded-l-full pl-5 w-1/2"
          type="search"
          placeholder="Search"
        ></input>
        <img
          alt="search"
          className="h-10 p-2 border-neutral-500 border-2 rounded-r-full"
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
