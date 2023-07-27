import { Fragment } from "react"
import { Button, Typography, Carousel } from "@material-tailwind/react"

export default function Hero() {
    return (
        <section className="w-full h-screen bg-hero bg-cover bg-center bg-no-repeat flex items-center">
            <div className="flex max-w-7xl w-full h-full px-5 gap-5 md:pb-60 mx-auto">
                <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center items-start px-5 h-full">
                    <Fragment>

                        <Typography
                            as="span"
                            variant="h1"
                            className="w-full inline-block text-start font-extrabold text-main"><span className="text-primary">Track Repair</span><br />System</Typography>
                        <Typography variant="lead" className="text-primary/80 text-[17px]">
                            Your go-to solution for hassle-free repair monitoring. Keep tabs on your items' progress and stay informed at every step of the way. 
                        </Typography>
                        <div className="flex flex-col md:flex-row gap-3 w-full">
                            <Button size="md" color="red" className="bg-main w-full text-[16px] p-4 px-8 mt-2 rounded-xl whitespace-nowrap">
                                Track Repair
                            </Button>

                            <Button size="md" color="red" className="bg-white text-main text-[16px] whitespace-nowrap p-4 w-full px-8 mt-2 rounded-xl">
                                Contact Us
                            </Button>
                        </div>
                    </Fragment>
                </div>

                <div className="w-full shadow-md lg:w-1/2 relative z-40 bg-white hidden rounded-xl lg:flex justify-center items-end md: lg:px-10 p-3 my-16 md:mx-auto max-h-[650px]">
                    <Carousel
                        autoplay={true}
                        autoplayDelay={4000}
                        loop={true}

                        className="rounded-xl"
                    >
                        <img
                            src="./src/assets/img/carousel-01.jpg"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="./src/assets/img/carousel-02.jpg" alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="./src/assets/img/carousel-03.jpg" alt="image 3"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="./src/assets/img/carousel-04.jpg" alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
