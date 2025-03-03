import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingChat from "./FloatingChat";

export default function Hero() {
  return (
    <div className="flex justify-between items-center px-[100px] py-12">
      <motion.div 
        className="w-[683px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-[40px] leading-[52px] font-bold text-[#2B2D3F] mb-4">
          Maximize Your Order Value and Improve Customer Experience with Intelligent AI-Powered Suggestions
        </h1>
        <p className="text-[20px] leading-[26px] text-[#6B6F80] mb-12">
          Our AI understands customer preferences and makes personalized recommendations to increase order value naturally
        </p>
        <div className="space-y-2">
          <Button 
            className="bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-white px-8 py-4 rounded-full flex items-center gap-3"
          >
            Try our Live Demo Now
            <ArrowRight className="w-[18px] h-[18px]" />
          </Button>
          <span className="block text-[12px] text-[#6B6F80]">
            No phone, email or credit card required
          </span>
        </div>
      </motion.div>

      <div className="relative w-[497px]">
        <motion.div 
          className="w-[389px] h-[500px] ml-[108px]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <img 
            src="/assets/joyful-woman.png"
            alt="Woman using QuibbleAI on smartphone"
            className="w-full h-full object-cover rounded-[150px]"
          />
        </motion.div>
        <FloatingChat />
      </div>
    </div>
  );
}