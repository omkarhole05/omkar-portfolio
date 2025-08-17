import { Contact, User } from 'lucide-react'
import React from 'react'

function About() {
    return (
        <>
        <div id='about' className='flex flex-col items-center justify-center min-h-screen py-20 px-6 w-full'>
           
            <div className='flex flex-col items-center justify-center w-full md:max-w-6xl'>

                 <div className=' mb-20 font-semibold md:text-6xl text-4xl flex items-center gap-2 text-gray-800
            '><Contact  className="w-14 h-14 text-gray-800"/>
                About Me</div>

            <div className=' w-full flex  md:flex-row flex-col items-center justify-center space-x-5'>
                <div><img src="omkar_prof.jpg" alt="img" className='rounded-lg w-90 hidden md:block'/></div>

                <div className='space-y-5 '>
                    <div className='w-full md:max-w-6xl '>I'm a passionate Computer Engineering student with a strong interest in web development and modern technologies.
                   I love building clean, responsive user interfaces and solving real-world problems with code.
                    I'm experienced with Tailwind CSS, and RESTful APIs.
                    Always eager to learn and collaborate on impactful projects.</div>

                    <div className='mb-8  '>Passionate MERN stack developer creating impactful, user-friendly web solutions.
                            Driven by curiosity, I turn ideas into seamless digital experiences.</div>

                    <div className=' md:max-w-2xl space-y-3 w-full bg-white shadow-md rounded-2xl p-3'>
                        <div className=' flex items-center flex-row md:space-x-5 font-semibold md:text-lg text-md gap-10'>
                            <div className=''>HTML</div>
                            <div className='md:w-120 w-55 h-2 rounded-xl bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500'></div>
                        </div>

                        <div className='flex flex-row items-center space-x-5 font-semibold md:text-lg text-md  gap-15'>
                            <div className=''>CSS</div>
                            <div className='md:w-90 w-45 h-2 rounded-xl bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500'></div>
                        </div>

                        <div className='flex flex-row items-center space-x-5 font-semibold md:text-lg text-md gap-4'>
                            <div className=''>React JS</div>
                            <div className='md:w-70 w-35 h-2 rounded-xl bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500'></div>
                        </div>

                        <div className='flex flex-row items-center space-x-5 font-semibold md:text-lg text-md'>
                            <div className=''>JavaScript</div>
                            <div className='md:w-80 w-50 h-2 rounded-xl bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500'></div>
                        </div>
                        
                    </div>
                </div>
            </div>

        

        <div className=' w-full flex flex-row  items-center justify-around  md:space-x-80  mt-15'>
            <div className=' flex flex-col md:items-center justify-center gap-2'>
                <div className='bg-gradient-to-r from-blue-500 via-red-400 to-yellow-300  bg-clip-text text-transparent
                text-4xl font-bold'>02+</div>
                <div className='text-sm'>YEARS OF EXPERIANCE</div>
            </div>

            <div className=' flex flex-col md:items-center justify-center gap-2'>
                <div className='bg-gradient-to-r from-blue-500 via-red-400 to-yellow-300  bg-clip-text text-transparent
                md:text-5xl text-4xl font-bold'>05+</div>
                <div className='text-sm'>PROJECT COMPLETED</div>
            </div>

            <div className=' flex flex-col md:items-center justify-center gap-2'>
                <div className='bg-gradient-to-r from-blue-500 via-red-400 to-yellow-300  bg-clip-text text-transparent
                text-4xl font-bold'>04+</div>
                <div className='text-sm'>HAPPY CLIENTS</div>
            </div>

        </div>
        </div>
        </div>
        </>
    )
}

export default About