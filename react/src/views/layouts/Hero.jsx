import { Fragment } from "react"
import { Typography, Carousel } from "@material-tailwind/react"
import { Contact } from "../components/Contact"
import { TrackRepair } from "../components/TrackRepair"

export default function Hero() {
    return (

        <section className="w-full h-screen bg-hero bg-cover bg-center bg-no-repeat flex items-center">
            <div className="flex md max-w-7xl w-full h-full items-center px-5 gap-5 md:pb-56 mx-auto">
                <div className="w-full md:w-1/2 flex flex-col gap-4 justify-center items-center px-5 h-full">
                    <Fragment>

                        <Typography
                            as="span"
                            variant="h1"
                            className="w-full inline-block text-start font-extrabold text-main"><span className="text-primary">Track Repair</span><br />System</Typography>
                        <Typography variant="lead" className="text-primary/80 text-[17px]">
                            Your go-to solution for hassle-free repair monitoring. Keep tabs on your items' progress and stay informed at every step of the way.
                        </Typography>
                        <div className="flex flex-col md:flex-row gap-3 w-full">
                            <TrackRepair />
                            <Contact />
                        </div>
                    </Fragment>
                </div>

                <div className="w-full shadow-md md:w-1/2 relative z-40 bg-white hidden lg:flex rounded-xl justify-center items-center lg:px-10 p-3 my-16 md:mx-auto h-[420px]">
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
                </div>
            </div>
        </section>
    )
}
