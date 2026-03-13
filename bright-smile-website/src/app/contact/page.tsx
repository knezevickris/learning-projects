import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  return (
    <main className="flex flex-col w-full">
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        description={`We're here to help you achieve the smile of your dreams. Reach out to our ${siteConfig.contact.address.split(',')[1].trim().split(' ')[0]} office today to schedule your visit or ask any questions.`}
      />

      <section className="py-24 bg-white dark:bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-dental-50/50 dark:bg-dental-900/10 p-8 md:p-12 rounded-[2.5rem] border border-dental-100 dark:border-dental-800 shadow-xl">
              <SectionHeading
                subtitle="Send a Message"
                title="Book an Appointment"
                className="mb-8!"
              />
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dental-700 dark:text-white uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-dental-100 dark:border-dental-800 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all font-light" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dental-700 dark:text-white uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-dental-100 dark:border-dental-800 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all font-light" 
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dental-700 dark:text-white uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="(555) 000-0000" 
                      className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-dental-100 dark:border-dental-800 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all font-light" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-dental-700 dark:text-white uppercase tracking-wider">Service Interested In</label>
                    <select className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-dental-100 dark:border-dental-800 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all font-light appearance-none">
                      <option>General Dentistry</option>
                      <option>Cosmetic Dentistry</option>
                      <option>Orthodontics</option>
                      <option>Emergency Care</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-dental-700 dark:text-white uppercase tracking-wider">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="How can we help you?" 
                    className="w-full px-6 py-4 rounded-2xl bg-white dark:bg-zinc-900 border border-dental-100 dark:border-dental-800 focus:outline-none focus:ring-2 focus:ring-accent-400 transition-all font-light resize-none" 
                  />
                </div>

                <Button className="w-full py-5 text-lg font-bold shadow-xl">
                  Send Appointment Request
                </Button>
              </form>
            </div>

            {/* Contact Info & Hours */}
            <div className="flex flex-col space-y-12">
              <div>
                <SectionHeading
                  subtitle="How to Find Us"
                  title="Our Office"
                />
                <div className="mt-8 space-y-8">
                  {/* Address */}
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-dental-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dental-700 dark:text-white mb-2">Location</h4>
                      <p className="text-foreground/70 leading-relaxed">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-accent-500 rounded-2xl flex items-center justify-center text-dental-900 flex-shrink-0 shadow-lg">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dental-700 dark:text-white mb-2">Phone</h4>
                      <p className="text-2xl font-bold text-accent-600">
                        {siteConfig.contact.phone}
                      </p>
                      <p className="text-sm text-foreground/50">Call or Text us anytime</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 bg-dental-100 dark:bg-dental-900 rounded-2xl flex items-center justify-center text-dental-600 flex-shrink-0 shadow-sm">
                      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-dental-700 dark:text-white mb-2">Email</h4>
                      <p className="text-foreground/70">{siteConfig.contact.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-dental-100 dark:border-dental-800 shadow-lg">
                <h4 className="text-xl font-bold text-dental-700 dark:text-white mb-6 border-b border-dental-50 dark:border-dental-800 pb-4">Office Hours</h4>
                <ul className="space-y-4">
                  {siteConfig.hours.map((item, idx) => (
                    <li key={idx} className={`flex justify-between items-center ${item.closed ? 'text-red-500' : ''}`}>
                      <span className="font-medium">{item.days}</span>
                      <span className="opacity-80 font-light">{item.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[450px] bg-dental-50 dark:bg-zinc-900 relative">
        <div className="absolute inset-0 flex items-center justify-center text-foreground/30 font-bold uppercase tracking-widest text-xl bg-dental-100/50 dark:bg-dental-900/20">
          <div className="text-center">
            <svg className="w-12 h-12 mx-auto mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7l5-2.5 5.553 2.776a1 1 0 01.447.894v10.764a1 1 0 01-1.447.894L15 17l-6 3z" /></svg>
            Interactive Map Placeholder
          </div>
        </div>
      </section>
    </main>
  );
}
