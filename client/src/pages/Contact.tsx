import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-[#5A4CE6]/10 rounded-full">
              <span className="text-sm font-semibold text-[#4038A7] uppercase">
                Contact Us
              </span>
            </div>
            <h1 className="text-4xl font-bold text-[#2B2D3F] mb-4">
              Get in Touch with QuibbleAI
            </h1>
            <p className="text-lg text-[#6B6F80]">
              Have questions about how QuibbleAI can help your restaurant? We'd love to hear from you.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <Input placeholder="Your Name" className="w-full" />
            </div>
            <div>
              <Input type="email" placeholder="Your Email" className="w-full" />
            </div>
            <div>
              <Input placeholder="Subject" className="w-full" />
            </div>
            <div>
              <Textarea placeholder="Your Message" className="w-full min-h-[150px]" />
            </div>
            <Button className="w-full bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-white">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
