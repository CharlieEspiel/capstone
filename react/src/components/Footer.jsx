import { Typography } from "@material-tailwind/react";

const SITEMAP = [
    {
        title: "Company",
        links: ["About Us", "Careers", "Our Team", "Projects"],
    },
    {
        title: "Help Center",
        links: ["Discord", "Twitter", "GitHub", "Contact Us"],
    },
    {
        title: "Resources",
        links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
    },
    {
        title: "Products",
        links: ["Templates", "UI Kits", "Icons", "Mockups"],
    },
];

const currentYear = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className=" bg-[#262626] w-full relative  bottom-0 z-10">
            <div className="mx-auto w-full max-w-7xl px-3">
                <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
                    {SITEMAP.map(({ title, links }, key) => (
                        <div key={key} className="w-full">
                            <Typography
                                variant="small"
                                className="mb-4 font-bold uppercase text-gray-400"
                            >
                                {title}
                            </Typography>
                            <ul className="space-y-1">
                                {links.map((link, key) => (
                                    <Typography key={key} as="li" className="font-normal text-gray-100">
                                        <a
                                            href="#"
                                            className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                                        >
                                            {link}
                                        </a>
                                    </Typography>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="flex w-full bg-[#262626] flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <div>
                        <Typography
                            variant="small"
                            className="mb-4 text-center font-normal text-gray-100 md:mb-0"
                        >
                            &copy; {currentYear} <a href="https://material-tailwind.com/">PC Restoration</a>. All
                            Rights Reserved.
                        </Typography>
                        <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">

                            </Typography>
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">

                            </Typography>
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </Typography>
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">

                            </Typography>
                            <Typography as="a" href="#" className="opacity-80 transition-opacity hover:opacity-100">

                            </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}