import React from 'react'

const LiveMessage = ({name, message}) => {
  return (
    <div className='flex items-center'>
        <img className='h-7 mt-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"  alt='img' />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default LiveMessage