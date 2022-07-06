import React from 'react'
import Button from './Button'

const Projects = ({flip, image, button}) => {
  return (
    <div className={`lg:flex ${flip && "flex-row-reverse"} px-6 md:px-36 mb-12 w-full space-x-4 `}>
        <div className='flex-1 flex flex-col justify-around h-80 px-6'>
                <h1 className='text-black text-[2rem] font-medium'>Web App</h1>

            <p className='text-[#9C9C9C]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua. sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>

            <Button text={"View Project"} className={`${button} px-10 w-fit py-2`}/>
        </div>

        <div className='h-80 flex-1 bg-cover rounded-lg' style={{backgroundImage: `url(${image})`}}>
        </div>
    </div>
  )
}

export default Projects