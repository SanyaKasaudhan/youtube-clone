import React from 'react'

export const Navbar = () => {
  return (
    <div className='grid grid-flow-col shadow-lg'>
        <div className='flex col-span-1'>
            <img alt="hamburger" className='h-8 m-2 ml-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIoAAACKCAMAAABCWSJWAAAATlBMVEX///8AAADk5OSEhITu7u719fXc3NxAQEC6urpsbGzx8fENDQ1xcXH7+/s6OjpoaGhTU1MfHx/AwMDMzMx9fX2np6cVFRVISEh3d3fV1dWqIJOiAAABVklEQVR4nO3aW46DMAyF4bgFCpTSC73uf6PTjjR9wfBon5H+bwVHJCGJ41IAAAAAACL6TZh+NUhzfewtyP5xfS0GqYeoGH+G2k9yGKOTmI0HN8oxPonZ0UvSZiQxa50op5woJ2fxnHOinJtZlEtOErOLylTxJovQVxGaK2WXE2XnLOakEZqPz1uXkaTzkpRDwhDtFvbDehudZLuQ5O01hB1X3geWbloM8quvgqwf4gAAAPQ17TZM69yAvjbBJZbjZinJLTbIx81PknKB9yo9pbpnRLlXTpRnRhKz5zxJn1Cf/Bjnl5ApJ4nZ/F4mVHUSiiI0QGnT1ikm6CzmrF+cW1DQ+fErbYdKh4QidHQCAAD4D1Qe7KZO5BlT53G31nny1mkEEGqP0GkaEWqlEWowEqo6CX0Vobki1Lio1M4p1OSq1Por1BBdwtvE18tOMs3zAAAAAIBAP3DeJhIbZ/ifAAAAAElFTkSuQmCC"></img>
            <img alt="youtube" className='h-12 ml-4' src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"></img>
           
        </div>
        <div className='flex col-span-10 m-2'>
            <input className='border-neutral-500 border-2 rounded-l-full pl-5 w-1/2' type="search" placeholder='Search'></input>
            <img alt="search" className='h-12 border-neutral-500 border-2 rounded-r-full' src="https://cdn-icons-png.flaticon.com/512/54/54481.png"></img>
            
        </div>
        <div className='grid grid-flow-col col-span-1'>
        <img  className='h-12' src="https://images.news18.com/ibnlive/uploads/2022/03/google-meet-logo.jpg" alt="meeting-icon"></img>
        <img  className='h-10 mt-1' src="data:image/png;base64,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"></img>
        <img className='h-9 mt-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"></img>
            
        </div>
    </div>
  )
}
