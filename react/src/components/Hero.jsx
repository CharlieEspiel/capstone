import { Fragment } from "react"
import { Button, Typography, Carousel, IconButton } from "@material-tailwind/react"
export default function Hero() {
    return (
        <section className="w-full h-screen bg-gradient-to-b from-transparent via-transparent to-red-200 flex items-center">
            <div className="flex max-w-7xl w-full h-full px-5 gap-5 md:pb-60 mx-auto">
                <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center items-start px-5 h-full">
                    <Fragment>

                        <Typography
                            as="span"
                            variant="h1"
                            className="w-full inline-block text-start font-extrabold text-main"><span className="text-primary">Track Repair</span><br />System</Typography>
                        <Typography variant="p" className="text-primary/70">
                            Material Tailwind is an easy to use components library for Tailwind CSS
                            and Material Design.
                        </Typography>
                        <div className="flex gap-3 w-full">
                            <Button size="md" color="red" className="bg-main w-full text-[16px] p-4 px-8 mt-2 rounded-xl whitespace-nowrap">
                                Track Repair
                            </Button>

                            <Button size="md" color="red" className="bg-white text-main text-[16px] whitespace-nowrap p-4 w-full px-8 mt-2 rounded-xl">
                                Contact Us
                            </Button>
                        </div>
                    </Fragment>
                </div>

                <div className="w-full shadow-md lg:w-1/2 relative z-40 bg-white hidden rounded-xl lg:flex justify-center items-end md: lg:px-10 p-3 mt-20 md:mx-auto h-[85%]">
                    <Carousel
                        autoplay={true}
                        autoplayDelay={4000}
                        loop={true}
                        className="rounded-xl"
                        prevArrow={({ handlePrev }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handlePrev}
                                className="!absolute top-2/4 left-4 -translate-y-2/4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="square"
                                        strokeLinejoin="miter"
                                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                                    />
                                </svg>
                            </IconButton>
                        )}
                        nextArrow={({ handleNext }) => (
                            <IconButton
                                variant="text"
                                color="white"
                                size="lg"
                                onClick={handleNext}
                                className="!absolute top-2/4 !right-4 -translate-y-2/4"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-6 w-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                    />
                                </svg>
                            </IconButton>
                        )}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                            alt="image 1"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                            alt="image 2"
                            className="h-full w-full object-cover"
                        />
                        <img
                            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
                            alt="image 3"
                            className="h-full w-full object-cover"
                        />
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
