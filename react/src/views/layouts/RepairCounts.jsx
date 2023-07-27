import React from "react";
import { Typography } from "@material-tailwind/react";
import { motion, AnimatePresence } from "framer-motion";

// Animated dashboard displaying repair counts for Computers
export default function RepairCounts() {
  return (
    <AnimatePresence>
      <motion.div
        key="div"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="w-4/5 md:w-3/5 block item-center mx-auto shadow-md bg-stats bg-center bg-cover p-5 space-y-5 h-max  items-center relative  md:my-24 rounded-lg z-40"
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
          className="w-full h-max container flex flex-col md:flex-row text-white justify-between gap-10 items-center text-center"
        >
          {/* Computers Repair Count */}
          <div className="items-center justify-center w-full flex  flex-col h-1/3 hover:scale-110 cursor-pointer transition delay-75 duration-100">
            <div className="w-24 p-1 h-24 flex items-center justify-center rounded-full bg-[#ffffff40] text-white text-[50px] mb-2">40</div>
            Computers
          </div>

          {/* Another Item Repair Count */}
          <div className="items-center justify-center w-full flex  flex-col h-1/3 hover:scale-110 cursor-pointer transition delay-75 duration-100">
            <div className="w-24 p-1 h-24 flex items-center justify-center rounded-full bg-[#ffffff40] text-white text-[50px] mb-2">40</div>
            Another Item
          </div>

          {/* Yet Another Item Repair Count */}
          <div className="items-center justify-center w-full flex  flex-col h-1/3 hover:scale-110 cursor-pointer transition delay-75 duration-100">
            <div className="w-24 p-1 h-24 flex items-center justify-center rounded-full bg-[#ffffff40] text-white text-[50px] mb-2">40</div>
            Yet Another Item
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
