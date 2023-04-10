import React from 'react'

const SearchButton = () => {
    const searchText=['All','Javascript','Music','Comedy','Stock markets','Live','History','Computer Science','News','Weddings','React','Indian cuisine','Garba',
    //  'Stock market','Dance covers','Tourist destinations','Mountains','Beaches'
  ]
  return (
    <div className='ml-2'>
        <div className=''>
        <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
      <span className="icon-prev" aria-hidden="true"></span>
      <span className="sr-only">Previous button</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
      <span className="icon-next" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
           { searchText.map((e,index)=>{
                return <button key={index} className='bg-gray-300 p-3 m-2 rounded-lg'>{e}</button>
            })
            }
        </div>
    </div>
  )
}

export default SearchButton