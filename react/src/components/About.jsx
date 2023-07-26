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
        <section className="max-w-7xl mx-auto my-20">
            <Typography variant="h2" className="mb-2 font-black tracking-normal text-[40px] text-center text-primary md:mb-5">About <span className="text-main">Us</span></Typography>
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