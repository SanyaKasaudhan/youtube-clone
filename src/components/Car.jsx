import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Car.css";

function Car() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 9,
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
  ];

  return (
    <div className="relative bg-yellow-600">
      <div className="mx-auto  max-w-screen-xl px-6">
        <Slider {...settings}>
          {searchText.map((item) => (
            <div className=""  key={item}>
              <button className="bg-yellow-300 px-5 my-2 rounded-md ">{item}</button>
            </div>
          ))}
        </Slider>
        <style jsx>{`
          .slick-prev:before,
          .slick-next:before {
            color: black;
          }
          .slick-prev:hover,
          .slick-next:hover {
            background-color: white;
          }
          .slick-prev,
          .slick-next {
            position: absolute;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: white;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
          }
          .slick-prev {
            left: -40px;
          }
          .slick-next {
            right: -40px;
          }
          .slick-prev:before,
          .slick-next:before {
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            font-size: 14px;
            line-height: 30px;
          }
          .slick-prev:before {
            content: "\f104";
          }
          .slick-next:before {
            content: "\f105";
          }
        `}</style>
      </div>
    </div>
  );
}

export default Car;
