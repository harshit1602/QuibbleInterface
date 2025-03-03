import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import MissedRevenue from "@/components/landing/MissedRevenue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small restaurants just getting started",
      features: [
        "Up to 100 conversations/month",
        "Basic POS Integration",
        "Email Support",
        "Single Language Support",
        "Basic Analytics"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$149",
      description: "Ideal for growing restaurants with multiple locations",
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
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large restaurant chains with specific needs",
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
      cta: "Contact Sales"
    }
  ];

  return (
    <div className="flex flex-col">
      <div className="min-h-screen pt-24 pb-16 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4 px-4 py-2 bg-[#5A4CE6]/10 rounded-full"
          >
            <span className="text-sm font-semibold text-[#4038A7] uppercase">
              Pricing
            </span>
          </motion.div>
          <h1 className="text-4xl font-bold text-[#2B2D3F] mb-4">
            Choose the Perfect Plan for Your Restaurant
          </h1>
          <p className="text-lg text-[#6B6F80] max-w-2xl mx-auto">
            Simple, transparent pricing that grows with your business. All plans come with a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full ${plan.popular ? 'border-[#5A4CE6] border-2' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-[#5A4CE6] text-white px-3 py-1 rounded-full text-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-[#2B2D3F]">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-[#6B6F80]">/month</span>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-[#5A4CE6]" />
                          <span className="text-[#6B6F80]">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-[#5A4CE6] hover:bg-[#4038A7]' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-24 container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid gap-8">
            {[
              {
                q: "What happens after my free trial?",
                a: "After your 14-day free trial, you'll be automatically subscribed to the plan you chose. Don't worry, we'll send you a reminder before the trial ends."
              },
              {
                q: "Can I switch plans later?",
                a: "Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
              },
              {
                q: "Do you offer a money-back guarantee?",
                a: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service."
              },
              {
                q: "What kind of support do you offer?",
                a: "All plans include some level of support. Professional plans get priority support, while Enterprise plans receive 24/7 dedicated support."
              }
            ].map((faq) => (
              <Card key={faq.q}>
                <CardHeader>
                  <CardTitle className="text-xl">{faq.q}</CardTitle>
                  <CardDescription>{faq.a}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Missed Revenue Section */}
      <MissedRevenue />
    </div>
  );
}