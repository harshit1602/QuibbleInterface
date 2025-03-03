import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingChat from "./FloatingChat";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-24 py-12 md:py-24 gap-12">
      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#2B2D3F] leading-tight mb-6">
          Transform Your Customer Service with Conversational AI
        </h1>
        <p className="text-xl text-[#6B6F80] mb-8">
          Enhance customer experience with our intelligent chatbot that understands context and delivers personalized responses.
        </p>
        <div className="flex flex-col gap-2">
          <Button 
            className="w-fit bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-white px-8 py-6 rounded-full flex items-center gap-2"
          >
            Try our Live Demo Now
            <ArrowRight className="w-5 h-5" />
          </Button>
          <span className="text-sm text-[#6B6F80]">
            No phone, email or credit card required
          </span>
        </div>
      </motion.div>

      <motion.div 
        className="flex-1 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="relative w-full aspect-[4/5] rounded-[150px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
            alt="Customer Service Representative"
            className="w-full h-full object-cover"
          />
        </div>
        <FloatingChat />
      </motion.div>
    </div>
  );
}
