import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/config/site";

export default function ContactPage() {
  const city = siteConfig.contact.address.split(',')[1].trim().split(' ')[0];
  const mapSearchQuery = encodeURIComponent(siteConfig.contact.address);

  return (
    <main className="flex flex-col w-full">
      <PageHeader
        title="Contact Us"
        subtitle="Get in Touch"
        description={`We're here to help you achieve the smile of your dreams. Reach out to our ${city} office today to schedule your visit or ask any questions.`}
      />

      {/* Online Booking Banner - Calendly Placeholder */}
      <section className="bg-accent-500 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="bg-dental-900/10 p-2 rounded-lg">
              <svg className="w-6 h-6 text-dental-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <p className="text-dental-900 font-bold text-lg">Preferred to book online instantly?</p>
          </div>
          <Button
            href="#booking-integration"
            className="!bg-dental-900 !text-white hover:!bg-dental-800 shadow-lg min-w-[200px]"
          >
            Book Online Now
          </Button>
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Contact Form Container */}
            <div className="bg-dental-50/50 dark:bg-dental-900/10 p-8 md:p-12 rounded-[2.5rem] border border-dental-100 dark:border-dental-800 shadow-xl">
              <SectionHeading
                subtitle="Send a Message"
                title="Appointment Request"
                className="mb-8!"
              />
              <ContactForm />
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
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${mapSearchQuery}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent-600 font-bold text-sm uppercase tracking-wider hover:text-accent-700 mt-2 inline-block transition-colors"
                      >
                        Get Directions
                      </a>
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

      {/* Embedded Map Section */}
      <section className="h-[550px] relative overflow-hidden bg-dental-50 dark:bg-dental-900">
        {siteConfig.contact.googleMapsApiKey ? (
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${siteConfig.contact.googleMapsApiKey}&q=${mapSearchQuery}`}
          ></iframe>
        ) : (
          /* High-Fidelity Placeholder - Displayed when no API Key is provided */
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Map Grid Pattern for Texture */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            {/* Visual Elements to look like a map */}
            <div className="absolute top-1/4 left-1/3 w-64 h-1 bg-dental-200/20 dark:bg-dental-800/20 rotate-12" />
            <div className="absolute bottom-1/3 right-1/4 w-96 h-1 bg-dental-200/20 dark:bg-dental-800/20 -rotate-45" />
            <div className="absolute top-1/2 right-1/2 w-1 h-32 bg-dental-200/20 dark:bg-dental-800/20" />

            <div className="relative z-10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white dark:border-dental-800 text-center max-w-md mx-4 transform hover:scale-[1.02] transition-transform duration-500">
              <div className="w-20 h-20 bg-accent-500 rounded-3xl flex items-center justify-center mx-auto mb-8 text-dental-900 shadow-xl shadow-accent-500/20">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-dental-800 dark:text-white mb-2">{siteConfig.name} {city}</h4>
              <p className="text-foreground/60 mb-8 leading-relaxed">
                {siteConfig.contact.address}
              </p>
              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${mapSearchQuery}`}
                target="_blank"
                className="w-full !py-4 shadow-xl"
              >
                Open in Google Maps
              </Button>
              <p className="mt-4 text-xs text-foreground/40 font-medium uppercase tracking-widest">
                Interactive map disabled
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
