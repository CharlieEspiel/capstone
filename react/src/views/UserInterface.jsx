import About from "./layouts/About";
import Hero from "./layouts/Hero";
import RepairCounts from "./layouts/RepairCounts";
import Branches from "./layouts/Branches";
import Services from "./layouts/Services";
import Reviews from "./layouts/Reviews";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { Card } from "@material-tailwind/react";
import { AnimatePresence } from "framer-motion";

export default function UserInterface() {
    return (
        <>
            <AnimatePresence>
                <div className="relative overflow-x-hidden">
                    <Header />
                    <Hero />
                    <Card
                        shadow={false}
                        className="mx-6 -mt-20 bg-white md:mx-12 md:-mt-72 mb-10"
                        id="about"
                    >
                        <div className="container z-20 mx-auto px-4">
                            <About />
                            <RepairCounts />
                            <Branches />
                            <Services />
                            <Reviews />
                        </div>
                    </Card>
                    <Footer />
                </div>
            </AnimatePresence>
        </>
    );
}
