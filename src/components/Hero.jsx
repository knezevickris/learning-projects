import heroBg from '../assets/pictures/hero-background.jpg';

export default function Hero() {
    return (
        <section
            id="hero"
            className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
        >
            {/* Background Image Container */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
                style={{ backgroundImage: `url(${heroBg})` }}
            ></div>

            {/* Tint overlays to ensure text is readable without hiding the image */}
            <div className="absolute inset-0 z-0 bg-coffee-900/40"></div>
            <div className="absolute inset-0 z-0 bg-black/40"></div>

            {/* Content Container */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
                <h1 className="text-5xl md:text-7xl font-bold text-cream-base mb-6 drop-shadow-lg tracking-tight">
                    Morning Ritual Coffee
                </h1>

                <p className="text-xl md:text-2xl text-coffee-100 font-medium mb-10 max-w-2xl leading-relaxed drop-shadow-md">
                    Your cozy neighborhood spot. Our coffee feels like home.
                </p>

                <div className="flex justify-center flex-col sm:flex-row gap-4 w-auto">
                    <a
                        href="#menu"
                        className="px-6 py-3 sm:px-8 sm:py-4 bg-terracotta text-cream-base font-semibold rounded-full hover:bg-[#c26244] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 text-base sm:text-lg min-w-[160px]"
                    >
                        Our Menu
                    </a>
                    <a
                        href="#about"
                        className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border-2 border-coffee-100 text-coffee-100 font-semibold rounded-full hover:bg-coffee-100 hover:text-coffee-900 transition-all duration-300 shadow-lg text-base sm:text-lg min-w-[160px]"
                    >
                        Our Story
                    </a>
                </div>
            </div>
        </section>
    );
}
