import enterier1 from '../assets/pictures/enterier1.jpeg';

export default function Contact() {
    return (
        <section id="contact" className="py-16 px-6 bg-[#876155] text-coffee-900 border-t border-coffee-900/10">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-16">

                    {/* Main Heading */}
                    <div className="max-w-xs shrink-0">
                        <h2 className="text-4xl font-bold mb-4 italic leading-tight text-coffee-900">Find us in Višegrad</h2>
                        <p className="text-coffee-900/80 text-sm font-medium">Stop by for your daily ritual.</p>
                    </div>

                    {/* Compact Info items */}
                    <div className="flex flex-col sm:flex-row justify-between w-full gap-8 lg:gap-16 items-start">

                        {/* Address */}
                        <div className="flex flex-col gap-3 min-w-[120px]">
                            <div className="text-coffee-900">
                                <svg className="w-6 h-6 text-coffee-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest text-coffee-900/60 mb-1">Our Spot</h4>
                                <p className="text-coffee-900 font-bold text-sm leading-relaxed whitespace-nowrap">Užičkog korpusa 14<br /> Višegrad, BiH</p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col gap-3 min-w-[120px]">
                            <div className="text-coffee-900">
                                <svg className="w-6 h-6 text-coffee-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest text-coffee-900/60 mb-1">Call Us</h4>
                                <p className="text-coffee-900 font-bold text-sm leading-relaxed whitespace-nowrap">+387 65 143 430</p>
                            </div>
                        </div>

                        {/* Hours */}
                        <div className="flex flex-col gap-3 min-w-[120px] sm:items-end sm:text-right">
                            <div className="text-coffee-900">
                                <svg className="w-6 h-6 text-coffee-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-xs uppercase tracking-widest text-coffee-900/60 mb-1">Open Daily</h4>
                                <p className="text-coffee-900 font-bold text-sm leading-relaxed whitespace-nowrap">07:00 — 23:00</p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Map and Image Row */}
                <div className="mt-16 flex flex-col md:flex-row gap-8 items-stretch md:h-[400px]">
                    {/* Map - approx 40% width */}
                    <div className="md:w-[40%] h-[350px] md:h-auto rounded-2xl overflow-hidden shadow-lg border border-coffee-900/10">
                        <iframe
                            src="https://maps.google.com/maps?q=Užičkog%20korpusa%2014,%20Višegrad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Coffee Shop Location"
                        ></iframe>
                    </div>

                    {/* Accompanying Image */}
                    <div className="flex-grow h-[300px] md:h-auto rounded-2xl overflow-hidden shadow-lg border border-coffee-900/10">
                        <img
                            src={enterier1}
                            alt="Our friendly atmosphere"
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                </div>

                {/* Minimal Footer */}
                <div className="mt-16 pt-8 border-t border-coffee-900/20 text-center">
                    <p className="text-coffee-900/60 text-[10px] uppercase tracking-[0.2em]">© {new Date().getFullYear()} Morning Ritual Coffee</p>
                </div>
            </div>
        </section>
    );
}
