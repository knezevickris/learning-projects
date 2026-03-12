import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  type = "button",
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3.5 rounded-full font-bold transition-all active:scale-95 text-sm md:text-base";
  
  const variants = {
    primary: "bg-dental-600 text-white hover:bg-dental-700 shadow-lg shadow-dental-500/20 hover:shadow-xl hover:shadow-dental-500/30",
    secondary: "bg-white text-dental-700 border border-dental-100 hover:border-dental-300 hover:bg-dental-50 shadow-sm",
    outline: "border-2 border-dental-600 text-dental-600 hover:bg-dental-600 hover:text-white",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
}
