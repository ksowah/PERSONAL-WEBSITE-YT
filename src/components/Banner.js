import Button from "./Button"
import Stack from "./Stack"
import { FaReact, FaGithub } from "react-icons/fa"
import { SiJavascript, SiMongodb } from "react-icons/si"
import Fade from 'react-reveal/Fade';

const Banner = () => {
  return (
    <div className="lg:mx-36 mx-6">
        <div className="md:flex items-center justify-between py-16">
            <div>
                <Fade bottom>
                    <h1 className="text-white text-[2rem] md:text-[4rem] font-medium text-center md:text-start">Kelvin Sowah</h1>
                </Fade>

                <Fade bottom>

                <p className="text-[#9C9C9C] md:w-[28rem] mt-4 text-lg">
                I am a clever Software developer keen to introduce new development techniques 
						into stale production formats. Creative provider of exceptional 
						development frameworks. I Drive personal and team-wide excellence 
						through tireless pursuit of verifiably superior software products. 
                </p>

                <Button 
                    text={"Let's get started"}
                    className="mt-6 shadow-md shadow-[#3F8E00] bg-gradient-to-r hover:bg-gradient-to-l from-[#3F8E00] to-[#62BA1B]"
                />
                </Fade>
            </div>

            <Fade right>
            <div className="flex items-center justify-center">
                <div className="xl:h-[25rem] h-[20rem] w-[20rem] xl:w-[25rem] rounded-full bg-cover mt-14 md:mt-0 animate-pulse" 
                style={{backgroundImage: `url("https://ksets.netlify.app/personal/kev.jpeg")`}}>

                </div>
            </div>
            </Fade>
        </div>

        <div className="pb-16 flex flex-col items-center md:items-start">
            <Fade bottom>
                <p className="text-white">Worked with</p>
            </Fade>

            <Fade bottom>
            <div className="flex flex-wrap justify-center md:justify-start">
                <Stack Icon={FaReact} name="React JS"/>
                <Stack Icon={SiJavascript} name="Javascript"/>
                <Stack Icon={FaGithub} name="Git" />
				<Stack Icon={SiMongodb} name="Mongoos" />
            </div>
            </Fade>
        </div>
    </div>
  )
}

export default Banner