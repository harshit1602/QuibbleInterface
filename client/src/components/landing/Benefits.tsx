import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { PhoneX, TrendDown, Calculator, Smiley, Translate, ChartBar } from "@phosphor-icons/react";

export default function Benefits() {
  const benefits = [
    {
      title: "Zero Missed Calls",
      description: "Never miss an opportunity to connect with potential diners",
      icon: PhoneX,
      ariaLabel: "Phone with X mark icon"
    },
    {
      title: "Reduce Call Durations",
      description: "Resolve customer inquiries faster and more efficiently, freeing your staff",
      icon: TrendDown,
      ariaLabel: "Downward trend icon"
    },
    {
      title: "Cost Effective",
      description: "Achieve significant cost savings through automation and increased efficiency",
      icon: Calculator,
      ariaLabel: "Calculator icon"
    },
    {
      title: "Personalized Interactions",
      description: "Create memorable experiences that keep customers coming back",
      icon: Smiley,
      ariaLabel: "Smiley face icon"
    },
    {
      title: "Native Language Support",
      description: "Connect with a wider audience by communicating with customers in their language",
      icon: Translate,
      ariaLabel: "Translation icon"
    },
    {
      title: "Scalable",
      description: "Adapt to changing needs and expand your business effortlessly",
      icon: ChartBar,
      ariaLabel: "Bar chart icon"
    },
  ];

  return (
    <section 
      className="flex flex-col gap-8 sm:gap-10 py-8 sm:py-12 lg:py-16 px-4 sm:px-8 lg:px-[100px]"
      aria-labelledby="benefits-heading"
    >
      <div className="flex flex-col gap-4 items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 bg-[#5A4CE6]/10 rounded-full"
        >
          <span className="text-sm font-semibold text-[#4038A7] uppercase">
            benefits
          </span>
        </motion.div>
        <h2 
          id="benefits-heading" 
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2B2D3F]"
        >
          <span className="bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-transparent bg-clip-text">
            Transform Your Restaurant
          </span> with the Power of Quibble AI
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="w-full"
          >
            <Card className="bg-[#EFEEFD] py-6 sm:py-8 lg:py-10 px-2 h-full w-full">
              <CardContent className="flex flex-col items-center gap-4 sm:gap-6 p-0 sm:p-2">
                <div className="p-3 bg-white rounded-full flex items-center justify-center">
                  <benefit.icon 
                    size={28} 
                    weight="duotone" 
                    color="#4038A7" 
                    aria-hidden="true"
                    aria-label={benefit.ariaLabel}
                  />
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <h3 className="text-lg font-semibold text-[#2B2D3F]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-center text-[#6B6F80]">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}