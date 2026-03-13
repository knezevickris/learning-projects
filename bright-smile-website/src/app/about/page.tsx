import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import TeamMember from "@/components/ui/TeamMember";
import NextImage from "next/image";
import { siteConfig } from "@/config/site";

export default function AboutPage() {
  return (
    <main className="flex flex-col w-full">
      <PageHeader
        title="Our Story"
        subtitle={`About ${siteConfig.name}`}
        description={`Founded with a vision to revolutionize the dental experience, we combine advanced technology with a compassionate, patient-first approach in the heart of ${siteConfig.contact.address.split(',')[1].trim().split(' ')[0]}.`}
      />

      {/* Origin/Mission Section */}
      <section className="py-24 bg-white dark:bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
              <NextImage
                src="/images/team/team-photo.png"
                alt={`${siteConfig.name} Team`}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <SectionHeading
                subtitle={`Since ${parseInt(new Date().getFullYear().toString()) - parseInt(siteConfig.stats.experienceYears)}`}
                title={`A Legacy of Care in ${siteConfig.contact.address.split(',')[1].trim().split(' ')[0]}`}
              />
              <div className="mt-8 space-y-6 text-lg text-foreground/70 leading-relaxed font-light">
                <p>
                  {siteConfig.fullName} was founded in {siteConfig.contact.address.split(',')[1].trim()}, {siteConfig.contact.address.split(',')[2].trim().split(' ')[0]}, by visionary dentists who believed that high-quality dental care should be both accessible and completely stress-free. What started as a small community clinic has grown into a state-of-the-art practice, yet our founding principle remains the same: <span className="text-dental-700 dark:text-accent-400 font-medium">every patient is treated like family.</span>
                </p>
                <p>
                  Our mission is simple but profound: to deliver exceptional dentistry that not only brightens smiles but builds lasting confidence. We understand that visiting the dentist can be daunting, which is why we've designed our practice to be a sanctuary of comfort and professional excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-dental-50/30 dark:bg-dental-900/10 border-y border-dental-100 dark:border-dental-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading
              subtitle="What Drives Us"
              title="Our Core Values"
              centered
            />
            <p className="mt-4 text-foreground/60 italic">
              "We stay ahead with cutting-edge technology while prioritizing your comfort and results."
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Compassion", desc: "We listen first. Every treatment is delivered with a gentle touch and genuine care for your well-being." },
              { title: "Innovation", desc: "Investing in the latest dental technology to ensure faster, more comfortable, and highly precise outcomes." },
              { title: "Integrity", desc: "Honest advice and transparent pricing. We only recommend treatments that are truly in your best interest." },
              { title: "Excellence", desc: "Commitment to ongoing education and the highest clinical standards in every procedure we perform." }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-white dark:bg-[var(--card)] rounded-3xl border border-dental-100 dark:border-dental-700 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-dental-800 dark:text-accent-400 mb-4">{value.title}</h3>
                <p className="text-base text-foreground/90 dark:text-white/80 leading-relaxed font-normal">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Team Section */}
      <section className="py-24 bg-white dark:bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Expert Minds"
            title="Meet the Specialists"
            className="mb-16"
          />

          <div className="space-y-24">
            {/* Dr. Chen */}
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-32">
                 <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white dark:border-dental-800">
                    <NextImage src="/images/team/marcus.png" alt="Dr. Marcus Chen" fill className="object-cover" />
                 </div>
              </div>
              <div className="lg:col-span-8 pt-4">
                <span className="text-dental-600 font-bold uppercase tracking-widest text-sm mb-2 block">General & Cosmetic Dentistry</span>
                <h3 className="text-4xl font-extrabold text-dental-700 dark:text-white mb-6">Dr. Marcus Chen, DDS</h3>
                <div className="space-y-6 text-lg text-foreground/70 leading-relaxed">
                  <p>
                    With over {siteConfig.stats.experienceYears.replace('+', '')} years of clinical experience, Dr. Marcus Chen leads {siteConfig.name} with a vision of "patient-first" dentistry. A graduate of San Francisco's top dental programs, he specializes in comprehensive smile makeovers and advanced preventive care.
                  </p>
                  <p>
                    Dr. Chen has successfully transformed over {siteConfig.stats.smilesTransformed} smiles, utilizing the latest digital records and 3D imaging technology to achieve natural, lasting results. His philosophy is rooted in the belief that a healthy smile is the foundation of overall confidence.
                  </p>
                  <blockquote className="border-l-4 border-accent-400 pl-6 italic text-dental-700 dark:text-accent-400 py-2">
                    "I love helping patients regain their self-assurance through healthy, beautiful dentistry. My goal is to make every visit the highlight of your day."
                  </blockquote>
                </div>
              </div>
            </div>

            {/* Dr. Rivera */}
            <div className="grid lg:grid-cols-12 gap-12 items-start pt-16 border-t border-dental-50 dark:border-dental-900/10">
              <div className="lg:col-span-8 pt-4 order-2 lg:order-1">
                <span className="text-dental-600 font-bold uppercase tracking-widest text-sm mb-2 block text-left lg:text-right">Orthodontics & Invisalign</span>
                <h3 className="text-4xl font-extrabold text-dental-700 dark:text-white mb-6 text-left lg:text-right">Dr. Sarah Rivera, DMD</h3>
                <div className="space-y-6 text-lg text-foreground/70 leading-relaxed text-left lg:text-right">
                  <p>
                    Dr. Sarah Rivera brings 8 years of specialized experience in orthodontics and Invisalign therapy. She is passionate about the intersection of dental health and facial aesthetics, ensuring every alignment treatment contributes to a balanced, radiant face.
                  </p>
                  <p>
                    With advanced certifications in clear aligner technology, Sarah tailors treatments for patients of all ages—from children's early intervention to adult cosmetic alignment. Her focus on minimal discomfort and optimal precision has made her a favorite among families in {siteConfig.contact.address.split(',')[1].trim().split(' ')[0]}.
                  </p>
                  <blockquote className="border-r-4 border-accent-400 pr-6 italic text-dental-700 dark:text-accent-400 py-2">
                    "Straightening smiles isn't just about teeth—it's about the joy of seeing someone finally smile without hesitation. Let's make yours perfect!"
                  </blockquote>
                </div>
              </div>
              <div className="lg:col-span-4 lg:sticky lg:top-32 order-1 lg:order-2">
                 <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white dark:border-dental-800">
                    <NextImage src="/images/team/sarah.png" alt="Dr. Sarah Rivera" fill className="object-cover" />
                 </div>
              </div>
            </div>

            {/* Assistants Grid */}
            <div className="pt-24 border-t border-dental-50 dark:border-dental-900/10">
              <h4 className="text-2xl font-bold mb-12 text-center text-dental-700 dark:text-white">Our Dedicated Support Team</h4>
              <div className="grid md:grid-cols-2 gap-12">
                 <TeamMember
                    isLarge
                    name="Emily Novak"
                    role="Lead Dental Assistant"
                    image="/images/team/emily.png"
                    bio="Emily brings over 5 years of warmth and clinical efficiency to every chairside visit. She is a specialist in sterilization protocols and patient preparation, but her true talent lies in making even the most nervous patients feel completely at home. Her meticulous attention to comfort ensures your visit is stress-free from start to finish."
                 />
                 <TeamMember
                    isLarge
                    name="Luke James"
                    role="Surgical & X-Ray Assistant"
                    image="/images/team/luke.png"
                    bio="Luke supports our clinical team with expert-level X-ray technology and hands-on preparation. With 4 years of experience, his calm demeanor and technical precision keep our appointments running like clockwork. Luke is passionate about patient education and helps walk you through your imaging results with clarity and care."
                 />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-dental-50/30 dark:bg-dental-900/10 border-t border-dental-100 dark:border-dental-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading
              subtitle={`The ${siteConfig.name} Difference`}
              title="Why Choose Our Practice?"
              centered
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Exceptional Ratings",
                desc: `Over ${siteConfig.stats.reviewCount} happy patients have rated us ${siteConfig.stats.rating}/5 stars on Google, reflecting ${siteConfig.stats.experienceYears} of dedicated dental excellence in ${siteConfig.contact.address.split(',')[1].trim().split(' ')[0]}.`,
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ),
              },
              {
                title: "Specialist Expertise",
                desc: "Expert care led by Dr. Chen (Cosmetics) and Dr. Rivera (Invisalign/Orthodontics) ensures top-tier results for every smile.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: "Pain-Free Technology",
                desc: "We use digital imaging, laser tools, and various sedation options to guarantee a comfortable and painless visit every time.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Tailored Affordability",
                desc: "Personalized dental plans that are insurance-friendly with flexible financing options—transparent pricing with no surprises.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: "Convenient Location",
                desc: `Located in downtown ${siteConfig.contact.address.split(',')[1].trim().split(' ')[0]} (${siteConfig.contact.address.split(',')[1].trim().split(' ')[1]}) with extended hours and same-day emergency support for your peace of mind.`,
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
              },
              {
                title: "Join Our Family",
                desc: "We treat every patient with the same care we would give our own relatives. Book your visit and join our smiling family today.",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
            ].map((feature, i) => (
              <div key={i} className="flex gap-6 p-6 bg-white dark:bg-[var(--card)] rounded-3xl border border-dental-100 dark:border-dental-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-500/10 rounded-2xl flex items-center justify-center text-accent-700 dark:text-accent-400">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dental-800 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-base text-foreground/70 dark:text-white/70 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <p className="text-2xl font-bold text-dental-700 dark:text-white mb-8">Ready to transform your smile?</p>
             <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-dental-600 hover:bg-dental-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-dental-500/20"
             >
                Book Your Visit Today
             </a>
          </div>
        </div>
      </section>
    </main>
  );
}
