import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function MissedRevenue() {
  return (
    <section className="py-24 px-6 md:px-24 bg-white">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-[#2B2D3F] mb-4">
            Missed Calls = Missed Revenue
          </h2>
          <p className="text-lg text-[#6B6F80] mb-8">
            Don't email valuable customers to your competition. QuibbleAI ensures every caller is answered.
          </p>
          <div className="w-full max-w-xl mx-auto mb-8">
            <img 
              src="/assets/Frame_1618873108.png"
              alt="Integration Grid"
              className="w-full h-auto object-contain"
            />
          </div>
          <Button 
            className="bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-white px-8 py-4 rounded-full"
          >
            Request a Free Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}