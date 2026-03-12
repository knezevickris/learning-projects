import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "General Dentistry", href: "/services#general" },
  { name: "Cosmetic Dentistry", href: "/services#cosmetic" },
  { name: "Orthodontics", href: "/services#ortho" },
  { name: "Teeth Whitening", href: "/services#whitening" },
];

export default function Footer() {
  return (
    <footer className="bg-dental-50 dark:bg-zinc-950/50 pt-20 pb-10 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Practice Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-dental-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg leading-none">S</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-dental-700 dark:text-white">
                BrightSmile
              </span>
            </Link>
            <p className="text-foreground/70 leading-relaxed text-sm">
              Modern care, friendly faces. Providing Riverside with the highest quality 
              dental services since 2019.
            </p>
            <div className="flex space-x-4">
              {["FB", "TW", "IG", "LI"].map((social) => (
                <div key={social} className="w-8 h-8 rounded-full bg-white dark:bg-zinc-800 border flex items-center justify-center text-[10px] font-bold text-foreground/40 hover:border-dental-500 hover:text-dental-600 cursor-pointer transition-all">
                  {social}
                </div>
              ))}
            </div>
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
              <li className="flex justify-between text-sm">
                <span className="text-foreground/70">Mon – Fri:</span>
                <span className="font-medium">8:00am – 6:00pm</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-foreground/70">Saturday:</span>
                <span className="font-medium">9:00am – 2:00pm</span>
              </li>
              <li className="flex justify-between text-sm text-red-500">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-bold text-dental-700 dark:text-white mb-6">Find Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <svg className="w-5 h-5 text-dental-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="text-foreground/70">247 Oak Street,<br />Riverside, CA 92501</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <svg className="w-5 h-5 text-dental-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:9515550187" className="text-foreground/70 hover:text-dental-600">(951) 555-0187</a>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <svg className="w-5 h-5 text-dental-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:hello@brightsmiledental.com" className="text-foreground/70 hover:text-dental-600">hello@brightsmiledental.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t flex flex-col md:flex-row justify-between items-center opacity-60 text-[12px]">
          <p>© 2026 BrightSmile Dental Care. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 uppercase tracking-widest font-bold">
            <Link href="/privacy" className="hover:text-dental-600">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-dental-600">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
