import { motion } from "framer-motion";

const features = [
  {
    title: "Easy POS Integration",
    description: "Connects effortlessly with your existing POS and ordering systems for minimal disruption.",
    image: "/images/frame-1618873108.png",
    alt: "POS system integration"
  },
  {
    title: "Multilingual Support",
    description: "Break language barriers by interacting with customers in their preferred language.",
    image: "/images/frame-1618873011.png",
    alt: "Multilingual AI support"
  },
  {
    title: "AI-Powered Natural Language Understanding",
    description: "Understands customer inquiries with remarkable accuracy, even with accents and variations in language.",
    image: "/images/frame-1618873029.png",
    alt: "AI language processing"
  },
  {
    title: "Sentiment Analysis",
    description: "Identifies customer sentiment to tailor interactions and ensure a positive and personalized experience.",
    image: "/images/frame-1618873029-1.png",
    alt: "AI sentiment analysis"
  }
];

export default function Features() {
  return (
    <section className="flex flex-col gap-10 py-16 px-6 md:px-16 lg:px-24 bg-[#EFEEFD]">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 bg-[#5A4CE6]/10 rounded-full"
        >
          <span className="text-sm font-semibold text-[#4038A7] uppercase">Features</span>
        </motion.div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#2B2D3F] mt-4">
          Unlocking{" "}
          <span className="bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-transparent bg-clip-text">
            Operational Efficiency
          </span>{" "}
          with Quibble AI
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col gap-6 border rounded-xl bg-white shadow-custom p-6"
          >
            <div className="flex flex-col gap-1">
              <h3 className=" text-xl md:text-2xl font-semibold text-[#2B2D3F]">{feature.title}</h3>
              <p className="text-sm md:text-base text-[#6B6F80]">{feature.description}</p>
            </div>
            <img
              src={feature.image}
              alt={feature.alt}
              className="w-full h-auto rounded-lg"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
