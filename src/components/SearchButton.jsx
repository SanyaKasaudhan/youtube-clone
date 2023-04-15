import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Car.css"
const SearchButton = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    initialSlide: 0,
    
  };
    const searchText=['All','Javascript','Music','Comedy','Stock markets','Live','History','Computer Science','News','Weddings','React','Indian cuisine','Garba',
    //  'Stock market','Dance covers','Tourist destinations','Mountains','Beaches'
  ]
  return (
    <div className="App">
        <Slider {...settings}>
          <div className='card'>
        {searchText.map((item,i) => (
          <div className=''>
            <button key={i} className='bg-gray-300 p-3 m-2 rounded-lg'>{item}</button>
              
          </div>
        ))}
        </div>
      </Slider>
    </div>
  )
}

export default SearchButton


// function Car() {
  

//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default Car;
