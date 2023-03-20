import React from 'react'

const SearchButton = () => {
    const searchText=['All','Javascript','Music','Comedy','Stock markets','Live','History','Computer Science','News','Weddings','React','Indian cuisine',
    // 'Stock market','Dance covers','Garba','Tourist destinations','Mountains','Beaches'
  ]
  return (
    <div className='ml-2 relative'>
        <div className=''>
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span class="icon-prev" aria-hidden="true"></span>
      <span class="sr-only">Previous button</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span class="icon-next" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
           { searchText.map((e)=>{
                return <><button className='bg-gray-300 p-3 m-2 rounded-lg'>{e}</button></>
            })
            }
        </div>
    </div>
  )
}

export default SearchButton