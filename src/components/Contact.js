import React from 'react'
import Button from './Button'
import Fade from 'react-reveal/Fade';

const Contact = () => {
  return (
    <div className='bg-gray-200 flex flex-col items-center'>
        <div className="text-center flex flex-col items-center pb-16 pt-12">
            <Fade bottom>
            <h1 className="text-black text-[3rem] font-medium">Get In Touch</h1>
            </Fade>
            <Fade bottom>
            <p className="text-[#9C9C9C] md:w-[35rem] text-center mx-4 mt-4">
                Solving user and business problems since last 15+ years.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua.
            </p>
            </Fade>
        </div>

        <form className='flex flex-col mb-24 space-y-4 p-6 shadow-lg'>
            <label className='flex flex-col text-lg font-medium text-black'>
                Email
                <input type={"email"} placeholder="Please enter email" className="outline-none px-2 py-1 w-[20rem] text-[1rem] font-normal bg-transparent border border-gray-400" />
            </label>

            <label className='flex flex-col text-lg font-medium text-black'>
                Mobile
                <input type={"email"} placeholder="Please enter mobile" className="outline-none px-2 py-1 w-[20rem] text-[1rem] font-normal bg-transparent border border-gray-400" />
            </label>
            <label className='flex flex-col text-lg font-medium text-black'>
                Email
                <textarea placeholder="Please enter message" className="outline-none px-2 py-1 w-[20rem] text-[1rem] font-normal bg-transparent border border-gray-400" />
            </label>

            <div className='flex items-center justify-center'>
            <Button text={"submit"} className="bg-black mt-6 px-10 w-fit py-1.5"/>
            </div>
        </form>
    </div>
  )
}

export default Contact