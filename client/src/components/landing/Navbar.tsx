import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { text: "Product", href: "#product" },
    { text: "Pricing", href: "#pricing" },
    { text: "Integrations", href: "#integrations" }
  ];

  return (
    <nav className="flex justify-between items-center px-12 py-4 border-b border-gray-100">
      <Link href="/" className="flex items-center gap-2">
        <img src="/assets/logo.svg" alt="Quibble AI" className="w-[18px] h-[19px]" />
        <span className="font-semibold text-[16px] text-[#2B2D3F]">Quibble AI</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a 
            key={link.text}
            href={link.href}
            className="text-[18px] text-[#2B2D3F] hover:text-[#5A4CE6] transition-colors"
          >
            {link.text}
          </a>
        ))}
      </div>

      <div className="hidden md:block">
        <Button 
          variant="ghost" 
          className="text-[#5A4CE6] hover:bg-[#5A4CE6]/10"
        >
          Request Demo
        </Button>
      </div>

      {/* Mobile Navigation */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col gap-4 mt-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.text}
                href={link.href}
                className="text-lg font-medium text-[#2B2D3F]"
                whileHover={{ x: 5 }}
                onClick={() => setIsOpen(false)}
              >
                {link.text}
              </motion.a>
            ))}
            <Button className="mt-4 bg-gradient-to-r from-[#5A4CE6] to-[#322A80]">
              Request Demo
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
