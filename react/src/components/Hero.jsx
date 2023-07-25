import { Fragment } from "react"
import { Button, Typography } from "@material-tailwind/react"
export default function Hero() {
    return (
        <section className="w-full bg-slider-02 bg-center bg-cover h-fit mx-auto">
            <div className="flex flex-col-reverse md:flex-row gap-4 max-w-7xl mx-auto h-[90vh]">
                <div className="w-full lg:w-1/2 flex flex-col gap-4 text-center justify-center items-center lg:px-10 p-3 md:m-auto h-full">
                    <Fragment >
                        <Typography variant="p" className="text-white">
                            Material Tailwind is an easy to use components library for Tailwind CSS
                            and Material Design. It provides a simple way to customize your
                            components, you can change the colors, fonts, breakpoints and everything
                            you need.
                        </Typography>
                        <Button size="lg" color="red" className="bg-black text-[16px] p-4 px-8 mt-2 rounded-xl">
                            Track Repair
                        </Button>
                    </Fragment>
                </div>


                <div className="w-full lg:w-1/2 relative  hidden lg:flex justify-center items-center lg:px-10 p-3 md:m-auto h-full">
                    <img src="/src/assets/IMac_Retina_5K-2-1.png" alt="pc" className="img-fluid absolute top-10 left-14 z-10 object-contain object-center hidden xl:flex lg:h-[500px]" />
                    <img src="/src/assets/IMac_Retina_5K-2-1.png" alt="pc" className="img-fluid absolute xl:bottom-10 center xl:right-14 z-20 object-contain object-center lg:h-[550px]" />
                </div>
            </div>
        </section>
    )
}
