import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Globe, Zap, Heart } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Easy POS Integration",
      description: "Connects effortlessly with your existing POS, and ordering systems for minimal disruption",
      icon: Zap,
      image: "/assets/Frame 1618873029.png"
    },
    {
      title: "Multilingual Support",
      description: "Break language barriers by interacting with customers in their preferred language",
      icon: Globe,
      image: "/assets/multilingual-support.png"
    },
    {
      title: "AI-Powered Natural Language Understanding",
      description: "Understands customer inquiries with remarkable accuracy, even with accents and variations in language",
      icon: Brain,
      image: "/assets/Frame 1618873108.png"
    },
    {
      title: "Sentiment Analysis",
      description: "Identifies customer sentiment to tailor interactions and ensure a positive and personalized experience",
      icon: Heart,
      image: "/assets/sentiment-analysis.png"
    }
  ];

  return (
    <section className="py-24 px-[100px]">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-4 px-4 py-2 bg-[#5A4CE6]/10 rounded-full"
        >
          <span className="text-sm font-semibold text-[#4038A7] uppercase">
            Features
          </span>
        </motion.div>
        <h2 className="text-4xl font-bold text-[#2B2D3F] mb-4">
          Unlocking Operational Efficiency with Quibble AI
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[#5A4CE6]/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#5A4CE6]" />
                </div>
                <h3 className="text-xl font-semibold text-[#2B2D3F] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#6B6F80] mb-6">
                  {feature.description}
                </p>
                <div className="w-full aspect-[16/9] rounded-lg overflow-hidden bg-gray-50">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}