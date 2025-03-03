import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(1, "Company name is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      console.log("Form data:", data);
      
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 px-6 md:px-24 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-[#5A4CE6]/10 rounded-full">
            <span className="text-sm font-semibold text-[#4038A7] uppercase">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl font-bold text-[#2B2D3F] mb-4">
            Get in Touch
          </h2>
          <p className="text-[#6B6F80] text-lg">
            Let's discuss how we can help transform your business
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 bg-white p-8 rounded-xl shadow-sm"
        >
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-[#2B2D3F]">
                Name
              </label>
              <Input
                {...form.register("name")}
                className="w-full"
                placeholder="Your name"
              />
              {form.formState.errors.name && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-[#2B2D3F]">
                Email
              </label>
              <Input
                {...form.register("email")}
                type="email"
                className="w-full"
                placeholder="your@email.com"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2B2D3F]">
              Company
            </label>
            <Input
              {...form.register("company")}
              className="w-full"
              placeholder="Your company name"
            />
            {form.formState.errors.company && (
              <p className="text-sm text-red-500">
                {form.formState.errors.company.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-[#2B2D3F]">
              Message
            </label>
            <Textarea
              {...form.register("message")}
              className="w-full min-h-[120px]"
              placeholder="How can we help you?"
            />
            {form.formState.errors.message && (
              <p className="text-sm text-red-500">
                {form.formState.errors.message.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-white"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
