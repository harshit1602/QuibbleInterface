import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function MissedRevenue() {
  return (
    <section 
      className="flex flex-col gap-6 sm:gap-8 lg:gap-10 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-[100px]"
      aria-labelledby="missed-revenue-heading"
    >
      <div className="text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 
            id="missed-revenue-heading" 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B2D3F] mb-2 sm:mb-4"
          >
            Missed Calls = Missed Revenue
          </h2>
          <p className="text-base sm:text-lg text-[#6B6F80] mb-6 sm:mb-8 px-4 sm:px-0">
            Don't send valuable customers to your competitors. QuibbleAI ensures every diner is answered
          </p>
          <Button 
            className="bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full"
            onClick={() => window.open("https://calendly.com/ashish-garg-quibbleai", "_blank")}
            aria-label="Request a free QuibbleAI demo"
          >
            Request a Free Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}