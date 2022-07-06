import TestimonialCard from "./TestimonialCard"
import Fade from 'react-reveal/Fade';

const Testimonials = () => {
  return (
    <div>
        <div className="text-center flex flex-col items-center pb-16 pt-12">
            <Fade bottom>
            <h1 className="text-white text-[3rem] font-medium">Testimonials</h1>
            </Fade>

            <Fade bottom>
            <p className="text-[#9C9C9C] md:w-[35rem] text-center mx-6 mt-4">
                Solving user and business problems since last 15+ years.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna 
                aliqua.
            </p>
            </Fade>

        <div className="px-36 flex flex-wrap items-center justify-center mt-16">
            <Fade left>
            <TestimonialCard />
            </Fade>

            <Fade right>
            <TestimonialCard />
            </Fade>
            <Fade left>
            <TestimonialCard />
            </Fade>
            <Fade right>
            <TestimonialCard />
            </Fade>
        </div>
        </div>
    </div>
  )
}

export default Testimonials