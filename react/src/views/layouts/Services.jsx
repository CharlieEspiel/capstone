import React from "react";
import {
    Card,
    Typography,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion"


export default function Services() {
    const [openAcc1, setOpenAcc1] = React.useState(true);
    const [openAcc2, setOpenAcc2] = React.useState(true);
    const [openAcc3, setOpenAcc3] = React.useState(true);
    const [openAcc4, setOpenAcc4] = React.useState(true);
    const [openAcc5, setOpenAcc5] = React.useState(true);
    const [openAcc6, setOpenAcc6] = React.useState(true);


    const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
    const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
    const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);
    const handleOpenAcc4 = () => setOpenAcc4((cur) => !cur);
    const handleOpenAcc5 = () => setOpenAcc5((cur) => !cur);
    const handleOpenAcc6 = () => setOpenAcc6((cur) => !cur);




    return (
            <section id="services" className="max-w-7xl mx-auto flex flex-col p-3 py-10 mb-10 h-full bg-services bg-cover bg-center bg-no-repeat">
                <motion.p
                    initial={{ x: -100, opacity: 0, scale: 0.95 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}>
                    <Typography variant="h2" className="text-[40px] text-center py-10 text-main mb-2 font-black tracking-normal"><span className="text-primary">Our </span>Services
                    </Typography>
                </motion.p>
                <motion.div
                    key="div"
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    className="flex flex-wrap items-center justify-center w-full gap-10">
                    <Card className="md:w-[45%] h-44 p-5">
                        <Accordion open={openAcc1}>
                            <AccordionHeader onClick={handleOpenAcc1}>Maintenance and Repairs</AccordionHeader>
                            <AccordionBody>
                            Offering comprehensive track maintenance and repair services to ensure the safety
                            </AccordionBody>
                        </Accordion>
                    </Card>

                    <Card className="md:w-[45%] h-44 p-5">
                        <Accordion open={openAcc2}>
                            <AccordionHeader onClick={handleOpenAcc2}> Inspection and Assessment</AccordionHeader>
                            <AccordionBody>
                            Conducting regular inspections and assessments of tracks to identify issues, defects, or potential problems.
                            </AccordionBody>
                        </Accordion>
                    </Card>
                    <Card className="md:w-[45%] h-44 p-5">
                        <Accordion open={openAcc3}>
                            <AccordionHeader onClick={handleOpenAcc3}>Predictive Maintenance Solutions</AccordionHeader>
                            <AccordionBody>
                            Implementing data-driven solutions for predictive maintenance to prevent track failures.
                            </AccordionBody>
                        </Accordion>
                    </Card>
                    <Card className="md:w-[45%] h-44 p-5">
                        <Accordion open={openAcc4}>
                            <AccordionHeader onClick={handleOpenAcc4}>Track Monitoring Systems</AccordionHeader>
                            <AccordionBody>
                                Providing advanced track monitoring systems with sensors and analytics to monitor track conditions in real-time.
                            </AccordionBody>
                        </Accordion>
                    </Card>
                    <Card className="md:w-[45%] h-44 p-5">
                        <Accordion open={openAcc5}>
                            <AccordionHeader onClick={handleOpenAcc5}>Asset Management</AccordionHeader>
                            <AccordionBody>
                            Managing track assets, maintenance histories, and inspection schedules to optimize asset performance
                            </AccordionBody>
                        </Accordion>
                    </Card>
                    <Card className="md:w-[45%] h-44 p-5">
                        <Accordion open={openAcc6}>
                            <AccordionHeader onClick={handleOpenAcc6}>Work Order Management</AccordionHeader>
                            <AccordionBody>
                            Streamlining work order processes, assigning tasks, and tracking repairs efficiently.
                            </AccordionBody>
                        </Accordion>
                    </Card>
                </motion.div>
            </section>
    );
}