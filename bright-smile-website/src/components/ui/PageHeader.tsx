import { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
}

export default function PageHeader({
  title,
  subtitle,
  description,
  centered = true,
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-dental-700">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-500/10 skew-x-12 translate-x-32 -z-0" />
      <div className="absolute -bottom-24 -left-20 w-96 h-96 bg-accent-500/5 rounded-full blur-[100px] -z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`max-w-3xl ${centered ? "mx-auto text-center" : "text-left"}`}>
          {subtitle && (
            <span className="inline-block text-accent-400 font-bold uppercase tracking-[0.2em] text-xs md:text-sm mb-4 animate-fade-in">
              {subtitle}
            </span>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-white/70 leading-relaxed font-light">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
