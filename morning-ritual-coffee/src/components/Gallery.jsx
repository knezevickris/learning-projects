export default function Gallery() {
    const photos = [
        {
            id: 1,
            title: "The Classic Rosetta",
            description: "A timeless expression of precision and flow.",
            url: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1000&auto=format&fit=crop",
            span: "md:col-span-2 md:row-span-2",
        },
        {
            id: 2,
            title: "Heart of the Morning",
            description: "Simple, sweet, and perfectly balanced.",
            url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop",
            span: "md:col-span-1 md:row-span-1",
        },
        {
            id: 3,
            title: "The Swan's Grace",
            description: "Intricate details for our most discerning guests.",
            url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1000&auto=format&fit=crop",
            span: "md:col-span-1 md:row-span-1",
        },
        {
            id: 4,
            title: "Velvet Pour",
            description: "Silky micro-foam meets rich espresso.",
            url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=1000&auto=format&fit=crop",
            span: "md:col-span-1 md:row-span-2",
        },
        {
            id: 5,
            title: "Golden Hour Bloom",
            description: "The perfect extraction, caught in the light.",
            url: "https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=1000&auto=format&fit=crop",
            span: "md:col-span-1 md:row-span-1",
        },
    ];

    return (
        <section id="gallery" className="py-24 px-6 bg-cream-base">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4 tracking-tight">
                        Latte Art Gallery
                    </h2>
                    <p className="text-coffee-600 font-medium uppercase tracking-[0.3em] text-xs">
                        Every cup is a canvas
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-3 gap-6 h-auto md:h-[600px]">
                    {photos.map((photo) => (
                        <div
                            key={photo.id}
                            className={`group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${photo.span}`}
                        >
                            {/* Image Container */}
                            <div className="absolute inset-0 group-hover:scale-110 transition-transform duration-700 ease-out">
                                <img
                                    src={photo.url}
                                    alt={photo.title}
                                    className="w-full h-full object-cover opacity-100 transition-opacity duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-xl font-bold text-white mb-2 drop-shadow-md">
                                    {photo.title}
                                </h3>
                                <p className="text-coffee-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 italic">
                                    {photo.description}
                                </p>
                            </div>

                            {/* Border decoration */}
                            <div className="absolute inset-4 border border-white/20 rounded-2xl pointer-events-none group-hover:inset-6 transition-all duration-500"></div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-coffee-700 font-serif italic text-lg mb-8">
                        "We believe the first sip starts with the eyes."
                    </p>
                    <button className="px-10 py-4 bg-terracotta text-cream-base font-bold rounded-full hover:bg-coffee-900 transition-all duration-300 transform hover:scale-105 shadow-xl">
                        See More On Instagram
                    </button>
                </div>
            </div>
        </section>
    );
}
