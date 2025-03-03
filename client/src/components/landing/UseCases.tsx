import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function UseCases() {
  const useCases = [
    {
      title: "AI Voice Ordering",
      image: "https://images.unsplash.com/photo-1591405351990-4726e331f141",
      description: "Advanced voice recognition for seamless food ordering experience"
    },
    {
      title: "Customer Support",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      description: "24/7 instant support with personalized responses"
    },
    {
      title: "Table Reservations",
      image: "https://images.unsplash.com/photo-1578474846511-04ba529f0b88",
      description: "Streamline bookings and manage table availability"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-24">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-4 px-4 py-2 bg-[#5A4CE6]/10 rounded-full"
        >
          <span className="text-sm font-semibold text-[#4038A7] uppercase">
            Our Use Cases
          </span>
        </motion.div>
        <h2 className="text-4xl font-bold text-[#2B2D3F]">
          Transforming Industries with AI
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="h-full"
          >
            <Card className="overflow-hidden h-full">
              <div className="w-full h-[397px]">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#2B2D3F] mb-2">
                  {useCase.title}
                </h3>
                <p className="text-[#6B6F80]">{useCase.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}