import React from "react";
import {
    Card,
    Typography,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";


export default function Services() {
    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <section id="services" className={`max-w-7xl mx-auto flex flex-col p-3 pt-20 md:pt-14 h-full py-10`}>
            <Typography variant="h1" className="text-[40px] text-[#AC0C2E] text-center my-10">SERVICES</Typography>
            <div className="flex flex-wrap items-center justify-center w-full gap-10">
                <Card className="md:w-[45%] p-5">
                    <Accordion open={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </Card>

                <Card className="md:w-[45%] p-5">
                    <Accordion open={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </Card>   <Card className="md:w-[45%] p-5">
                    <Accordion open={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </Card>
                <Card className="md:w-[45%] p-5">
                    <Accordion open={open === 4}>
                        <AccordionHeader onClick={() => handleOpen(4)}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </Card>
                <Card className="md:w-[45%] p-5">
                    <Accordion open={open === 5}>
                        <AccordionHeader onClick={() => handleOpen(5)}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </Card>
                <Card className="md:w-[45%] p-5">
                    <Accordion open={open === 6}>
                        <AccordionHeader onClick={() => handleOpen(6)}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </Card>
            </div>
        </section>
    );
}