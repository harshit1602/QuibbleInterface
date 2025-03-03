import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();

  const navLinks = [
    { text: t('nav.pricing'), href: "/pricing" },
    { text: t('nav.aboutUs'), href: "/about" },
    { text: t('nav.contact'), href: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <nav className="container mx-auto flex justify-between items-center px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/quibble-logo.jpg" alt="QuibbleAI" className="h-8 w-auto" />
          <span className="font-semibold text-[16px] text-[#2B2D3F]">QuibbleAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.text}
              href={link.href}
              className="text-[18px] text-[#2B2D3F] hover:text-[#5A4CE6] transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button 
            variant="ghost" 
            className="text-[#5A4CE6] hover:bg-[#5A4CE6]/10"
            onClick={() => window.location.href = 'https://demo.quibbleai.io/'}
          >
            Request Demo
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-4 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="text-lg font-medium text-[#2B2D3F]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.text}
                </Link>
              ))}
              <div className="mt-4 flex items-center gap-4">
                <LanguageSwitcher />
                <Button 
                  className="flex-1 bg-gradient-to-r from-[#5A4CE6] to-[#322A80]"
                  onClick={() => window.location.href = 'https://demo.quibbleai.io/'}
                >
                  Request Demo
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}