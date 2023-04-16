import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Car.css";

function Car() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 12,
    slidesToScroll: 3,
  };

  const searchText = [
    "All",
    "Javascript",
    "Music",
    "Comedy",
    "Stock",
    "Live",
    "History",
    "Computer",
    "News",
    "Weddings",
    "React",
    "Indian",
    "Garba",
    "Stock",
    "Dance",
    "Tourist",
    "Mountains",
    "Beaches",
    "Songs",
    "Interview",
    "Atif",
    "India"
  ];

  return (
    <div className="relative bg-yellow-300 mb-2">
      <div className="mx-auto  max-w-screen-xl px-6">
        <Slider {...settings}>
          {searchText.map((item) => (
            <div className=""  key={item}>
              <button className="bg-yellow-100 px-5 my-2 rounded-md flex items-center justify-center h-10 w-24 text-center">{item}</button>
            </div>
          ))}
        </Slider>
        <style jsx>{`
          .slick-prev:before,
          .slick-next:before {
            color: orange;
          }
          .slick-prev {
            left: -40px;
          }
          .slick-next {
            right: -40px;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Car;
