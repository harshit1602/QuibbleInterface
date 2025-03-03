import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export default function FloatingChat() {
  return (
    <motion.div 
      className="absolute -left-24 top-32 bg-white p-6 rounded-xl shadow-lg w-[194px] z-10"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="flex justify-center mb-5">
        <div className="w-[76px] h-[76px] bg-[#E7F0FF] rounded-full flex items-center justify-center">
          <div className="w-[60px] h-[60px] bg-[#5A4CE6] rounded-full flex items-center justify-center">
            <Phone className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <p className="text-right text-sm text-[#2B2D3F]">
          Hey, I'd like a Large Onion Pizza & a Choco Lava Cake
        </p>
        <p className="text-sm text-[#5A4CE6]">
          Got it! Want to add cold coffee for just ₹99?
        </p>
        <p className="text-right text-sm text-[#2B2D3F]">
          Sure, add one!
        </p>
      </div>
    </motion.div>
  );
}