import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useTranslation } from "react-i18next";


export default function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: "basic",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle radio button change
  const handleRadioChange = (value) => {
    setFormState(prev => ({
      ...prev,
      budget: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      console.log("Form submitted:", formState);
      
      // Reset form or show success message
      setFormState({
        name: "",
        company: "",
        email: "",
        phone: "",
        budget: "basic",
        message: ""
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>


      <main 
        id="contact-page" 
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-12 md:py-16"
      >
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-6 sm:gap-8 md:gap-10 items-center"
          aria-labelledby="contact-heading"
        >
          <h1 
            id="contact-heading" 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2D3F] text-center"
          >
            {t('contact.title')}
          </h1>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Form Section */}
            <div className="w-full order-2 md:order-1">
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4 sm:space-y-6 md:space-y-8"
                aria-label={t('contact.formAriaLabel') || 'Contact form'}
              >
                <div>
                  <label htmlFor="name" className="sr-only">{t('contact.form.name')}</label>
                  <Input 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.name')} 
                    className="w-full" 
                    aria-required="true"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="company" className="sr-only">{t('contact.form.companyName')}</label>
                  <Input 
                    id="company"
                    name="company"
                    value={formState.company}
                    onChange={handleChange}
                    placeholder={t('contact.form.companyName')} 
                    className="w-full" 
                    aria-required="true"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">{t('contact.form.email')}</label>
                  <Input 
                    id="email"
                    name="email"
                    type="email" 
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.email')} 
                    className="w-full" 
                    aria-required="true"
                    required
                  />
                </div>
                <div className="flex">
                  <label htmlFor="phoneCountry" className="sr-only">{t('contact.form.phoneCountry')}</label>
                  <select 
                    id="phoneCountry"
                    className="w-[72px] rounded-l-md border border-r-0 border-input bg-background text-sm"
                    aria-label={t('contact.form.phoneCountryCode') || 'Country code'}
                  >
                    <option value="+91">+91</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                  </select>
                  <label htmlFor="phone" className="sr-only">{t('contact.form.phone')}</label>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel" 
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder={t('contact.form.phone')} 
                    className="flex-1 rounded-l-none" 
                    aria-required="true"
                    required
                  />
                </div>

                <fieldset className="w-full">
                  <legend className="text-sm text-muted-foreground mb-2 block">
                    {t('contact.form.budget.label')}
                  </legend>
                  <RadioGroup 
                    value={formState.budget} 
                    onValueChange={handleRadioChange} 
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4"
                  >
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
                </fieldset>

                <div>
                  <label htmlFor="message" className="sr-only">{t('contact.form.message')}</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={t('contact.form.message')}
                    className="w-full min-h-[120px] sm:min-h-[150px]" 
                    aria-required="true"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-white py-2 sm:py-3"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                </Button>
              </form>
            </div>

            {/* Image Section */}
            <div className="w-full order-1 md:order-2 flex justify-center md:block">
              <img 
                src="/images/cozy-restaurant-interior-1.png" 
                alt={t('contact.imageAlt') || "Cozy restaurant interior with red leather seats and elegant dining setup"} 
                className="w-full max-w-md md:max-w-none h-auto rounded-lg object-cover shadow-lg"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>
          </div>
        </motion.section>
      </main>
    </>
  );
}