import PageHeader from "@/components/ui/PageHeader";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";
import Button from "@/components/ui/Button";

const reviews = [
  {
    name: "Sophia L.",
    role: "Invisalign Patient, Riverside",
    content: "Just finished Invisalign with Dr. Rivera. Amazing results in 14 months! Nobody noticed the trays and they were comfy. Team even rushed my retainers when I lost one. 100% recommend 😊",
  },
  {
    name: "Linda M.",
    role: "Patient since 2022",
    content: "Love my cleanings here. Hygienist Emily is gentle and chats with you. Teeth feel so fresh after. Will keep coming back!",
  },
  {
    name: "Jamal W.",
    role: "Cosmetic Patient, Jan 2026",
    content: "Bonding closed gap between my fronts. 1 visit, no enamel removed. Confidence boost for photos. Thanks team! ⭐️⭐️⭐️⭐️⭐️",
  },
  {
    name: "Chris B.",
    role: "New Patient",
    content: "Hated dentists forever but tried bonding + whitening. Staff calmed me down, results are incredible. Finally not hiding my smile!!",
  },
  {
    name: "Marcus T.",
    role: "Emergency Visit, Riverside",
    content: "Had a massive toothache and they got me in same-day. Dr. Chen was super calm and the root canal was way easier than I expected. Prices were fair too compared to other places in Riverside.",
  },
  {
    name: "Elena G.",
    role: "Family Care",
    content: "My kids actually enjoy going here! The staff is so patient with them and the waiting area is nice and bright. Makes school checkups a breeze.",
  },
  {
    name: "David R.",
    role: "Whitening Treatment",
    content: "Started whitening treatment last week. Even after the first session I noticed a huge difference. Looking forward to the final results for my wedding!",
  },
  {
    name: "Sarah Higgins",
    role: "Veneers Patient",
    content: "Got my porcelain veneers done here. I was nervous about the process but Dr. Chen explained everything perfectly. They look so natural, I couldn't be happier with how my face changed.",
  },
  {
    name: "Kevin P.",
    role: "Routine Checkup",
    content: "Friendly faces every time I walk in. Professional, clean, and they stay on schedule. Never had to wait more than 5 minutes for my appointment.",
  },
  {
    name: "Maria S.",
    role: "Orthodontics",
    content: "Traditional braces were a long journey but the team made it manageable. Now I'm finally showing off my straight teeth. Thanks Dr. Rivera!",
  },
];

export default function ReviewsPage() {
  return (
    <main className="flex flex-col w-full">
      <PageHeader
        title="Patient Reviews"
        subtitle="Success Stories"
        description="See why thousands of Riverside families trust Bright Smile for their dental care. Real stories from real patients."
      />

      {/* Ratings Summary Section */}
      <section className="py-16 bg-white dark:bg-[var(--background)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dental-50/50 dark:bg-dental-900/10 rounded-[2.5rem] p-8 md:p-12 border border-dental-100 dark:border-dental-800 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-dental-700 dark:text-white mb-4">
                Our Patients Love Us
              </h2>
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                <span className="text-5xl font-extrabold text-dental-700 dark:text-accent-400">4.9</span>
                <div className="flex flex-col">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm text-foreground/60 font-medium">Based on 5,000+ Google Reviews</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <Button 
                href="#leave-review" 
                className="!bg-dental-600 hover:!bg-dental-700 !px-10 shadow-xl"
              >
                Leave a Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid Section */}
      <section className="py-24 bg-white dark:bg-[var(--background)] border-t border-dental-100 dark:border-dental-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Verified Testimonials"
            title="Read What Others are Saying"
            className="mb-16"
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <TestimonialCard
                key={i}
                name={review.name}
                role={review.role}
                content={review.content}
                rating={5}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-dental-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-500/10 skew-x-12 translate-x-32" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
            Be Our Next Success Story
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experience the clinical excellence and friendly atmosphere our residents can't stop talking about.
          </p>
          <Button 
            href="/contact" 
            className="!bg-white !text-dental-700 hover:!bg-accent-500 hover:!text-dental-900 !px-12 !py-5 !text-lg"
          >
            Start Your Journey
          </Button>
        </div>
      </section>
    </main>
  );
}
