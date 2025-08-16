import React from 'react'

function Header() {
    return (
    <>
    <div className='flex justify-center items-center mt-20 mb-20'>
        <div className='flex flex-col justify-center items-center space-y-5'>

        <img src="user1.png" alt="user" className='h-60 w-60'/>
        <div className=' text-5xl  flex flex-col justify-center items-center'>
            <span className='font-bold text-6xl bg-gradient-to-r from-blue-500 via-red-400 to-yellow-300  bg-clip-text text-transparent'>I'm Omkar Hole,<br /></span>
            <span className='font-semibold'>Web developer based in pune</span>
        <div className='text-sm mt-3 '> Hi I'm Omkar,a Computer Engineering student passionate about building modern web applications.</div>
        </div>

        <div className='w-full'>
        <div className='mt-2 flex justify-center gap-8 space-x-1'>
            <div className='font-semibold cursor-pointer text-white
            hover:scale-105 transition duration-300 rounded-3xl bg-gradient-to-r from-purple-700 via-pink-500 to-orange-600 py-3 px-8'>Projects</div>
            <a  className='hover:scale-105 transition duration-300 font-semibold cursor-pointer rounded-3xl border-2  border-gray-200 py-3 px-8 bg-white'   href='Omkar_Hole_Resume_L4.pdf'
                target="_blank" 
                rel="noopener noreferrer">Resume</a>

        </div>
        </div>
        </div>

    </div>
    </>
    
    )
}

export default Header