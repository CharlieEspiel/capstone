import React, { Fragment } from "react";
import { motion } from "framer-motion"
import {
    Typography,
    Accordion,
    AccordionHeader,
    AccordionBody,
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
            <Typography variant="h2" className="mb-2 font-black tracking-normal text-[40px] text-center text-primary md:mb-5">About <span className="text-main">Us</span></Typography>

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
                    <img src="./src/assets/img/about.png" alt="about"
                        className="img-fluid h-[280px] w-[280px] hover:scale-105 cursor-pointer transition delay-75 duration-100  object-cover object-center rounded-xl shadow-md" />
                </motion.div>

                {/* Accordions with expandable content */}
                <div className="w-full md:w-2/3 p-3">
                    <Fragment>
                        {/* First Accordion */}
                        <Accordion open={openAcc1}>
                            <AccordionHeader onClick={handleOpenAcc1}>
                                What is Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint placeat veritatis vel illo, repudiandae molestias. Placeat doloremque voluptatibus nesciunt rem est, similique aspernatur? Aliquid debitis earum esse atque possimus?
                            </AccordionBody>
                        </Accordion>

                        {/* Second Accordion */}
                        <Accordion open={openAcc2}>
                            <AccordionHeader onClick={handleOpenAcc2}>
                                How to use Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint placeat veritatis vel illo, repudiandae molestias. Placeat doloremque voluptatibus nesciunt rem est, similique aspernatur? Aliquid debitis earum esse atque possimus?
                            </AccordionBody>
                        </Accordion>

                        {/* Third Accordion */}
                        <Accordion open={openAcc3}>
                            <AccordionHeader onClick={handleOpenAcc3}>
                                What can I do with Material Tailwind?
                            </AccordionHeader>
                            <AccordionBody>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint placeat veritatis vel illo, repudiandae molestias. Placeat doloremque voluptatibus nesciunt rem est, similique aspernatur? Aliquid debitis earum esse atque possimus?
                            </AccordionBody>
                        </Accordion>
                    </Fragment>
                </div>
            </div>
        </section>
    );
}
