// Import necessary components from external libraries
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion";
import Manila from "../components/BranchManila";
import Quezon from "../components/BranchQuezon";
import Davao from "../components/BranchDavao";

// Define the 'Branches' component
export default function Branches() {
    return (
        // AnimatePresence component for handling animations
        <AnimatePresence>
            {/* Container for the branches section */}
            <div className="div max-w-7xl mx-auto py-10 md:mb-32" id="branches">
                {/* Motion-based animation for the main heading */}
                <motion.p
                    initial={{ x: 100, opacity: 0, scale: 1 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                >
                    {/* Main heading for the 'Branches' section */}
                    <Typography variant="h2" className="text-[40px] text-center py-10 text-main mb-2 font-black tracking-normal">
                        <span className="text-primary">Our </span>Branches
                    </Typography>
                </motion.p>
                {/* Container for displaying branch cards with animations */}
                <motion.div
                    initial={{ y: -50, opacity: 0, scale: 1.2 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className={`flex flex-wrap items-center justify-center w-full gap-10`}
                >
                    {/* Card for the first branch */}
                    <Card className="group relative grid max-w-[22rem] h-[32rem] w-full items-center justify-center overflow-hidden cursor-pointer">
                        <CardHeader className="absolute w-full h-full inset-0 m-0">
                            <img src="./src/assets/img/carousel-01.jpg" alt="bg-01" className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500" />
                        </CardHeader>
                        <CardBody className="py-14 px-6 md:px-12 absolute w-full h-full inset-0 m-0  rounded-none
                            bg-gradient-to-t from-primary/90 via-primary/50 to-black/20
                            group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:via-black/50 duration-300">
                            <div className="absolute inset-0 flex flex-col text-center items-center justify-center translate-y-[10%] group-hover:translate-y-[-30%] transition-all mx-10 duration-300">
                                <div className="opacity-1 group-hover:opacity-0 duration-200 transition-all my-20">
                                    <Manila />
                                </div>
                                <h1 className="mb-6 font-semibold text-white text-3xl leading-[1.5]">
                                    Manila City
                                </h1>
                                <p className="mb-4 text-white italic opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    Address: Brgy. San Roque, Manila, Metro Manila, Philippines.
                                    Phone: +639194159988 <br></br>
                                    Email: trsmanila@gmail.com<br></br>
                                    Operating Hours: 9am - 6pm
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="group relative grid max-w-[22rem] h-[32rem] w-full items-center justify-center overflow-hidden cursor-pointer">
                        <CardHeader className="absolute w-full h-full inset-0 m-0">
                            <img src="./src/assets/img/carousel-02.jpg" alt="bg-02" className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500" />
                        </CardHeader>
                        <CardBody className="py-14 px-6 md:px-12 absolute w-full h-full inset-0 m-0  rounded-none
                            bg-gradient-to-t from-primary/90 via-primary/50 to-black/30
                            group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:via-black/50 duration-300 transition-colors">
                            <div className="absolute inset-0 flex flex-col text-center items-center justify-center translate-y-[10%] group-hover:translate-y-[-30%] transition-all mx-10 duration-300">
                                <div className="opacity-1 group-hover:opacity-0 duration-200 transition-all my-20">
                                    <Quezon />
                                </div>
                                <h1 className="mb-6 font-semibold text-white text-3xl leading-[1.5]">
                                    Quezon City
                                </h1>

                                <p className="mb-4 text-white italic opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    Address: Brgy. Holy Spirit, Quezon City,Philippines.<br></br>
                                    Phone: +639164142283 <br></br>
                                    Email: trsqc@gmail.com<br></br>
                                    Operating Hours: 9am - 6pm
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="group relative grid max-w-[22rem] h-[32rem] w-full items-center justify-center overflow-hidden cursor-pointer">
                        <CardHeader className="absolute w-full h-full inset-0 m-0">
                            <img src="./src/assets/img/carousel-03.jpg" alt="bg-03" className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500" />
                        </CardHeader>
                        <CardBody className="py-14 px-6 md:px-12 absolute w-full h-full inset-0 m-0  rounded-none
                            bg-gradient-to-t from-primary/90 via-primary/50 to-black/20
                            group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:via-black/50  duration-300">
                            <div className="absolute inset-0 flex flex-col text-center items-center justify-center translate-y-[10%] group-hover:translate-y-[-30%] transition-all mx-10 duration-300">
                                <div className="opacity-1 group-hover:opacity-0 duration-200 transition-all my-20">
                                    <Davao />
                                </div>
                                <h1 className="mb-6 font-semibold text-white text-3xl leading-[1.5]">
                                    Davao City
                                </h1>
                                <p className="mb-4 text-white italic opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    Address: Talisay, Davao City, Philippines.<br></br>
                                    Phone: +639215611784 <br></br>
                                    Email: trsdavao@gmail.com<br></br>
                                    Operating Hours: 9am - 6pm
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </motion.div>
            </div>
        </AnimatePresence>
    );
}
