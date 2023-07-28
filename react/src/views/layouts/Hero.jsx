import { Fragment } from "react"
import { Typography, Carousel } from "@material-tailwind/react"
import { Contact } from "../components/Contact"
import { TrackRepair } from "../components/TrackRepair"
import { motion } from "framer-motion"
import { slideIn } from "../../utils/motion"


export default function Hero() {
    return (

        <section className="w-full h-screen bg-hero bg-cover bg-center bg-no-repeat flex items-center">
            <div className="flex md max-w-7xl w-full h-full items-center px-5 gap-5 md:pb-56 mx-auto">

                <motion.div 
                 variants={slideIn('left', "tween", 0.2, 1)}  
                className="w-full md:w-1/2 flex flex-col gap-4 justify-center items-center px-5 h-full">
                    <motion.a
                        href="#"
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "loop",
                        }}
                        className="block fixed z-50 justify-center items-center text-center right-0 md:right-8 bottom-8"
                    >
                        <img
                            src="./src/assets/img/screwdriver.png"
                            alt="about"
                            className="img-fluid h-[80px] w-[90px] hover:scale-110 cursor-pointer object-cover my-2" />
                        <small>scroll to top</small>
                    </motion.a>

                    <Fragment>
                        <Typography
                            as="span"
                            variant="h1"
                            className="w-full inline-block text-start font-extrabold text-main"><span className="text-primary">Track Repair</span><br />System</Typography>
                        <Typography variant="lead" className="text-primary text-[22px]">
                            Your go-to solution for hassle-free repair monitoring. Keep tabs on your items' progress and stay informed at every step of the way.
                        </Typography>
                        <div className="flex flex-col md:flex-row gap-3 w-full">
                            <TrackRepair />
                            <Contact />
                        </div>
                    </Fragment>
                </motion.div>


                <motion.div 
                 variants={slideIn('right', "tween", 0.2, 1)}
                className="w-full shadow-md md:w-1/2 relative z-30 bg-white hidden lg:flex rounded-xl justify-center items-center lg:px-10 p-3 my-16 md:mx-auto h-[420px]">

                    <Carousel
                        autoplay={true}
                        autoplayDelay={4000}
                        loop={true}

                        className="rounded-xl"
                    >
                        <img
                            src="./src/assets/img/carousel-01.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover object-center"
                        />
                        <img
                            src="./src/assets/img/carousel-02.jpg" alt="image 2"
                            className="h-full w-full object-cover object-center"
                        />
                        <img
                            src="./src/assets/img/carousel-03.jpg" alt="image 3"
                            className="h-full w-full object-cover object-center"
                        />
                        <img
                            src="./src/assets/img/carousel-04.jpg" alt="image 3"
                            className="h-full w-full object-cover object-center"
                        />
                    </Carousel>

                </motion.div>
            </div>
        </section>
    )
}
