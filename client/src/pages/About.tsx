import { motion } from "framer-motion";
import MissedRevenue from "@/components/landing/MissedRevenue";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-[#5A4CE6]/10 rounded-full">
                <span className="text-sm font-semibold text-[#4038A7] uppercase">
                  {t('about.title')}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-[#2B2D3F] mb-6">
                {t('about.subtitle')}
              </h1>
              <p className="text-lg text-[#6B6F80] mb-12">
                {t('about.description')}
              </p>
            </div>

            {/* Mission & Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="text-left">
                <h3 className="text-xl font-semibold text-[#2B2D3F] mb-4">
                  {t('about.mission.title')}
                </h3>
                <p className="text-[#6B6F80]">
                  {t('about.mission.description')}
                </p>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold text-[#2B2D3F] mb-4">
                  {t('about.vision.title')}
                </h3>
                <p className="text-[#6B6F80]">
                  {t('about.vision.description')}
                </p>
              </div>
            </div>

            {/* Founders Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-center mb-12">
                {t('about.founders.title')}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Founder 1 */}
                <div className="text-center">
                  <div className="mb-6 relative w-48 h-48 mx-auto">
                    <img
                      src="/images/founder-ashish.png"
                      alt={t('about.founders.founder1.name')}
                      className="rounded-full w-full h-full object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2D3F] mb-2">
                    {t('about.founders.founder1.name')}
                  </h3>
                  <p className="text-[#5A4CE6] font-semibold mb-4">
                    {t('about.founders.founder1.role')}
                  </p>
                  <p className="text-[#6B6F80] text-sm">
                    {t('about.founders.founder1.description')}
                  </p>
                </div>

                {/* Founder 2 */}
                <div className="text-center">
                  <div className="mb-6 relative w-48 h-48 mx-auto">
                    <img
                      src="/images/founder-jitin.png"
                      alt={t('about.founders.founder2.name')}
                      className="rounded-full w-full h-full object-cover shadow-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2D3F] mb-2">
                    {t('about.founders.founder2.name')}
                  </h3>
                  <p className="text-[#5A4CE6] font-semibold mb-4">
                    {t('about.founders.founder2.role')}
                  </p>
                  <p className="text-[#6B6F80] text-sm">
                    {t('about.founders.founder2.description')}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Missed Revenue Section */}
      <MissedRevenue />
    </div>
  );
}