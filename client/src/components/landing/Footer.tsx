import { Link } from "wouter";
import { BsDiscord, BsLinkedin, BsTwitterX, BsEnvelope } from "react-icons/bs";

export default function Footer() {
  const footerLinks = {
    company: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Pricing", href: "#pricing" },
    ],
    help: [
      { label: "Customer Support", href: "/support" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  };

  return (
    <footer className="bg-[#4038A7] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/quibble-logo.jpg" alt="QuibbleAI" className="h-8 w-auto brightness-0 invert" />
              <span className="font-semibold text-[16px]">QuibbleAI</span>
            </div>
            <p className="text-sm opacity-80">
              Your words, our intelligence together, we achieve more
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
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
          <div>
            <h3 className="text-lg font-semibold mb-4">Help</h3>
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
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <a href="mailto:Support@quibbleai.io" className="text-sm opacity-80 hover:opacity-100 flex items-center gap-2">
              <BsEnvelope />
              Support@quibbleai.io
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            © Copyright 2025. All Rights Reserved by QuibbleAI
          </p>
          <div className="flex gap-6">
            <a href="https://discord.gg/quibbleai" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
              <BsDiscord className="w-5 h-5" />
              <span className="sr-only">Discord</span>
            </a>
            <a href="https://linkedin.com/company/quibbleai" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
              <BsLinkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://twitter.com/quibbleai" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100">
              <BsTwitterX className="w-5 h-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
