import { Fragment } from "react"
import { Typography, Carousel } from "@material-tailwind/react"
import { Contact } from "../components/Contact"
import { TrackRepair } from "../components/TrackRepair"
import { motion } from "framer-motion"


export default function Hero() {
    return (

        <section className="w-full h-screen bg-hero bg-cover bg-center bg-no-repeat flex items-center">
            <div className="flex md max-w-7xl w-full h-full items-center px-5 gap-5 md:pb-56 mx-auto">

                <div

                    className="w-full md:w-1/2 flex flex-col gap-4 justify-center items-center px-5 h-full">
                    <a href="#"

                        className="tracking-wide flex fixed z-50 justify-center items-center text-center bg-none h-14 w-14 rounded-full backdrop-blur right-0 md:right-5 bottom-5 text-xs"
                    >
                        <img src="./src/assets/arrow-up.png" alt="arrow-up" />
                    </a>

                    <Fragment>
                        <Typography
                            as="span"
                            variant="h1"
                            className="w-full inline-block text-start font-extrabold text-main"><span className="text-primary">Repair</span> TrackR</Typography>
                        <Typography variant="lead" className="text-primary text-[22px]">
                            Your go-to solution for hassle-free repair monitoring. Keep tabs on your items' progress and stay informed at every step of the way.
                        </Typography>
                        <div className="flex flex-col md:flex-row gap-3 w-full">
                            <TrackRepair />
                            <Contact />
                        </div>
                    </Fragment>
                </div>


                <motion.div
                    initial={{ x: 100, opacity: 0, scale: 1.2 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
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
