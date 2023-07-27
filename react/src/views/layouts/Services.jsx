import React from "react";
import {
    Card,
    Typography,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";


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
        <section id="services" className="max-w-7xl mx-auto flex flex-col p-3 py-20 h-full bg-services bg-cover bg-center bg-no-repeat">
            <Typography
                as="span"
                variant="h2"
                className="inline-block font-black tracking-normaltext-[40px] text-main text-center pb-12"><span className="text-primary">Our </span>Services</Typography>
            <div className="flex flex-wrap items-center justify-center w-full gap-10">
                <Card className="md:w-[45%] p-5">
                    <Accordion open={openAcc1}>
                        <AccordionHeader onClick={handleOpenAcc1}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </Card>

                <Card className="md:w-[45%] p-5">
                    <Accordion open={openAcc2}>
                        <AccordionHeader onClick={handleOpenAcc2}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </Card>
                <Card className="md:w-[45%] p-5">
                    <Accordion open={openAcc3}>
                        <AccordionHeader onClick={handleOpenAcc3}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </Card>
                <Card className="md:w-[45%] p-5">
                    <Accordion open={openAcc4}>
                        <AccordionHeader onClick={handleOpenAcc4}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </Card>
                <Card className="md:w-[45%] p-5">
                    <Accordion open={openAcc5}>
                        <AccordionHeader onClick={handleOpenAcc5}>What is Material Tailwind?</AccordionHeader>
                        <AccordionBody>
                            We&apos;re not always in the position that we want to be at. We&apos;re constantly
                            growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                            ourselves and actualize our dreams.
                        </AccordionBody>
                    </Accordion>
                </Card>
                <Card className="md:w-[45%] p-5">
                    <Accordion open={openAcc6}>
                        <AccordionHeader onClick={handleOpenAcc6}>What is Material Tailwind?</AccordionHeader>
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