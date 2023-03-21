import React from "react";
import { useSelector } from "react-redux";

const SideNavbar = () => {
    const isMenuOpen=useSelector((store) => store.navSlice.isMenuOpen)

    if(!isMenuOpen) return null;
  return (
    <div className=" px-1 col-span-4 shadow-lg w-1/6 mt-1">
      <button className="flex pt-2 w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/1946/1946488.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Home</div>
      </button>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/5856/5856419.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Shorts</div>
      </button>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/2989/2989849.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Subscription</div>
      </button>
      <div className="border bg-black font-extrabold w-11/12 mb-4"></div>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/2989/2989835.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Library</div>
      </button>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/2961/2961948.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">History</div>
      </button>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/2991/2991195.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Your_videos</div>
      </button>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/2088/2088617.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Watch_later</div>
      </button>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/126/126473.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Liked_videos</div>
      </button>

      <div className="border bg-black font-extrabold w-11/12 mb-4"></div>
      <div className="mb-4 ml-4 font-semibold text-lg">Explore</div>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/1946/1946485.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Trending</div>
      </button>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/2662/2662503.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Shopping</div>
      </button>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/461/461238.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Music</div>
      </button>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/1179/1179120.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Movies</div>
      </button><button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/3197/3197658.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Gaming</div>
      </button>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/4163/4163679.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">News</div>
      </button>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/819/819590.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Sports</div>
      </button>
      <button className="flex w-2/12 hover:bg-slate-200 hover:w-11/12 hover:h-10 hover:p-2 px-3 rounded-lg">
        <img
          className="h-5 w-5"
          alt="icon"
          src="https://cdn-icons-png.flaticon.com/128/2662/2662503.png"
        ></img>
        <div className="ml-9 text-lg mb-2 pb-2">Learning</div>
      </button>
    </div>
  );
};

export default SideNavbar;
