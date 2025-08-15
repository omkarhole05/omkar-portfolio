import React from 'react'

function Navbar() {
  return (
    <>
    
    <div className='flex justify-between items-center my-4 px-7 '>
        <div className='flex gap-10'>
            <div  className=' cursor-pointer hover:scale-110 transition duration-300'>Home</div>
            <div className='cursor-pointer hover:scale-110 transition duration-300'>About me</div>
            <div className='cursor-pointer hover:scale-110 transition duration-300'>Education</div>
            <div className='cursor-pointer hover:scale-110 transition duration-300'>Contact</div>
        </div>
        <div className='cursor-pointer mr-5 font-semibold rounded-3xl p-3 bg-gradient-to-r from-purple-700 via-pink-500 to-orange-600 hover:scale-105 transition duration-300'>
            Connect With me
        </div>  
    </div>
    
    </>
  )
}

export default Navbar