import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function UnderConstruction() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8">
            <img
              src="/images/quibble-logo.jpg"
              alt="QuibbleAI"
              className="h-16 w-auto mx-auto"
            />
          </div>
          <h1 className="text-4xl font-bold text-[#2B2D3F] mb-6">
            Page Under Construction
          </h1>
          <p className="text-lg text-[#6B6F80] mb-8">
            We're working hard to bring you something amazing. Please check back soon!
          </p>
          <Link href="/">
            <Button className="bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-white">
              Return Home
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
