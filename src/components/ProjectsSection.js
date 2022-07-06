import React from 'react'
import Projects from './Projects'
import Fade from 'react-reveal/Fade';

const ProjectsSection = () => {
  return (
    <div className='bg-gray-200 flex flex-col items-center'>
        <div className="text-center flex flex-col items-center pb-16 pt-12">
            <Fade bottom>
            <h1 className="text-black text-[3rem] font-medium">Projects</h1>
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

        <Fade bottom>
        <Projects image={"https://ksets.netlify.app/personal/mac.jpg"} button="bg-[#FFA217]"/>
        </Fade>
        <Fade bottom>

        <Projects flip image={"https://ksets.netlify.app/personal/mac.jpg"} button="bg-[#000AFF]"/>
        </Fade>

        <Fade bottom>
        <Projects image={"https://ksets.netlify.app/personal/mac.jpg"} button="bg-[#2AB090]"/>

        </Fade>
    </div>
  )
}

export default ProjectsSection