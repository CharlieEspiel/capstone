// Import necessary components and modules
import React from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

// Define the 'Header' component
export default function Header() {
    // State to handle the mobile navigation
    const [openNav, setOpenNav] = React.useState(false);

    // UseEffect to handle the window resize event and close mobile nav
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    // JSX for the navigation list
    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
            {/* Navigation links */}
            <Typography
                as="li"
                variant="h6"
                className="p-1 text-primary text-[15px]"
            >
                <a href="#" className="flex items-center">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="h6"
                className="p-1 text-primary text-[15px]"
            >
                <a href="#about" className="flex items-center">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="h6"
                className="p-1 text-primary text-[15px]"
            >
                <a href="#branches" className="flex items-center">
                    Branches
                </a>
            </Typography>
            <Typography
                as="li"
                variant="h6"
                className="p-1 text-primary text-[15px]"
            >
                <a href="#services" className="flex items-center">
                    Services
                </a>
            </Typography>
            <Typography
                as="li"
                variant="h6"
                className="p-1 text-primary text-[15px]"
            >
                <a href="#reviews" className="flex items-center">
                    Reviews
                </a>
            </Typography>
        </ul>
    );

    return (
        // Main navigation container
        <Navbar className="top-0 mx-auto h-max max-w-7xl z-50 rounded py-2 px-4 lg:px-8 lg:py-4">
            {/* Header content */}
            <div className="flex items-center justify-between">
                {/* Brand logo */}
               <img src="./src/assets/repair-trackr-logo.png" alt="logo" className="img-fluid h-12" />
                {/* Navigation and buttons */}
                <div className="flex items-center gap-4">
                    {/* Desktop navigation */}
                    <div className="mr-4 hidden lg:block">{navList}</div>
                    {/* 'Track Repair' button (visible on desktop) */}
                    <Button
                        color="red"
                        size="lg"
                        className="hidden lg:inline-block bg-main"
                    >
                        <span>Track Repair</span>
                    </Button>
                    {/* Hamburger menu button (visible on mobile) */}
                    <IconButton
                        variant="text"
                        className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            // Hamburger menu icon when mobile nav is open
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
                            // Close icon when mobile nav is closed
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
            {/* Mobile navigation */}
            <MobileNav open={openNav}>
                {navList}
                {/* 'Track Repair' button (visible on mobile) */}
                <Button color="red" size="md" fullWidth className="mb-2 bg-main">
                    <span>Track Repair</span>
                </Button>
            </MobileNav>
        </Navbar>
    );
}
