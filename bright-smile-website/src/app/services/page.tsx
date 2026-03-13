import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import NextImage from "next/image";
import { siteConfig } from "@/config/site";

export default function ServicesPage() {
  return (
    <main className="flex flex-col w-full">
      <PageHeader 
        title="Our Services"
        subtitle="Expert Dental Care"
        description={`Comprehensive treatments tailored to your unique needs. From routine check-ups to advanced cosmetic transformations, we provide world-class dental excellence in ${siteConfig.contact.address.split(',')[1].trim().split(' ')[0]}.`}
      />

      {/* General Dentistry Section */}
      <section id="general" className="py-24 bg-white dark:bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Part - Now Above */}
          <div className="max-w-3xl mb-16">
            <SectionHeading
              subtitle="The Foundation of Health"
              title="General Dentistry"
              className="mb-6!"
            />
            <p className="text-xl text-foreground/70 leading-relaxed font-light">
              Keep your smile healthy and strong with our comprehensive general dentistry services. We focus on prevention, repair, and long-term comfort using modern techniques and a patient-first philosophy.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image side */}
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-dental-50 dark:border-dental-900/20 lg:sticky lg:top-32">
              <NextImage
                src="/images/services/General-family-dentistry.png"
                alt={`General Dentistry at ${siteConfig.name}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-900/20 to-transparent" />
            </div>

            {/* Content side - The 4 types of services */}
            <div className="grid sm:grid-cols-1 gap-12 pt-4">
              {/* Sub-service 1 */}
              <div className="p-8 bg-dental-50/30 dark:bg-dental-900/10 rounded-3xl border border-dental-100 dark:border-dental-800 transition-all hover:border-accent-500/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center text-accent-700 font-bold">1</div>
                  <h3 className="text-2xl font-bold text-dental-700 dark:text-white">Professional Cleanings</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Routine hygiene is the cornerstone of a healthy smile. Our hygienists meticulously remove plaque, tartar, and surface stains to give you a fresh, healthy mouth. We also apply specialized fluoride treatments to strengthen your enamel and prevent cavities and gum disease.
                </p>
              </div>

              {/* Sub-service 2 */}
              <div className="p-8 bg-dental-50/30 dark:bg-dental-900/10 rounded-3xl border border-dental-100 dark:border-dental-800 transition-all hover:border-accent-500/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center text-accent-700 font-bold">2</div>
                  <h3 className="text-2xl font-bold text-dental-700 dark:text-white">Dental Fillings</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Repair cavities with advanced, tooth-colored composite resin that blends effortlessly with your natural enamel. Our fillings restore structural strength and protect against further decay while remaining virtually invisible during your daily interactions.
                </p>
              </div>

              {/* Sub-service 3 */}
              <div className="p-8 bg-dental-50/30 dark:bg-dental-900/10 rounded-3xl border border-dental-100 dark:border-dental-800 transition-all hover:border-accent-500/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center text-accent-700 font-bold">3</div>
                  <h3 className="text-2xl font-bold text-dental-700 dark:text-white">Dental Crowns</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Protect and cap damaged or weakened teeth with custom-crafted porcelain or ceramic crowns. Designed for maximum durability and a natural appearance, our crowns provide long-term functional support and are ideal candidates after large fillings or root canal treatments.
                </p>
              </div>

              {/* Sub-service 4 */}
              <div className="p-8 bg-dental-50/30 dark:bg-dental-900/10 rounded-3xl border border-dental-100 dark:border-dental-800 transition-all hover:border-accent-500/50">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center text-accent-700 font-bold">4</div>
                  <h3 className="text-2xl font-bold text-dental-700 dark:text-white">Root Canals</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Save infected teeth and eliminate pain with modern root canal therapy. Using advanced precision technology and local anesthesia, we remove infected pulp and seal the canals to save your natural tooth in a comfortable, stress-free clinical environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cosmetic Dentistry Section */}
      <section id="cosmetic" className="py-24 bg-white dark:bg-[var(--background)] border-t border-dental-100 dark:border-dental-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Part - Standardized Left Alignment */}
          <div className="max-w-3xl mb-16">
            <SectionHeading
              subtitle="The Art of Perfection"
              title="Cosmetic Dentistry"
              className="mb-6!"
            />
            <p className="text-xl text-foreground/70 leading-relaxed font-light">
              Transform your smile with personalized cosmetic treatments. Achieve a brighter, more youthful appearance with our advanced, minimally invasive options led by Dr. Marcus Chen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Content side - The 3 types of services */}
            <div className="grid sm:grid-cols-1 gap-12 pt-4 order-2 lg:order-1">
              {/* Sub-service 1 */}
              <div className="p-8 bg-dental-50/30 dark:bg-dental-900/10 rounded-3xl border border-dental-100 dark:border-dental-800 transition-all hover:border-accent-500/50 shadow-sm hover:shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-dental-600/10 rounded-xl flex items-center justify-center text-dental-600 font-bold">A</div>
                  <h3 className="text-2xl font-bold text-dental-700 dark:text-white">Teeth Whitening</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Brighten stained or discolored teeth using professional in-office gels and advanced LED light technology for safe, dramatic results. Our sessions take about an hour, revealing smiles up to 8 shades whiter that stay vibrant for months.
                </p>
              </div>

              {/* Sub-service 2 */}
              <div className="p-8 bg-dental-50/30 dark:bg-dental-900/10 rounded-3xl border border-dental-100 dark:border-dental-800 transition-all hover:border-accent-500/50 shadow-sm hover:shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-dental-600/10 rounded-xl flex items-center justify-center text-dental-600 font-bold">B</div>
                  <h3 className="text-2xl font-bold text-dental-700 dark:text-white">Porcelain Veneers</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  These ultra-thin, custom-crafted shells bond to the front of your teeth, correcting chips, gaps, or persistent misalignment for a flawless "Hollywood smile." Highly durable and stain-resistant, our veneers are expertly prepped in just 2-3 visits.
                </p>
              </div>

              {/* Sub-service 3 */}
              <div className="p-8 bg-dental-50/30 dark:bg-dental-900/10 rounded-3xl border border-dental-100 dark:border-dental-800 transition-all hover:border-accent-500/50 shadow-sm hover:shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-dental-600/10 rounded-xl flex items-center justify-center text-dental-600 font-bold">C</div>
                  <h3 className="text-2xl font-bold text-dental-700 dark:text-white">Dental Bonding</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Reshape imperfect teeth with high-quality composite resin matched perfectly to your natural shade. This quick, single-visit procedure is ideal for fixing chips, closing minor gaps, or whitening teeth instantly with no enamel removal required.
                </p>
              </div>
            </div>

            {/* Image side - Right Sticky */}
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-dental-50 dark:border-dental-900/20 lg:sticky lg:top-32 order-1 lg:order-2">
              <NextImage
                src="/images/services/cosmetic1.png"
                alt={`Cosmetic Dentistry at ${siteConfig.name}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-900/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Orthodontics Section */}
      <section id="ortho" className="py-24 bg-white dark:bg-[var(--background)] border-t border-dental-100 dark:border-dental-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Part - Standardized Left Alignment */}
          <div className="max-w-3xl mb-16">
            <SectionHeading
              subtitle="Straighten Your Future"
              title="Orthodontics"
              className="mb-6!"
            />
            <p className="text-xl text-foreground/70 leading-relaxed font-light">
              Straighten your smile comfortably with expert orthodontic care from Dr. Sarah Rivera. Customized plans for kids, teens, and adults—discreet, effective, and life-changing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image side - Back to Left Sticky for variety after Cosmetic's Right Sticky */}
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-dental-50 dark:border-dental-900/20 lg:sticky lg:top-32">
              <NextImage
                src="/images/services/invisalign1.png"
                alt={`Orthodontic Care at ${siteConfig.name}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-900/20 to-transparent" />
            </div>

            {/* Content side - The 3 types of services */}
            <div className="grid sm:grid-cols-1 gap-12 pt-4">
              {/* Sub-service 1 */}
              <div className="p-8 bg-dental-50/30 dark:bg-dental-900/10 rounded-3xl border border-dental-100 dark:border-dental-800 transition-all hover:border-accent-500/50 shadow-sm hover:shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center text-accent-700 font-bold">1</div>
                  <h3 className="text-2xl font-bold text-dental-700 dark:text-white">Invisalign Clear Aligners</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Virtually invisible trays gradually shift teeth without wires, perfect for busy lifestyles. Removable for eating and brushing, treatment averages 12-18 months with professional monitoring.
                </p>
              </div>

              {/* Sub-service 2 */}
              <div className="p-8 bg-dental-50/30 dark:bg-dental-900/10 rounded-3xl border border-dental-100 dark:border-dental-800 transition-all hover:border-accent-500/50 shadow-sm hover:shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center text-accent-700 font-bold">2</div>
                  <h3 className="text-2xl font-bold text-dental-700 dark:text-white">Traditional Braces</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Metal or ceramic brackets and wires deliver precise correction for complex cases like crowding or bite issues. Proven results in 18-24 months, with regular adjustments for comfort.
                </p>
              </div>

              {/* Sub-service 3 */}
              <div className="p-8 bg-dental-50/30 dark:bg-dental-900/10 rounded-3xl border border-dental-100 dark:border-dental-800 transition-all hover:border-accent-500/50 shadow-sm hover:shadow-md">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-accent-500/10 rounded-xl flex items-center justify-center text-accent-700 font-bold">3</div>
                  <h3 className="text-2xl font-bold text-dental-700 dark:text-white">Retainers</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">
                  Custom devices maintain your new smile post-treatment, preventing relapse. Fixed or removable options available—wear nightly for lifelong stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next sections will go here */}
    </main>
  );
}
