import React, { Fragment } from "react";
import { motion } from "framer-motion"
import {
    Typography,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Card,
    CardHeader
} from "@material-tailwind/react";

// About Us section with animated image and expandable accordions
export default function About() {
    const [openAcc1, setOpenAcc1] = React.useState(true);
    const [openAcc2, setOpenAcc2] = React.useState(true);
    const [openAcc3, setOpenAcc3] = React.useState(true);

    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
    const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
    const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

    return (
        <section className="block max-w-7xl mx-auto my-20">
            {/* Main heading */}
            <Typography variant="h1" className="mb-2 font-extrabold tracking-normal text-title text-center text-primary md:mb-5">About <span className="text-main">Us</span></Typography>

            <div className="block md:flex my-10">
                {/* Animated image */}
                <motion.div
                    animate={{
                        y: [0, 10, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                    }}
                    className="relative md:w-1/3 flex justify-center items-center p-5"
                >
                    <Card className="group relative grid w-[15rem] h-[15rem] items-center justify-center overflow-hidden cursor-pointer">
                        <CardHeader className="absolute w-full h-full inset-0 m-0">
                            <img src="./src/assets/img/about.png" alt="about" className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500" />
                        </CardHeader>
                    </Card>
                </motion.div>

                {/* Accordions with expandable content */}
                <div className="w-full md:w-2/3 p-3">
                    <Fragment>
                        {/* First Accordion */}
                        <Accordion open={openAcc1}>
                            <AccordionHeader color="red" onClick={handleOpenAcc1}
                                className="text-primary text-[28px]">
                                What is Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody
                                className="text-primary text-[19px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint placeat veritatis vel illo, repudiandae molestias. Placeat
                            </AccordionBody>
                        </Accordion>

                        {/* Second Accordion */}
                        <Accordion open={openAcc2}>
                            <AccordionHeader onClick={handleOpenAcc2}
                                className="text-primary text-[28px]">
                                What is Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody
                                className="text-primary text-[19px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint placeat veritatis vel illo, repudiandae molestias. Placeat
                            </AccordionBody>
                        </Accordion>

                        {/* Third Accordion */}
                        <Accordion open={openAcc3} className="text-primary">
                            <AccordionHeader onClick={handleOpenAcc3}
                                className="text-primary text-[28px]">
                                What is Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody
                                className="text-primary text-[19px]">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint placeat veritatis vel illo, repudiandae molestias. Placeat
                            </AccordionBody>
                        </Accordion>
                    </Fragment>
                </div>
            </div>
        </section>
    );
}
