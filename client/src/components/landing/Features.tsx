import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Globe, Zap, Heart } from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Easy POS Integration",
      description: "Connects effortlessly with your existing POS, and ordering systems for  minimal disruption",
      icon: Zap,
      integrations: [
        { name: "Square", languages: ["Japanese", "German", "English", "French", "Spanish", "Italian"] },
        { name: "Orders", languages: ["Italian", "French", "Spanish", "Japanese", "German", "English"] },
        { name: "Urban Piper", languages: ["Japanese", "French", "English", "Spanish", "Italian", "German"] },
        { name: "Toast", languages: ["Japanese", "German", "English", "French", "Spanish", "Italian"] },
        { name: "Billing", languages: ["Japanese", "French", "English", "Spanish", "Italian", "German"] }
      ]
    },
    {
      title: "Multilingual Support",
      description: "Break language barriers by interacting with customers in their preferred language",
      icon: Globe,
      languages: ["English", "Spanish", "French", "German", "Italian", "Japanese"]
    },
    {
      title: "AI-Powered Natural Language Understanding",
      description: "Understands customer inquiries with remarkable accuracy, even with accents and variations in language",
      icon: Brain,
      example: {
        customer: "Can I get the... uh... the veggie burger? No wait, not the burger, the wrap. The veggie wrap.",
        response: "Okay, switching to the Veggie Wrap. Just to confirm, you'd like the Veggie Wrap instead of the Veggie Burger, correct?"
      }
    },
    {
      title: "Sentiment Analysis",
      description: "Identifies customer sentiment to tailor interactions and ensure a positive and personalized experience",
      icon: Heart,
      example: {
        customer: "This wait is really frustrating, I've been trying to order for 10 minutes!",
        response: "I sincerely apologize for the wait time. Let me help you place your order right away and ensure you get served quickly."
      }
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

      <div className="grid grid-cols-2 gap-6">
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
                <p className="text-[#6B6F80] mb-4">
                  {feature.description}
                </p>

                {feature.integrations && (
                  <div className="flex flex-wrap gap-2">
                    {feature.integrations.map((integration) => (
                      <div key={integration.name} className="mb-4">
                        <span className="block mb-2 px-3 py-1 bg-[#5A4CE6]/10 rounded-full text-sm text-[#4038A7]">
                          {integration.name}
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {integration.languages.map((lang) => (
                            <span key={lang} className="px-3 py-1 bg-[#5A4CE6]/5 rounded-full text-xs text-[#4038A7]">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {feature.languages && (
                  <div className="flex flex-wrap gap-2">
                    {feature.languages.map((language) => (
                      <span key={language} className="px-3 py-1 bg-[#5A4CE6]/10 rounded-full text-sm text-[#4038A7]">
                        {language}
                      </span>
                    ))}
                  </div>
                )}

                {feature.example && (
                  <div className="mt-4 space-y-2 bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-[#6B6F80] italic">"{feature.example.customer}"</p>
                    <p className="text-sm text-[#5A4CE6]">"{feature.example.response}"</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}