import NextImage from "next/image";
import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import TeamMember from "@/components/ui/TeamMember";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero
        tagline={siteConfig.tagline}
        headline={
          <>
            A Healthier <br />
            <span className="text-accent-400">Smile</span> Starts <br />
            With Us
          </>
        }
        description={siteConfig.description}
        backgroundImage="/images/hero/hero-image.png"
        primaryCta={{ text: "Book an Appointment", href: "/contact" }}
        secondaryCta={{ text: "Our Services", href: "/services" }}
        stats={[
          { value: siteConfig.stats.rating.toString(), label: "Google Rating" },
          { value: siteConfig.stats.experienceYears, label: "Years Experience" },
          { value: siteConfig.stats.reviewCount, label: "Happy Patients" },
        ]}
      />

      {/* Services Overview Section */}
      <section className="py-24 bg-gradient-to-b from-white to-dental-50 dark:from-zinc-950 dark:to-dental-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Expertise"
            title="Comprehensive Care for Every Smile"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="General Dentistry"
              description="Keep your smile healthy with routine cleanings, fillings, crowns, and expert preventative care for the whole family."
              href="/services#general"
              image="/images/services/General-family-dentistry.png"
            />
            <ServiceCard
              title="Cosmetic Dentistry"
              description="Transform your smile with professional whitening, porcelain veneers, and bonding for a confident, radiant look."
              href="/services#cosmetic"
              image="/images/services/cosmetic-dentistry.png"
            />
            <ServiceCard
              title="Orthodontics"
              description="Straighten your teeth with Invisalign or traditional braces. We offer effective solutions for patients of all ages."
              href="/services#orthodontics"
              image="/images/services/invisalign.png"
            />
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-24 bg-white dark:bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
            <SectionHeading
              subtitle="Testimonials"
              title="What Our Patients Say"
              className="mb-0!"
            />
            
            {/* Aggregate Rating Badge */}
            <div className="flex items-center space-x-4 bg-dental-50 dark:bg-dental-900/20 p-6 rounded-2xl border border-dental-100 dark:border-dental-800">
              <div className="text-4xl font-extrabold text-dental-600">{siteConfig.stats.rating}</div>
              <div>
                <div className="flex space-x-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/50">Based on {siteConfig.stats.reviewCount} Reviews</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Anna P."
              role="Patient"
              content={`I was terrified of going to the dentist for years, but ${siteConfig.name} completely changed my view. The staff was incredibly gentle, explained every step, and my hygienist made me feel so at ease. I finally don't dread check-ups anymore—thank you!`}
            />
            <TestimonialCard
              name="Marco D."
              role="Patient since 2021"
              content={`I've been coming to ${siteConfig.name} for almost 5 years now, and it's the most professional clinic I've ever been to. The doctors are transparent about treatment options and prices, and my whole family goes there now. Highly recommend!`}
            />
            <TestimonialCard
              name="Elena M."
              role="New patient"
              content="I came in with a toothache late in the afternoon and they still managed to see me urgently. The diagnosis was accurate, the treatment was quick and painless, and the follow-up was thoughtful. Definitely worth the visit."
            />
          </div>
        </div>
      </section>

      {/* Meet Our Doctors Section */}
      <section className="py-24 bg-gradient-to-b from-white to-dental-50 dark:from-[var(--background)] dark:to-[var(--card)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Meet Our Team"
            title="Expert Minds, Caring Hands"
            centered
          />

          {/* Group Feature Photo */}
          <div className="relative w-full aspect-[21/9] md:aspect-video mb-16 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-dental-800">
            <NextImage
              src="/images/team/team-photo.png"
              alt={`${siteConfig.name} Team`}
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dental-900/40 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm font-bold uppercase tracking-widest opacity-80 mb-1 text-accent-400">Our Experts</p>
              <h3 className="text-3xl font-extrabold">The {siteConfig.name} Family</h3>
            </div>
          </div>

          <div className="space-y-16">
            {/* Doctors Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <TeamMember
                isLarge
                name="Dr. Marcus Chen"
                role="General & Cosmetic Dentistry"
                bio={`Dr. Chen leads our general and cosmetic dentistry with a patient-first approach, specializing in smile makeovers and preventive care. A graduate of top dental programs, he’s transformed over ${siteConfig.stats.smilesTransformed} smiles with natural, lasting results.`}
                image="/images/team/marcus.png"
              />
              <TeamMember
                isLarge
                name="Dr. Sarah Rivera"
                role="Orthodontics & Invisalign"
                bio="Dr. Rivera excels in orthodontics and Invisalign, creating straighter smiles with comfort and precision. With advanced certifications, she tailors treatments for all ages, ensuring minimal discomfort and optimal outcomes."
                image="/images/team/sarah.png"
              />
            </div>

            {/* Assistants Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <TeamMember
                isLarge
                name="Emily Novak"
                role="Dental Assistant"
                bio="Emily brings warmth and efficiency to every visit, assisting with procedures and ensuring patient comfort. With 5 years in dentistry, she’s skilled in sterilization and making nervous patients feel at ease."
                image="/images/team/emily.png"
              />
              <TeamMember
                isLarge
                name="Luke James"
                role="Dental Assistant"
                bio="Luke supports our team with expert X-ray tech and patient prep, drawing from 4 years of hands-on experience. His calm demeanor and attention to detail keep appointments smooth and stress-free."
                image="/images/team/luke.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Accent */}
        <div className="absolute inset-0 bg-dental-700 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-500/10 skew-x-12 translate-x-32 -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Your New Smile <br className="hidden sm:block" /> 
              <span className="text-accent-400">Starts Today</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experience {siteConfig.description.split('.')[0]}. 
              Join thousands of {siteConfig.contact.address.split(',')[1].trim().split(' ')[0]} residents who trust {siteConfig.name} with their dental health.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                href="/contact" 
                className="!bg-white !text-dental-700 hover:!bg-accent-500 hover:!text-dental-900 !px-12 !py-6 !text-xl shadow-2xl transition-all"
              >
                Book Your First Visit
              </Button>
              <div className="flex flex-col items-center sm:items-start text-white/90">
                <p className="text-sm uppercase tracking-widest font-bold opacity-60 mb-1">Or Call Us Directly</p>
                <a href={siteConfig.contact.phoneUrl} className="text-2xl font-bold hover:text-accent-400 transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Micro-trust indicator */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale brightness-200">
               <span className="text-xs font-bold uppercase tracking-widest">Invisalign Provider</span>
               <span className="text-xs font-bold uppercase tracking-widest">ADA Member</span>
               <span className="text-xs font-bold uppercase tracking-widest">Emergency Care</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
