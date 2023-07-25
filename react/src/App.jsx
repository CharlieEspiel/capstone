import About from "./components/About";
import Hero from "./components/Hero";
import NavbarV2 from "./components/NavbarV2";
import RepairCounts from "./components/RepairCounts";
import Branches from "./components/Branches";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <NavbarV2 />
      <div className='relative gap-y-5'>
            <Hero />
            <div id='about' className='w-full bg-gradient-to-t from-red-900 from-10% via-blue-gray-900 via-60% to-blue-gray-900 to-10%  py-10 lg:py-24 '>
                <About />
                <div className='relative flex p-5 m-5 lg:mx-auto my-56 md:my-48 lg:my-20 lg:mb-10 items-center z-10 justify-center'>
                    <RepairCounts />
                </div>
                <Branches />
            </div>
            <div className='w-full bg-gray-200 pb-10'>
                <Services />
            </div>
            <Reviews />
        </div>
      <Hero />
      <Footer />
    </div>
  );
}
