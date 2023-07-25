import React from "react";
import {
    MobileNav,
    Typography,
    Button,
    IconButton,
    ButtonGroup,
} from "@material-tailwind/react";

export default function NavbarV2() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex  flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-white">
            <Typography
                variant="h6"
                className="font-normal"

            >
                <a href="#about" className="flex items-center">
                    About
                </a>
            </Typography>
            <Typography
                variant="h6"
                className="font-normal"
            >
                <a href="#branch" className="flex items-center">
                    Branches
                </a>
            </Typography>
            <Typography
                variant="h6"
                className="font-normal"
            >
                <a href="#services" className="flex items-center">
                    Services
                </a>
            </Typography>
            <Typography
                variant="h6"
                className="font-normal"

            >
                <a href="#reviews" className="flex items-center">
                    Review
                </a>
            </Typography>
        </ul>
    );

    return (
        <header className="sticky top-0 z-50 w-full bg-[#262626]">
            <nav className="max-w-7xl mx-auto backdrop-blur-sm rounded-none py-2 px-4 lg:px-8 lg:py-4">

                <div className="flex items-center justify-between text-[#fafafa]">
                    <Typography
                        variant="h5"
                        href="#home"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                        REPAIR SYSTEM TRACKER
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <Button
                            variant="gradient"
                            size="md"
                            className="hidden lg:inline-block"
                            color="red"
                        >
                            <span>Track Repair</span>
                        </Button>


                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
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
                                    stroke="currentColor"
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
                   
                    <Button variant="gradient" color="red" size="sm" fullWidth className="my-3">
                        <span>Track Repair</span>
                    </Button>
                </MobileNav>
            </nav>
        </header>
    );
}