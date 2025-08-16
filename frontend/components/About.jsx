import { Contact, User } from 'lucide-react'
import React from 'react'

function About() {
    return (
        <>
        <div className=' flex flex-col items-center justify-center min-h-screen px-6'>
           
            <div className='flex flex-col items-center justify-center max-w-6xl'>
                 <div className='mb-20 font-semibold text-6xl flex items-center gap-2 text-gray-800
            '><Contact  className="w-14 h-14 text-gray-800"/>
                About Me</div>
            <div className='flex  flex-row items-center justify-center space-x-5'>
                <div><img src="omkar_prof.jpg" alt="img" className='rounded-lg w-90'/></div>

                <div className='space-y-5'>
                    <div className='max-w-6xl'>I'm a passionate Computer Engineering student with a strong interest in web development and modern technologies.
                   <br /> I love building clean, responsive user interfaces and solving real-world problems with code.
                    I'm experienced with Tailwind CSS, and RESTful APIs.
                    Always eager to learn and collaborate on impactful projects.</div>

                    <div className='mb-8 '>Passionate MERN stack developer creating impactful, user-friendly web solutions.
                            Driven by curiosity, I turn ideas into seamless digital experiences.</div>
                    <div className=' max-w-2xl space-y-3'>
                        <div className='flex items-center flex-row space-x-5 font-semibold text-lg'>
                            <div className='mr-14'>HTML</div>
                            <div className='w-120 h-2 rounded-xl bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500'></div>
                        </div>

                        <div className='flex flex-row items-center space-x-5 font-semibold text-lg'>
                            <div className='mr-18'>CSS</div>
                            <div className='w-90 h-2 rounded-xl bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500'></div>
                        </div>

                        <div className='flex flex-row items-center space-x-5 font-semibold text-lg'>
                            <div className='mr-11'>React JS</div>
                            <div className='w-70 h-2 rounded-xl bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500'></div>
                        </div>

                        <div className='flex flex-row items-center space-x-5 font-semibold text-lg'>
                            <div className='mr-6'>JavaScript</div>
                            <div className='w-80 h-2 rounded-xl bg-gradient-to-r from-purple-700 via-pink-500 to-orange-500'></div>
                        </div>
                        
                    </div>
                </div>
            </div>

        

        <div className=' w-full flex lg:flex-row flex-col items-center lg:justify-around justify-center lg:space-x-60 space-y-10 mt-15'>
            <div className='flex flex-col items-center justify-center space-y-2'>
                <div className='bg-gradient-to-r from-blue-500 via-red-400 to-yellow-300  bg-clip-text text-transparent
                text-4xl font-bold'>02+</div>
                <div className='text-sm'>YEARS OF EXPERIANCE</div>
            </div>

            <div className='flex flex-col items-center justify-center space-y-2'>
                <div className='bg-gradient-to-r from-blue-500 via-red-400 to-yellow-300  bg-clip-text text-transparent
                text-5xl font-bold'>05+</div>
                <div className='text-sm'>PROJECT COMPLETED</div>
            </div>

            <div className='flex flex-col items-center justify-center space-y-2'>
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