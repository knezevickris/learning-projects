import Hero from "@/components/ui/Hero";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero
        tagline="Modern Care, Friendly Faces"
        headline={
          <>
            A Healthier <br />
            <span className="text-accent-400">Smile</span> Starts <br />
            With Us
          </>
        }
        description="Providing Riverside with world-class dental excellence since 2019. Join over 5,000 happy patients experiencing compassionate, expert care."
        backgroundImage="/images/hero/hero-image.png"
        primaryCta={{ text: "Book an Appointment", href: "/contact" }}
        secondaryCta={{ text: "Our Services", href: "/services" }}
        stats={[
          { value: "4.9/5", label: "Google Rating" },
          { value: "12+", label: "Years Experience" },
          { value: "5k+", label: "Happy Patients" },
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
              <div className="text-4xl font-extrabold text-dental-600">4.9</div>
              <div>
                <div className="flex space-x-0.5 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[10px] uppercase tracking-widest font-bold text-foreground/50">Based on 500+ Reviews</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Anna P."
              role="Patient"
              content="I was terrified of going to the dentist for years, but Bright Smile completely changed my view. The staff was incredibly gentle, explained every step, and my hygienist made me feel so at ease. I finally don't dread check-ups anymore—thank you!"
            />
            <TestimonialCard
              name="Marco D."
              role="Patient since 2021"
              content="I've been coming to Bright Smile for almost 5 years now, and it's the most professional clinic I've ever been to. The doctors are transparent about treatment options and prices, and my whole family goes there now. Highly recommend!"
            />
            <TestimonialCard
              name="Elena M."
              role="New patient"
              content="I came in with a toothache late in the afternoon and they still managed to see me urgently. The diagnosis was accurate, the treatment was quick and painless, and the follow-up was thoughtful. Definitely worth the visit."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
