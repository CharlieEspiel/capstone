import { Fragment } from "react"
import { Button, Typography } from "@material-tailwind/react"
export default function Hero() {
    return (
        <section className="w-full h-screen bg-gradient-to-b from-transparent via-transparent to-red-200 flex items-center">
            <div className="flex max-w-7xl w-full h-full px-5 gap-5 md:pb-64 mx-auto">
                <div className="w-full lg:w-1/2 flex flex-col gap-4 justify-center items-start px-5 h-full">
                    <Fragment>
                        <Typography
                            as="span"
                            variant="h1"
                            className="w-full inline-block text-start font-extrabold tracking-normal text-main"><span className="text-primary">Track Repair</span><br />System</Typography>
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


                <div className="w-full shadow-md lg:w-1/2 relative bg-blue-gray-100 hidden rounded-xl lg:flex justify-center items-center lg:px-10 p-3 md:m-auto h-4/5">
                   
                </div>
            </div>
        </section>
    )
}
