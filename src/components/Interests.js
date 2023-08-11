import React from 'react'

function Interests() {
  return (
    <>
<div className=' animate__animated animate__fadeIn flex flex-col p-4 gap-5'>
<div className='flex justify-start gap-10 items-center text-xs md:text-3xl'>
    <p className='border bg-red-400 p-2 md:px-4 md:py-2 cursor-pointer hover:bg-transparent border-2 border-red-400 hover:text-[#ccd6f6] text-black hover:border-white rounded-3xl transition-all hover:scale-105'>Video Editing 📹</p>
    <p className='border bg-red-400 p-2 md:px-4 md:py-2 cursor-pointer hover:bg-transparent border-2 border-red-400 hover:text-[#ccd6f6] text-black hover:border-white rounded-3xl transition-all hover:scale-105'>Football ⚽</p>
</div>
<div className='flex justify-start gap-10 items-center text-xs md:text-3xl text-[#ccd6f6]'>
    <p className='border bg-red-400 p-2 md:px-4 md:py-2 cursor-pointer hover:bg-transparent border-2 border-red-400 hover:text-[#ccd6f6] text-black hover:border-white rounded-3xl transition-all hover:scale-105'> Cricket🏏</p>
    <p className='border bg-red-400 p-2 md:px-4 md:py-2 cursor-pointer hover:bg-transparent border-2 border-red-400 hover:text-[#ccd6f6] text-black hover:border-white rounded-3xl transition-all hover:scale-105'>Dance 🕺</p>
</div>

</div>

    </>
  )
}

export default Interests