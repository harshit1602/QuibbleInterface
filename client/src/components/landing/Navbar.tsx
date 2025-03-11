import React from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  const navLinks = [
    { text: t("nav.aboutUs"), href: "/about" },
    { text: t("nav.pricing"), href: "/pricing" },
    { text: t("nav.contact"), href: "/contact" },
  ];

  return (
    <header className="sticky top-0 px-6 md:px-16 py-4 z-50 bg-white shadow-sm">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img src="/images/quibble-logo.jpg" alt="QuibbleAI" className="h-8 w-auto" />
          <span className="font-semibold text-[16px] text-[#2B2D3F]">QuibbleAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ text, href }) => (
            <Link key={text} href={href} className="text-base text-[#2B2D3F] hover:text-[#5A4CE6] transition-colors">
              {text}
            </Link>
          ))}
        </div>

        {/* Actions (Language + Demo Button) */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <Button
            variant="ghost"
            className="text-[#5A4CE6] text-lg font-medium bg-[#5A4CE6]/10 rounded-full"
            onClick={() => window.open("https://calendly.com/ashish-garg-quibbleai", "_blank")}
          >
            {t("nav.requestDemo")}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open Menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map(({ text, href }) => (
                <Link key={text} href={href} className="text-lg font-medium text-[#2B2D3F]" >
                  {text}
                </Link>
              ))}
              <div className="mt-4 flex items-center gap-4">
                <LanguageSwitcher />
                <Button
                  className="flex-1 bg-gradient-to-r from-[#5A4CE6] to-[#322A80] text-white"
                  onClick={() => window.open("https://demo.quibbleai.io/", "_blank")}
                >
                  {t("nav.requestDemo")}
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
