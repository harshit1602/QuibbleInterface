import { Check } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MissedRevenue from "@/components/landing/MissedRevenue";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small restaurants just getting started with AI customer service",
      features: [
        "Up to 100 conversations/month",
        "Basic POS Integration",
        "Email Support",
        "Single Language Support",
        "Basic Analytics"
      ],
      cta: "Start Free Trial",
      ctaUrl: "https://demo.quibbleai.io/"
    },
    {
      name: "Professional",
      price: "$149",
      description: "Ideal for growing restaurants with multiple locations needing advanced AI support",
      features: [
        "Up to 1000 conversations/month",
        "Advanced POS Integration",
        "Priority Support",
        "Multi-language Support",
        "Advanced Analytics",
        "Sentiment Analysis",
        "Custom Integration Options"
      ],
      cta: "Get Started",
      ctaUrl: "https://demo.quibbleai.io/",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large restaurant chains with specific needs requiring customized AI solutions",
      features: [
        "Unlimited conversations",
        "Full POS Integration Suite",
        "24/7 Dedicated Support",
        "All Languages Supported",
        "Enterprise Analytics",
        "Custom AI Training",
        "API Access",
        "Custom Branding",
        "SLA Guarantee"
      ],
      cta: "Contact Sales",
      ctaUrl: "https://demo.quibbleai.io/"
    }
  ];

  const faqs = [
    {
      question: "What happens after my free trial?",
      answer: "After your 14-day free trial, you'll be automatically subscribed to the plan you chose. Don't worry, we'll send you a reminder before the trial ends."
    },
    {
      question: "Can I switch plans later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
    },
    {
      question: "What kind of support do you offer?",
      answer: "All plans include some level of support. Professional plans get priority support, while Enterprise plans receive 24/7 dedicated support."
    }
  ];

  // JSON-LD structured data for pricing
  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "QuibbleAI Restaurant Customer Service AI",
    "description": "AI-powered customer service solution for restaurants",
    "offers": plans.map(plan => ({
      "@type": "Offer",
      "priceCurrency": "USD",
      "price": plan.price.replace("$", ""),
      "name": `${plan.name} Plan`,
      "description": plan.description
    }))
  };

  return (
    <div className="flex flex-col gap-8 items-center" >
      {/* Pricing Plans Section */}
      <section className="flex flex-col gap-10 py-12 px-4 sm:px-8 lg:px-[100px] items-center">
        <h1 id="pricing-heading" className="text-3xl sm:text-4xl font-bold text-[#2B2D3F] text-center">
          Pricing Plans That <span className="bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-transparent bg-clip-text">
            Fit Your Needs
          </span>
        </h1>
        <div className="grid grid-cols-1 w-full md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="h-full"
            >
              <article className="h-full flex flex-col gap-6 p-6 sm:p-8 shadow-custom items-start rounded-3xl">
                <h2 className="text-2xl sm:text-[28px] font-normal text-[#2B2D3F]">{plan.name}</h2>
                <div className="flex flex-col gap-4 sm:gap-6 items-start w-full">
                  <div className="flex flex-col gap-2 items-start">
                    <p className="font-normal text-base sm:text-lg text-[#2B2D3F]">Starts at</p>
                    <div className="flex gap-2 items-end w-full">
                      <span className="text-3xl sm:text-4xl font-bold text-[#2B2D3F]">{plan.price}</span>
                      <span className="text-sm sm:text-base font-normal tracking-normal text-[#6B6F80]">
                        per month
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-[#6B6F80] font-normal">{plan.description}</p>
                </div>
                <hr className="w-full border border-solid bg-[#DCE0E7]" />
                <ul className="space-y-3 h-full w-full">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check size={16} className="flex-shrink-0 text-[#2B2D3F]" aria-hidden="true" />
                      <span className="font-normal text-sm sm:text-base text-[#2B2D3F]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={plan.ctaUrl} 
                  className="bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-white font-semibold text-base px-6 sm:px-8 rounded-[8px] w-full h-auto py-3 mt-auto inline-block text-center"
                >
                  {plan.cta}
                </a>
              </article>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="flex flex-col gap-10 px-4 md:px-[100px] items-center w-full py-12">
        <h2 id="faq-heading" className="text-2xl sm:text-3xl font-bold text-center text-[#2B2D3F]">
          Frequently Asked Questions
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Accordion 
            type="single" 
            collapsible 
            className="w-full space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-xl shadow-sm overflow-hidden"
              >
                <h3>
                  <AccordionTrigger className="px-6 py-4 text-base sm:text-lg font-medium text-[#2B2D3F] hover:bg-[#EFEEFD] text-left w-full">
                    {faq.question}
                  </AccordionTrigger>
                </h3>
                <AccordionContent className="px-6 py-4 text-[#6B6F80] bg-gray-50 border-t">
                  <p className="text-sm sm:text-base">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>

      {/* Missed Revenue Section */}
      <MissedRevenue />
    </div>
  );
}