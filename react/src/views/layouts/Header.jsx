import React, { useState } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

export default function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const [active, setActive] = useState("");

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"

                className="p-1 text-primary text-[15px]"
            >
                <a href="/"
                    className="flex items-center"
                    onClick={() => {
                        setActive('');
                        window.scrollTo(0, 0)
                    }}>
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 text-primary text-[15px]"
            >
                <a href="#about" className="flex items-center">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 text-primary text-[15px]"
            >
                <a href="#branches" className="flex items-center">
                    Branches
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                className="p-1 text-primary text-[15px]"
            >
                <a href="#reviews" className="flex items-center">
                    Reviews
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="top-0 mx-auto h-max max-w-7xl z-50 rounded py-2 px-4 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between">
                <Typography
                    as="a"
                    variant="h6"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 text-primary"
                >
                    Track Repair <span className="text-main">Sytem</span>
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    <Button
                        color="red"
                        size="lg"
                        className="hidden lg:inline-block bg-main"
                    >
                        <span>Track Repair</span>
                    </Button>
                    <IconButton
                        variant="text"
                        className="ml-auto  h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="red"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="red"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <MobileNav open={openNav}>
                {navList}
                <Button color="red" size="md" fullWidth className="mb-2 bg-main">
                    <span>Track Repair</span>
                </Button>
            </MobileNav>
        </Navbar>
    );
}