import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-[#5A4CE6]/10 rounded-full">
            <span className="text-sm font-semibold text-[#4038A7] uppercase">
              About Us
            </span>
          </div>
          <h1 className="text-4xl font-bold text-[#2B2D3F] mb-6">
            Revolutionizing Restaurant Operations with AI
          </h1>
          <p className="text-lg text-[#6B6F80] mb-8">
            QuibbleAI is dedicated to transforming the restaurant industry through innovative AI solutions. Our platform seamlessly integrates with existing systems to enhance customer service, streamline operations, and boost revenue.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <div className="text-left">
              <h3 className="text-xl font-semibold text-[#2B2D3F] mb-4">Our Mission</h3>
              <p className="text-[#6B6F80]">
                To empower restaurants with intelligent automation that enhances customer experience while reducing operational complexity.
              </p>
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-[#2B2D3F] mb-4">Our Vision</h3>
              <p className="text-[#6B6F80]">
                To be the leading AI solution provider in the restaurant industry, driving innovation and efficiency in food service operations.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
