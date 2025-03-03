import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, MessageSquare, Zap, TrendingUp, Shield, BarChart } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Advanced AI",
      description: "Our sophisticated AI engine understands context and delivers personalized responses",
      icon: Brain,
    },
    {
      title: "Real-time Chat",
      description: "Instant responses to customer queries with natural language processing",
      icon: MessageSquare,
    },
    {
      title: "Quick Integration",
      description: "Easy setup process that integrates with your existing systems",
      icon: Zap,
    },
    {
      title: "Performance Analytics",
      description: "Detailed insights into customer interactions and satisfaction metrics",
      icon: TrendingUp,
    },
    {
      title: "Secure Platform",
      description: "Enterprise-grade security to protect sensitive customer data",
      icon: Shield,
    },
    {
      title: "Business Growth",
      description: "Increase sales through intelligent upselling and recommendations",
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
            Features & Benefits
          </span>
        </motion.div>
        <h2 className="text-4xl font-bold text-[#2B2D3F] mb-4">
          Powerful Features for Your Business
        </h2>
        <p className="text-[#6B6F80] text-lg max-w-2xl mx-auto">
          Transform your customer interactions with our comprehensive suite of AI-powered features
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-[#5A4CE6]/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#5A4CE6]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2B2D3F] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#6B6F80]">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
