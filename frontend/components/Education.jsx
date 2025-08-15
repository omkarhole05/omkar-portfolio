import React from 'react'

function Education() {
    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen '>
                <div className='space-y-8'>
                    <div className='border-b-1 h-15 w-270 rounded-full flex flex-row justify-between items-center p-5'>
                        <div className='font-bold text-xl  '>10th</div>
                        <div className='text-sm'>Shree shahaji high school,Supe</div>
                        <div className='text-sm'>2019-2020</div>
                        <div className='font-semibold text-lg'>96%</div>
                        <a href="ssc.pdf" target="_blank"className='cursor-pointer text-sm
                        text-yellow-400 underline' >View Result</a>
                    </div>

                    <div className='border-b-1 h-15 w-270 rounded-full flex flex-row justify-between items-center p-5'>
                        <div className='font-bold text-xl'>11th</div>
                        <div className='text-sm'>Vidya Pratishthan college,Baramati</div>
                        <div className='text-sm'>2020-2021</div>
                        <div className='font-semibold text-lg'>91%</div>
                        <a href="11th.pdf" target="_blank"className='cursor-pointer text-sm text-yellow-400 underline'>View Result</a>
                    </div>

                    <div className='border-b-1 h-15 w-270 rounded-full flex flex-row justify-between items-center p-5'>
                        <div className='font-bold text-xl'>12th</div>
                        <div className='text-sm '>Vidya Pratishthan college,Baramati</div>
                        <div className='text-sm'>2021-2022</div>
                        <div className='font-semibold text-lg'>81%</div>
                        <a href="11th.pdf" target="_blank"className='cursor-pointer text-sm text-yellow-400 underline'>View Result</a>
                    </div>

                    <div className='border-b-1 h-15 w-270 rounded-full flex flex-row justify-between items-center p-5'>
                        <div className='font-bold text-xl'>1st Year</div>
                        <div className='text-sm'>Sinhgad academy of engg,Kondhwa</div>
                        <div className='text-sm'>2022-2023</div>
                        <div className='font-semibold text-lg'>8.67</div>
                        <a href="11th.pdf" target="_blank"className='cursor-pointer text-sm text-yellow-400 underline'>View Result</a>
                    </div>

                    <div className='border-b-1 h-15 w-270 rounded-full flex flex-row justify-between items-center p-5'>
                        <div className='font-bold text-xl'>2nd Year</div>
                        <div className='text-sm'>Sinhgad academy of engg,Kondhwa</div>
                        <div className='text-sm'>2023-2024</div>
                        <div className='font-semibold text-lg'>8.77</div>
                        <a href="11th.pdf" target="_blank"className='cursor-pointer text-sm text-yellow-400 underline'>View Result</a>
                    </div>

                    <div className='border-b-1 h-15 w-270 rounded-full flex flex-row justify-between items-center p-5'>
                        <div className='font-bold text-xl'>3rd Year</div>
                        <div className='text-sm'>Sinhgad academy of engg,Kondhwa</div>
                        <div className='text-sm'>2024-2025</div>
                        <div className='font-semibold text-lg'>8.89</div>
                        <a href="11th.pdf" target="_blank"className='cursor-pointer text-sm text-yellow-400 underline'>View Result</a>
                    </div>

                    {/* <div className='border-b-1 h-15 w-250 rounded-full flex flex-row justify-between items-center p-5'>
                        <div className='font-bold text-xl'>4th Year</div>
                        <div className='text-sm'>Sinhgad academy of engg,Kondhwa</div>
                        <div className='text-sm'>2025-2026</div>
                        <div className='font-semibold text-sm text-red-500'>No Result</div>
                        
                        <div></div>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default Education