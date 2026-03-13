import NextImage from "next/image";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  isLarge?: boolean;
}

export default function TeamMember({
  name,
  role,
  bio,
  image,
  isLarge = false,
}: TeamMemberProps) {
  return (
    <div className={`group flex flex-col ${isLarge ? "md:flex-row gap-8 items-center" : "gap-4"}`}>
      <div className={`relative overflow-hidden rounded-3xl border border-dental-100 dark:border-dental-800 shadow-md ${isLarge ? "w-full md:w-1/3 aspect-[4/5]" : "w-full aspect-[4/5]"}`}>
        <NextImage
          src={image}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className={isLarge ? "flex-1" : ""}>
        <div className="mb-2">
          <h3 className={`font-bold text-dental-700 dark:text-white ${isLarge ? "text-2xl" : "text-lg"}`}>
            {name}
          </h3>
          <p className="text-dental-600 font-bold text-sm uppercase tracking-wider">
            {role}
          </p>
        </div>
        <p className={`text-foreground/70 leading-relaxed ${isLarge ? "text-lg" : "text-sm"}`}>
          {bio}
        </p>
      </div>
    </div>
  );
}
