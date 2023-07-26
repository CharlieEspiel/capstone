import About from "./components/About";
import Hero from "./components/Hero";
import RepairCounts from "./components/RepairCounts";
import Branches from "./components/Branches";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Card } from "@material-tailwind/react";

export default function App() {
  return (
    <div className="relative">
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
  );
}
