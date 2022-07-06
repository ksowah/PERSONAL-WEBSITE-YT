import React from 'react'

const TestimonialCard = () => {
  return (
    <div className='relative h-48 w-80 md:w-96 border-y border-y-[#312d2d] p-4 flex flex-col justify-around mb-12 mr-8'>
        <img src='https://ksets.netlify.app/personal/quote.png' alt=''
            className='absolute -top-3'
        />

        <p className='text-[#9c9c9c] text-start'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua. 
        </p>

        <div className='flex items-center space-x-2'>
            <span className='h-[3rem] w-[3rem] rounded-full bg-cover'
                style={{
                    backgroundImage: `url(https://ksets.netlify.app/personal/kev.jpeg)`,
                }}
            >
            </span>
                <p className='text-white text-lg font-medium'>John Doe</p>
        </div>
    </div>
  )
}

export default TestimonialCard