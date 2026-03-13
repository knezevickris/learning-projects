import Image from "next/image";
import { ReactNode } from "react";
import Button from "./Button";

interface Stat {
  value: string;
  label: string;
}

interface HeroProps {
  tagline: string;
  headline: ReactNode;
  description: string;
  backgroundImage: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  stats: Stat[];
}

export default function Hero({
  tagline,
  headline,
  description,
  backgroundImage,
  primaryCta,
  secondaryCta,
  stats,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Clinic Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Multi-layered Overlay for Premium Feel */}
        <div className="absolute inset-0 bg-gradient-to-r from-dental-900/90 via-dental-700/60 to-transparent dark:from-zinc-950 dark:via-zinc-900/60 dark:to-transparent" />
        <div className="absolute inset-0 bg-dental-700/20 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-20">
        <div className="max-w-3xl">
          {/* Tagline Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-accent-500/20 text-accent-400 backdrop-blur-md border border-accent-500/30 text-xs font-bold uppercase tracking-[0.2em] mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
            </span>
            <span>{tagline}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[1.05] mb-8">
            {headline}
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <Button href={primaryCta.href} className="!px-10 !py-5 text-lg">
              {primaryCta.text}
            </Button>
            <Button
              variant="secondary"
              href={secondaryCta.href}
              className="!px-10 !py-5 text-lg bg-white/10 text-white border-white/20 backdrop-blur-md hover:bg-white/20"
            >
              {secondaryCta.text}
            </Button>
          </div>

          {/* Hero Quick Stats */}
          <div className="mt-16 flex flex-wrap items-center gap-12 text-white/60">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-12">
                <div className="flex flex-col">
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                  <span className="text-[11px] uppercase tracking-widest font-bold text-accent-400">
                    {stat.label}
                  </span>
                </div>
                {index < stats.length - 1 && (
                  <div className="w-px h-12 bg-white/10 hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-50 animate-bounce">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white font-bold">Discover</span>
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
