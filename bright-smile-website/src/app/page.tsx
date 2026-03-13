import Hero from "@/components/ui/Hero";

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
    </div>
  );
}
