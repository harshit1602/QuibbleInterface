import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import FloatingChat from "./FloatingChat";
import { ArrowRight } from "@phosphor-icons/react";

export default function Hero() {
  return (
    <div className="relative flex flex-col-reverse gap-8 lg:gap-12 lg:flex-row justify-between items-center px-4 sm:px-6 md:px-16 lg:px-[100px] py-8 lg:py-12">
      {/* Left Content */}
      <motion.div 
        className="flex flex-col gap-6 lg:gap-8 items-start w-full md:w-4/5 text-center lg:text-left md:mx-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col gap-3 lg:gap-4">
          <h1 className="text-[24px] md:text-[40px] leading-tight font-bold text-[#2B2D3F]">
            Tired of Missed Calls and <br className="hidden sm:block" /> Frustrated Guests? <br/>
            <span className="bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-transparent bg-clip-text">
              Let Quibble AI Handle the Chaos
            </span>
          </h1>
          <p className="text-sm md:text-lg text-[#6B6F80]">
            Taking orders, answering questions, managing reservations <br/> Quibble AI handles it all while you focus on serving great food 😋
          </p>
        </div>
        {/* CTA Button */}
        <div className="flex flex-col gap-2 items-center lg:items-start w-full">
          <Button 
            className="bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-white font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl flex items-center gap-2 sm:gap-3"
            onClick={() => window.open("https://demo.quibbleai.io/", "_blank")}
          >
            Try our Live Demo Now
            <ArrowRight size={24} className="sm:w-7 sm:h-7" />
          </Button>
          <p className="text-xs sm:text-sm text-[#6B6F80]">
            No phone, email, or credit card required
          </p>
        </div>
      </motion.div>

      {/* Right Image Section - Positioned to left on mobile */}
      <div className="relative w-full lg:w-auto flex justify-center mb-8 lg:mb-0">
        <div className="relative max-w-[250px] sm:max-w-[280px] md:max-w-[420px]">
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img 
              src="/assets/joyful-woman.png"
              alt="Happy woman using Quibble AI on her smartphone"
              loading="lazy"
              className="w-full h-auto object-cover"
            />
          </motion.div>
          <FloatingChat />
        </div>
      </div>
    </div>
  );
}