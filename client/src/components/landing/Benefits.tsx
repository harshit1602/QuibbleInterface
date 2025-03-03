import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare, Zap, TrendingUp, Shield, BarChart } from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      title: "Zero Missed Calls",
      description: "Never miss an opportunity to connect with potential diners",
      icon: MessageSquare,
    },
    {
      title: "Reduce Call Durations",
      description: "Resolve customer inquiries faster and more efficiently, freeing your staff",
      icon: Zap,
    },
    {
      title: "Cost Effective",
      description: "Achieve significant cost savings through automation and increased efficiency",
      icon: TrendingUp,
    },
    {
      title: "Personalized Interactions",
      description: "Create memorable experiences that keep customers coming back",
      icon: Brain,
    },
    {
      title: "Native Language Support",
      description: "Connect with a wider audience by communicating with customers in their language",
      icon: MessageSquare,
    },
    {
      title: "Scalable",
      description: "Adapt to changing needs and expand your business effortlessly",
      icon: BarChart,
    },
  ];

  return (
    <section className="py-24 px-[100px] bg-gray-50">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-4 px-4 py-2 bg-[#5A4CE6]/10 rounded-full"
        >
          <span className="text-sm font-semibold text-[#4038A7] uppercase">
            benefits
          </span>
        </motion.div>
        <h2 className="text-4xl font-bold text-[#2B2D3F] mb-4">
          Transform Your Restaurant with the Power of Quibble AI
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#5A4CE6]/10 rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-[#5A4CE6]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2B2D3F] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#6B6F80]">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
