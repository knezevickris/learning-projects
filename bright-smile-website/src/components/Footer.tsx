import Link from "next/link";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-[var(--background)] pt-20 pb-10 border-t transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Practice Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-dental-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">{siteConfig.name[0]}</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-dental-700 dark:text-white">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-foreground/70 leading-relaxed text-sm">
              {siteConfig.tagline}. {siteConfig.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-dental-700 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-foreground/70 hover:text-dental-600 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-bold text-dental-700 dark:text-white mb-6">Business Hours</h3>
            <ul className="space-y-4">
              {siteConfig.hours.map((item, idx) => (
                <li key={idx} className={`flex justify-between text-sm ${item.closed ? 'text-red-500' : ''}`}>
                  <span className="text-foreground/70">{item.days}:</span>
                  <span className="font-medium">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-bold text-dental-700 dark:text-white mb-6">Find Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <svg className="w-5 h-5 text-dental-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-foreground/70">{siteConfig.contact.address.split(',')[0]},<br />{siteConfig.contact.address.split(',')[1]}</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <svg className="w-5 h-5 text-dental-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href={siteConfig.contact.phoneUrl} className="text-foreground/70 hover:text-dental-600">{siteConfig.contact.phone}</a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <svg className="w-5 h-5 text-dental-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-foreground/70 hover:text-dental-600">{siteConfig.contact.email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t flex flex-col md:flex-row justify-between items-center opacity-60 text-[12px]">
          <p>© {new Date().getFullYear()} {siteConfig.fullName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
