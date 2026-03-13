interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating?: number;
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="p-8 bg-white dark:bg-[var(--card)] rounded-3xl border border-dental-100 dark:border-zinc-800 shadow-sm relative overflow-hidden">


      <div className="relative z-10">
        <div className="flex space-x-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>

        <p className="text-foreground/80 italic leading-relaxed mb-6">
          "{content}"
        </p>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center text-accent-700 font-bold text-sm">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="text-sm font-bold text-dental-700 dark:text-white">
              {name}
            </h4>
            <p className="text-[11px] uppercase tracking-wider text-foreground/50 font-medium">
              {role}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
