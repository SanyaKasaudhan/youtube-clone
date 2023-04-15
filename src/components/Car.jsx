import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Car.css"
function Car() {
  
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    initialSlide: 0,
    
  };

  const searchText=['All','Javascript','Music','Comedy','Stock markets','Live','History','Computer Science','News','Weddings','React','Indian cuisine','Garba','Stock market','Dance covers','Tourist destinations','Mountains','Beaches'];
   


  return (
    <div className="ml-16 pl-10 ">
      <Slider {...settings}>
        {searchText.map((item) => (
          <div className="category">
            
              <h3 >{item}</h3>
              
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Car;
