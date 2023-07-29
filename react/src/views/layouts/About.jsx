import React, { Fragment } from "react";
import { AnimatePresence, motion } from "framer-motion"
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
    const [openAcc1, setOpenAcc1] = React.useState(false);
    const [openAcc2, setOpenAcc2] = React.useState(false);
    const [openAcc3, setOpenAcc3] = React.useState(false);

    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
    const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
    const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

    return (
        <section className="block max-w-7xl mx-auto my-20">
            {/* Main heading */}
            <Typography variant="h2" className="mb-2 font-extrabold tracking-normal text-title text-center text-primary md:mb-5">About <span className="text-main">Us</span></Typography>

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
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="w-full md:w-2/3 p-3">
                    <Fragment>
                        {/* First Accordion */}
                        <Accordion open={openAcc1}>
                            <AccordionHeader color="red" onClick={handleOpenAcc1}
                                className="text-primary text-[28px]">
                                Welcome to Repair TrackR:
                            </AccordionHeader>
                            <AccordionBody
                                className="text-primary text-[19px]">
                                At Repair Trackr, we take pride in providing a seamless and efficient solution for our valued customers to track the repair status of their products. Our user-friendly web app ensures you stay informed throughout the entire repair process, from drop-off to pick-up, putting you in control of your repair journey.                                </AccordionBody>
                        </Accordion>

                        {/* Second Accordion */}
                        <Accordion open={openAcc2}>
                            <AccordionHeader onClick={handleOpenAcc2}
                                className="text-primary text-[28px]">
                                Our Commitment to Transparency:
                            </AccordionHeader>
                            <AccordionBody
                                className="text-primary text-[19px]">
                                With Repair Trackr, transparency is at the core of our service. We understand how important it is for you to stay updated on your product's repair progress. Our platform provides real-time updates and notifications, giving you peace of mind and confidence in the quality and reliability of our repair services.                                </AccordionBody>
                        </Accordion>

                        {/* Third Accordion */}
                        <Accordion open={openAcc3} className="text-primary">
                            <AccordionHeader onClick={handleOpenAcc3}
                                className="text-primary text-[28px]">
                                Empowering Your Repair Experience:
                            </AccordionHeader>
                            <AccordionBody
                                className="text-primary text-[19px]">
                                Empowering you is our ultimate goal. Through Repair Trackr, we empower our customers with the ability to access comprehensive repair details, communicate with our expert technicians, and receive personalized insights to make informed decisions. Trust us to handle your repairs while you focus on what matters most.
                            </AccordionBody>
                        </Accordion>
                    </Fragment>
                </motion.div>
            </div>
        </section>
    );
}
