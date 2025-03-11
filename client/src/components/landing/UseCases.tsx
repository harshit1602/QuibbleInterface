import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function UseCases() {
  const useCases = [
    {
      title: "Automated Food Ordering",
      image: "/assets/burger-ordering.png",
      description: "Let customers effortlessly place orders via voice, reducing wait times and minimizing errors.",
    },
    {
      title: "Intelligent Reservation Management",
      image: "/assets/dining-table.png",
      description: "Manage reservations with ease, optimize table turnover, and reduce no-shows.",
    },
    {
      title: "24/7 General Support",
      image: "/assets/customer-support.png",
      description: "Provide instant answers to customer inquiries, resolve issues quickly, and enhance customer satisfaction.",
    },
  ];

  return (
    <section className="flex flex-col gap-10 py-16 px-4 md:px-[100px]">
      {/* Section Heading */}
      <div className="flex flex-col gap-4 items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 bg-[#5A4CE6]/10 rounded-full"
        >
          <span className="text-sm font-semibold text-[#4038A7] uppercase">Our Use Cases</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D3F]">
          How Quibble AI Helps{" "}
          <span className="bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-transparent bg-clip-text">
            Your Restaurant Thrive
          </span>
        </h2>
      </div>

      {/* Use Cases Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {useCases.map((useCase, index) => (
          <motion.div
            key={useCase.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="h-full"
          >
            <Card className="overflow-hidden h-full rounded-xl border">
              {/* Image */}
              <div className="w-full">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content */}
              <CardContent className="flex flex-col gap-2 py-6">
                <h3 className="text-xl font-semibold text-[#2B2D3F]">{useCase.title}</h3>
                <p className="text-[#6B6F80] text-sm">{useCase.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
