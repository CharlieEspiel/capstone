import { Typography } from "@material-tailwind/react";
export default function RepairCounts() {
    return (
        <section className="max-w-4xl w-full block item-center mx-auto shadow bg-[#b936366a] backdrop-blur-2xl p-5 md:pb-8 md:px-12 h-max lg:mx-auto relative  md:h-80 lg:h-64 rounded-lg z-40">
            <Typography variant="h1" className="text-[40px] w-full text-white font-black tracking-normal text-center mb-5">Repair <span className="text-primary">Counts</span></Typography>
            <div className="w-full h-max container flex flex-col md:flex-row justify-between gap-10 sm:gap-4 items-center text-center">
                <div className="items-center justify-center w-full flex flex-col h-1/3">
                    <div className="w-24 p-1 h-24 flex items-center justify-center rounded-full bg-[#ffffff22] text-[50px]">40</div>
                    Computers
                </div>
                <div className="items-center justify-center w-full flex flex-col h-1/3">
                    <div className="w-24 p-1 h-24 flex items-center justify-center rounded-full bg-[#ffffff22] text-[50px]">40</div>
                    Computers
                </div>
                <div className="items-center justify-center w-full flex flex-col h-1/3">
                    <div className="w-24 p-1 h-24 flex items-center justify-center rounded-full bg-[#ffffff22] text-[50px]">40</div>
                    Computers
                </div>
            </div>
        </section>
    );
}
