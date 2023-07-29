import React from "react";
import { Typography } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";

// Animated dashboard displaying repair counts for Computers
export default function RepairCounts() {
  return (
      <motion.div
        initial={{ y: -50, opacity: 0, scale: 1.5 }}
        whileInView={{ y: 0, opacity: 1 , scale: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
        className="w-4/5 lg:w-3/5 block item-center mx-auto shadow-md bg-stats bg-center bg-cover p-5 space-y-5 h-max  items-center relative  md:my-24 rounded-xl z-40"
      >
        {/* Title */}
        <Typography
          variant="h2"
          className="text-[40px] text-center text-white my-2 py-2 md:py-0 font-black tracking-normal"
        >
          Repair Counts
        </Typography>

        {/* Animated repair count cards */}
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="w-full h-full container flex flex-col md:flex-row text-white justify-between gap-10 items-center"
        >
          {/* Computers Repair Count */}
          <div className="items-center justify-center w-full flex flex-col h-1/3 hover:scale-110 cursor-pointer transition delay-75 duration-100">
            <div className="w-28 h-28 p-1  flex items-center justify-center rounded-full bg-[#ffffff40] text-white text-[40px] mb-2">200<p className="text-[22px]">+</p></div>
            Computers
          </div>

          {/* Another Item Repair Count */}
          <div className="items-center justify-center w-full flex flex-col h-1/3 hover:scale-110 cursor-pointer transition delay-75 duration-100">
            <div className="w-28 h-28  p-1 flex items-center justify-center rounded-full bg-[#ffffff40] text-white text-[40px] mb-2">100<p className="text-[22px]">+</p></div>
            Laptops
          </div>

          
          {/* Yet Another Item Repair Count */}
          <div className="items-center justify-center w-full flex  flex-col h-1/3 hover:scale-110 cursor-pointer transition delay-75 duration-100">
            <div className="w-28 h-28 p-1 flex items-center justify-center rounded-full bg-[#ffffff40] text-white text-[40px] mb-2">150<p className="text-[22px]">+</p></div>
            Printers
          </div>
        </motion.div>
      </motion.div>
  );
}
