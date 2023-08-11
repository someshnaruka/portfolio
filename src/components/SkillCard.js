import React from 'react'

function SkillCard(props) {
  return (
    <>
        <div className='flex flex-col justify-between items-center md:w-1/4 w-1/3  h-[100px] md:h-[200px]  p-2 bg-[#16213E] shadow-lg shadow-black rounded-lg  hover:scale-105 cursor-pointer duration-200  border-2 border-transparent  hover:border-red-400'>
            <img src={props.img} className='md:w-1/3 w-1/2 m-auto'></img>
            <p className='text-[#ccd6f6] text-sm md:text-2xl'>{props.name}</p>
        </div>
    </>
  )
}

export default SkillCard