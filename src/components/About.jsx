import shopInterior from '../assets/pictures/enterier.jpeg';

export default function About() {
    return (
        <section id="about" className="py-24 px-6 bg-cream-base overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Creative Imagery Side */}
                    <div className="relative">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={shopInterior}
                                alt="Our cozy corner"
                                className="w-full h-[500px] object-cover"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-terracotta/10 rounded-full -z-0 blur-3xl"></div>
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/20 rounded-full -z-0 blur-2xl"></div>
                        <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block max-w-[200px] border border-coffee-100">
                            <p className="text-coffee-600 font-bold text-3xl mb-1">4+</p>
                            <p className="text-coffee-800 text-sm font-medium">Years of serving excellent esspresso</p>
                        </div>
                    </div>

                    {/* Story Side */}
                    <div className="flex flex-col">
                        <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-8 leading-tight">
                            It started with a dream <br />
                            <span className="text-terracotta">(and a very broken alarm clock).</span>
                        </h2>

                        <div className="space-y-6 text-lg text-coffee-800 leading-relaxed">
                            <p>
                                Founded in 2021 by <span className="font-bold text-coffee-900 underline decoration-gold decoration-2">Mike Tyson</span>, Morning Ritual wasn't exactly a "planned" business. After a decade of wearing stiff suits and drinking what can only be described as "battery acid" in office breakrooms, Mike’s alarm clock finally gave up the ghost.
                            </p>

                            <p>
                                Waking up three hours late to a world that didn't end, he realized his true calling wasn't spreadsheets—it was the perfect crema. He traded his tie for a burlap apron, and Morning Ritual was born in this very corner of the neighborhood.
                            </p>

                            <p className="bg-coffee-100/50 p-6 rounded-lg border-l-4 border-terracotta italic">
                                "We take our beans seriously—sourcing from small farms where the goats are arguably happier than most CEOs—but we don't take ourselves seriously at all. If you want a 17-step ordering protocol, the green siren is down the street. If you want a coffee that feels like a hug, you're home."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
