import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import MissedRevenue from "@/components/landing/MissedRevenue";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-4 py-2 bg-[#5A4CE6]/10 rounded-full">
                <span className="text-sm font-semibold text-[#4038A7] uppercase">
                  {t('nav.contact')}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-[#2B2D3F] mb-4">
                {t('contact.title')}
              </h1>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Form Section */}
              <div>
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder={t('contact.form.name')} 
                      className="w-full" 
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder={t('contact.form.companyName')} 
                      className="w-full" 
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder={t('contact.form.email')} 
                      className="w-full" 
                    />
                  </div>
                  <div className="flex">
                    <select className="w-[100px] rounded-l-md border border-r-0 border-input bg-background text-sm">
                      <option>+91</option>
                      <option>+1</option>
                      <option>+44</option>
                      <option>+61</option>
                    </select>
                    <Input 
                      type="tel" 
                      placeholder={t('contact.form.phone')} 
                      className="flex-1 rounded-l-none" 
                    />
                  </div>

                  <div>
                    <Label className="text-sm text-muted-foreground mb-2 block">
                      {t('contact.form.budget.label')}
                    </Label>
                    <RadioGroup defaultValue="basic" className="grid grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="basic" id="basic" />
                        <Label htmlFor="basic">{t('contact.form.budget.basic')}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard">{t('contact.form.budget.standard')}</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="enterprise" id="enterprise" />
                        <Label htmlFor="enterprise">{t('contact.form.budget.enterprise')}</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Textarea 
                      placeholder={t('contact.form.message')}
                      className="w-full min-h-[150px]" 
                    />
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-white"
                  >
                    {t('contact.form.submit')}
                  </Button>
                </form>
              </div>

              {/* Image Section */}
              <div className="hidden md:block">
                <img 
                  src="/images/cozy-restaurant-interior-1.png" 
                  alt="Cozy restaurant interior with red leather seats and elegant dining setup" 
                  className="w-full h-auto rounded-lg object-cover shadow-lg"
                />
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