import { Fragment, useState } from "react";
import {
    Typography,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function About() {
    const [open, setOpen] = useState(0);
    const [alwaysOpen, setAlwaysOpen] = useState(true);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const handleAlwaysOpen = () => {
        setOpen((cur) => !cur);
    };
    return (
        <section className={`relative p-3 py-10 md:p-10 mx-3 xl:mx-auto h-3/4 pb-12 max-w-5xl rounded-lg shadow-md backdrop-blur-sm bg-[#fafafa20]`}>
            <Typography variant="h1" className="text-[40px] text-center text-[#FAFAFA] md:mb-5">ABOUT US</Typography>
            <Fragment>
                <Accordion open={alwaysOpen}>
                    <AccordionHeader onClick={handleAlwaysOpen}>
                        What is Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint placeat veritatis vel illo, repudiandae molestias. Placeat doloremque voluptatibus nesciunt rem est, similique aspernatur? Aliquid debitis earum esse atque possimus?
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 1}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                        How to use Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint placeat veritatis vel illo, repudiandae molestias. Placeat doloremque voluptatibus nesciunt rem est, similique aspernatur? Aliquid debitis earum esse atque possimus?
                    </AccordionBody>
                </Accordion>
                <Accordion open={open === 2}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                        What can I do with Material Tailwind?
                    </AccordionHeader>
                    <AccordionBody>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sint placeat veritatis vel illo, repudiandae molestias. Placeat doloremque voluptatibus nesciunt rem est, similique aspernatur? Aliquid debitis earum esse atque possimus?
                    </AccordionBody>
                </Accordion>
            </Fragment>
        </section>

    );
}