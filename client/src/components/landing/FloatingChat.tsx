import React from "react";
import { motion } from "framer-motion";
import { Phone } from "@phosphor-icons/react";

export default function FloatingChat() {
  return (
    <motion.div 
      className="absolute border bg-white rounded-xl shadow-lg w-auto z-10
                 p-3 
                 sm:p-4 
                 md:p-5
                 lg:p-6
                 -left-20
                 sm:-left-32
                 md:-left-24
                 lg:-left-32
                 -top-6 
                 sm:-top-10
                 md:-top-12"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="flex justify-center mb-3 md:mb-4 lg:mb-5">
        <div className="relative 
                      w-7 h-7 
                      sm:w-8 sm:h-8
                      md:w-12 md:h-12
                      lg:w-16 lg:h-16
                      bg-[#E7F0FF] rounded-full flex items-center justify-center">
          <div className="absolute 
                        w-9 h-9 
                        sm:w-10 sm:h-10
                        md:w-11 md:h-11
                        lg:w-12 lg:h-12
                        bg-[#5A4CE6] rounded-full flex items-center justify-center">
            <Phone 
              size={20} 
              weight="fill" 
              color="#fff" 
              className="sm:scale-110 md:scale-115 lg:scale-125" 
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5 max-w-[160px] sm:max-w-[180px] md:max-w-[200px] lg:max-w-[240px]">
        <p className="text-xs sm:text-sm text-[#2B2D3F] text-right">
          Hey, I'd like a Large Onion <br className="hidden sm:block"/> Pizza & a Choco Lava Cake
        </p>
        <p className="text-xs sm:text-sm text-[#5A4CE6]">
          Got it! Want to add <br className="hidden sm:block"/> cold coffee for just ₹99?
        </p>
        <p className="text-right text-xs sm:text-sm text-[#2B2D3F]">
          Sure, add one!
        </p>
      </div>
    </motion.div>
  );
}