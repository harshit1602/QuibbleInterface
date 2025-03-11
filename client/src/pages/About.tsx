import { motion } from "framer-motion";
import MissedRevenue from "@/components/landing/MissedRevenue";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col">
      <div className="min-h-screen">
        <div className="mx-auto px-4 py-8 sm:py-16">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {/* Hero Section with Modern Design */}
            <div className="text-center mb-24 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -z-10 w-64 h-64 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full filter blur-3xl opacity-30"></div>
              
              <motion.div 
                className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-[#5A4CE6] to-[#7B68EE] rounded-full shadow-md"
                variants={fadeInUp}
                transition={{ delay: 0.2 }}
              >
                <span className="text-sm font-semibold text-white uppercase tracking-wider">
                  {t('about.title')}
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#2B2D3F] to-[#4038A7] mb-8"
                variants={fadeInUp}
                transition={{ delay: 0.3 }}
              >
                Revolutionizing Restaurant Operations with AI
              </motion.h1>
              
              <motion.p 
                className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-16"
                variants={fadeInUp}
                transition={{ delay: 0.4 }}
              >
                {t('about.description')}
              </motion.p>
            </div>

            {/* Mission & Vision Section - Standout Design */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
              variants={fadeInUp}
              transition={{ delay: 0.5 }}
            >
              {/* Mission Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                {/* Background decoration */}
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-indigo-600 rounded-full opacity-20"></div>
                <div className="absolute -left-4 -top-4 w-20 h-20 bg-purple-500 rounded-full opacity-10"></div>
                
                <div className="relative z-10 p-8 md:p-10 bg-gradient-to-br from-white to-indigo-50 h-full">
                  <div className="w-16 h-16 flex items-center justify-center bg-indigo-100 rounded-2xl mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2D3F] mb-4">
                    {t('about.mission.title')}
                  </h3>
                  <p className="text-slate-600">
                    {t('about.mission.description')}
                  </p>
                </div>
              </div>
              
              {/* Vision Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg group">
                {/* Background decoration */}
                <div className="absolute -left-8 -bottom-8 w-40 h-40 bg-purple-600 rounded-full opacity-20"></div>
                <div className="absolute -right-4 -top-4 w-20 h-20 bg-indigo-500 rounded-full opacity-10"></div>
                
                <div className="relative z-10 p-8 md:p-10 bg-gradient-to-br from-white to-purple-50 h-full">
                  <div className="w-16 h-16 flex items-center justify-center bg-purple-100 rounded-2xl mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2B2D3F] mb-4">
                    {t('about.vision.title')}
                  </h3>
                  <p className="text-slate-600">
                    {t('about.vision.description')}
                  </p>
                </div>
              </div>
            </motion.div>

{/* Founders Section - Fixed Card Design with Properly Positioned Images */}
<div className="mt-16">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#2B2D3F]">
    {t('about.founders.title')}
  </h2>
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
    {/* Founder 1 - Fixed Card */}
    <div className="bg-white rounded-3xl overflow-hidden border">
      <div className="relative h-64 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-90"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Profile image - Fixed positioning with proper alignment */}
      <div className="flex justify-center -mt-16 mb-4">
        <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white z-10">
          <img
            src="/images/founder-ashish.png"
            alt={t('about.founders.founder1.name')}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="pb-8 px-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {t('about.founders.founder1.name')}
        </h3>
        
        <div className="mb-6">
          <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-700 font-medium rounded-full text-sm">
            {t('about.founders.founder1.role')}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6">
          {t('about.founders.founder1.description')}
        </p>
      </div>
    </div>

    {/* Founder 2 - Fixed Card */}
    <div className="bg-white rounded-3xl overflow-hidden border">
      <div className="relative h-64 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-90"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Profile image - Fixed positioning with proper alignment */}
      <div className="flex justify-center -mt-16 mb-4">
        <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white z-10">
          <img
            src="/images/founder-jitin.png"
            alt={t('about.founders.founder2.name')}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <div className="pb-8 px-8 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {t('about.founders.founder2.name')}
        </h3>
        
        <div className="mb-6">
          <span className="inline-block px-4 py-1 bg-purple-100 text-purple-700 font-medium rounded-full text-sm">
            {t('about.founders.founder2.role')}
          </span>
        </div>
        
        <p className="text-gray-600 mb-6">
          {t('about.founders.founder2.description')}
        </p>
      </div>
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