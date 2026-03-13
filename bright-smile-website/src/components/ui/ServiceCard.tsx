import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: ReactNode;
  image?: string;
  className?: string;
}

export default function ServiceCard({
  title,
  description,
  href,
  icon,
  image,
  className = "",
}: ServiceCardProps) {
  return (
    <div className={`group bg-white dark:bg-[var(--card)] rounded-3xl border border-dental-100 dark:border-zinc-800 hover:border-dental-300 dark:hover:border-zinc-700 transition-all hover:shadow-2xl hover:shadow-dental-500/5 overflow-hidden flex flex-col ${className}`}>
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      )}
      
      <div className="p-8 flex flex-col flex-grow">
        {icon && (
          <div className="w-14 h-14 bg-dental-50 dark:bg-dental-900/30 rounded-2xl flex items-center justify-center text-dental-600 mb-6 group-hover:scale-110 group-hover:bg-dental-600 group-hover:text-white transition-all">
            {icon}
          </div>
        )}
        
        <h3 className="text-xl font-bold text-dental-700 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>
        <Link 
          href={href}
          className="text-dental-600 font-bold text-sm inline-flex items-center space-x-2 group-hover:translate-x-1 transition-transform"
        >
          <span>Learn More</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
