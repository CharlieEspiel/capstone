import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { AnimatePresence, motion } from "framer-motion"


const branches = [
    { id: 1, name: "Manila City", address: "Metro Manila", image: "./src/assets/img/carousel-01.jpg", contact: "123456" },
    { id: 2, name: "Cebu City", address: "Metro Manila", image: "./src/assets/img/carousel-02.jpg", contact: "123456" },
    { id: 3, name: "Quezon City", address: "Metro Manila", image: "./src/assets/img/carousel-03.jpg", contact: "123456" },



];

export default function Branches() {
    return (
        <AnimatePresence>
            <div className="div max-w-7xl mx-auto py-10 md:mb-20" id="branches">
                <motion.p
                    key="div"
                    initial={{ x: 100, opacity: 0, scale: 1 }}
                    whileInView={{ x: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}>
                    <Typography variant="h2" className="text-[40px] text-center py-10 text-main mb-2 font-black tracking-normal"><span className="text-primary">Our </span>Branches
                    </Typography>
                </motion.p>
                <motion.div
                    key="div"
                    initial={{ y: -50, opacity: 0, scale: 1.2 }}
                    whileInView={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    className={`flex flex-wrap items-center justify-center w-full gap-10`}>

                    <Card className="group relative grid max-w-[22rem] h-[32rem] w-full items-center justify-center overflow-hidden cursor-pointer">
                        <CardHeader className="absolute w-full h-full inset-0 m-0">
                            <img src="./src/assets/img/carousel-01.jpg" alt="bg-01" className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500" />
                        </CardHeader>
                        <CardBody className="py-14 px-6 md:px-12 absolute w-full h-full inset-0 m-0  rounded-none
                            bg-gradient-to-t from-primary/90 via-primary/50 to-black/20
                            group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:via-black/50 duration-300">
                            <div className="absolute inset-0 flex flex-col text-center items-center justify-center translate-y-[50%] group-hover:translate-y-0 transition-all mx-10 duration-300">
                                <h1 className="mb-6 font-semibold text-white text-3xl leading-[1.5]">
                                    Manila City
                                </h1>
                                <p className="mb-4 text-white italic opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum assumenda quas nam odit, maxime velit expedita porro
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                    <Card className="group relative grid max-w-[22rem] h-[32rem] w-full items-center justify-center overflow-hidden cursor-pointer duration-300 hover:scale-105">
                        <CardHeader className="absolute w-full h-full inset-0 m-0">
                            <img src="./src/assets/img/carousel-02.jpg" alt="bg-02" className="h-full w-full object-cover group-hover:scale-125 transition-transform duration-500" />
                        </CardHeader>
                        <CardBody className="py-14 px-6 md:px-12 absolute w-full h-full inset-0 m-0  rounded-none
                            bg-gradient-to-t from-primary/90 via-primary/50 to-black/30
                            group-hover:bg-gradient-to-t group-hover:from-black/80 group-hover:via-black/50 duration-300 transition-colors">
                            <div className="absolute inset-0 flex flex-col text-center items-center justify-center translate-y-[50%] group-hover:translate-y-0 transition-all mx-10 duration-300">
                                <h1 className="mb-6 font-semibold text-white text-3xl leading-[1.5]">
                                    Quezon City
                                </h1>
                                <p className="mb-4 text-white italic opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum assumenda quas nam odit, maxime velit expedita porro
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
                            <div className="absolute inset-0 flex flex-col text-center items-center justify-center translate-y-[50%] group-hover:translate-y-0 transition-all mx-10 duration-300">
                                <h1 className="mb-6 font-semibold text-white text-3xl leading-[1.5]">
                                    Davao City
                                </h1>
                                <p className="mb-4 text-white italic opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum assumenda quas nam odit, maxime velit expedita porro
                                </p>
                            </div>
                        </CardBody>
                    </Card>
                </motion.div>
            </div>
        </AnimatePresence>

    );
}