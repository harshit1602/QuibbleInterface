import { Link } from "wouter";
import { BsDiscord, BsLinkedin, BsTwitterX, BsEnvelope } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  const footerLinks = {
    company: [
      { label: t('nav.home'), href: "/" },
      { label: t('nav.pricing'), href: "/pricing" },
      { label: t('nav.aboutUs'), href: "/about" },
    ],
    help: [
      { label: t('footer.help'), href: "/under-construction" },
      { label: "Terms & Conditions", href: "/under-construction" },
      { label: "Privacy Policy", href: "/under-construction" },
    ],
  };

  return (
    <footer className="bg-[#4038A7] text-white pt-8 pb-8">
      <div className="px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-start order-2 md:order-1 lg:order-none">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img 
                src="/images/quibblelogo.jpg" 
                alt="QuibbleAI" 
                className="h-8 w-auto" 
              />
              <span className="font-semibold text-[16px]">QuibbleAI</span>
            </Link>
            <p className="text-sm opacity-80">{t('footer.companyDesc')}</p>
          </div>

          {/* Company Links */}
          <div className="order-3 md:order-2 lg:order-none">
            <h3 className="text-lg font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="order-4 md:order-3 lg:order-none">
            <h3 className="text-lg font-semibold mb-4">{t('footer.help')}</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm opacity-80 hover:opacity-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="order-1 md:order-4 lg:order-none">
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <a href="mailto:support@quibbleai.io" className="text-sm opacity-80 hover:opacity-100 flex items-center gap-2">
              <BsEnvelope />
              support@quibbleai.io
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-sm opacity-80">{t('footer.copyright')}</span>
          </Link>
          <div className="flex gap-6">
            <a href="https://linkedin.com/company/quibble-ai" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
              <BsLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://x.com/QuibbleAI" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
              <BsTwitterX className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
