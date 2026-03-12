interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : "text-left"} ${className}`}>
      {subtitle && (
        <span className="text-dental-600 font-bold uppercase tracking-widest text-xs md:text-sm mb-3 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dental-700 dark:text-white leading-tight">
        {title}
      </h2>
      <div className={`h-1.5 w-20 bg-accent-500 mt-6 rounded-full ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
