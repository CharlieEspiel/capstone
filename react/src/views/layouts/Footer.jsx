// Import necessary components and modules
import { Typography } from "@material-tailwind/react";
import Subscribe from "./Subscribe";

// Define an array of link categories with their respective items
const LINKS = [
    {
        title: "Services",
        items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
        title: "Company",
        items: ["About us", "Careers", "Press", "News"],
    },
    {
        title: "Resource",
        items: ["Blog", "Newsletter", "Events", "Help center"],
    },
];

// Get the current year for the footer
const currentYear = new Date().getFullYear();

// Define the 'Footer' component
export default function Footer() {
    return (
        // Footer container
        <footer className="relative w-full">
            {/* Component for the Subscribe section */}
            <Subscribe />
            {/* Main container */}
            <div className="mx-auto w-full md:-top-40 max-w-7xl px-8">
                {/* Grid layout for arranging elements */}
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    {/* Heading for the footer */}
                    <img src="./src/assets/repair-trackr-logo.png" alt="logo" className="img-fluid h-20 mb-2 w-full sm:w-auto" />
                    {/* Container for displaying link categories */}
                    <div className="grid grid-cols-3 justify-between gap-4">
                        {/* Map through each link category */}
                        {LINKS.map(({ title, items }) => (
                            <ul key={title}>
                                {/* Heading for the link category */}
                                <Typography
                                    variant="h5"
                                    className="mb-3 text-primary"
                                >
                                    {title}
                                </Typography>
                                {/* Map through each link item */}
                                {items.map((link) => (
                                    <li key={link}>
                                        {/* Link item */}
                                        <Typography
                                            as="a"
                                            variant="small"
                                            href="#"
                                            className="py-1.5 font-normal text-primary/80 transition-colors hover:text-main"
                                        >
                                            {link}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                {/* Bottom section of the footer */}
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t-[2px] border-primary/60 py-4 md:flex-row md:justify-between">
                    {/* Copyright text */}
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-primary md:mb-0"
                    >
                        &copy; {currentYear} <a href="https://material-tailwind.com/">Repair Tracking System</a>. All
                        Rights Reserved.
                    </Typography>
                    {/* Social media icons */}
                    <div className="flex gap-4 text-primary sm:justify-center">
                        <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                            {/* SVG icon for a social media platform */}
                            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                {/* Icon path */}
                            </svg>
                        </Typography>
                        {/* Add more social media icons here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
