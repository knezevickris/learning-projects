const testimonials = [
    {
        name: "Theodora",
        quote: "The baristas know my order before I even reach the counter. It’s not just coffee, it’s connection. I’ve met neighbors here I never would have otherwise",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        name: "David",
        quote: "I've tried every 'cozy' spot in the neighborhood, but Morning Ritual is the only one that actually feels like home. Plus, their cinnamon rolls are dangerously addictive.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        name: "Tamara",
        quote: "I've been coming here since the day one so often that I have become part of the cafe's inventory. Just good coffee and good people, every single day.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&auto=format&fit=crop"
    },
    {
        name: "Marco",
        quote: "Tucked away but worth finding, it feels like a secret spot only locals know and every time I bring a friend here, they say the same thing: How did I not know about this place?",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 px-6 bg-coffee-100/30">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4">What Our Regulars Say</h2>
                    <div className="w-24 h-1 bg-terracotta mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {testimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="bg-white p-8 rounded-2xl border border-coffee-400/20 shadow-sm flex flex-col justify-between hover:shadow-md transition-all duration-300 group"
                        >
                            <div>
                                <div className="mb-6">
                                    {/* Quote Icon */}
                                    <svg className="w-8 h-8 text-coffee-400 opacity-50 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V12C5.0166 12.5523 4.56888 13 4.0166 13H2.0166V21H5.0166Z" />
                                    </svg>
                                    <p className="text-coffee-800 italic leading-relaxed">"{t.quote}"</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 mt-4 border-t border-coffee-100 pt-6">
                                <img
                                    src={t.image}
                                    alt={t.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-coffee-100 group-hover:border-terracotta transition-colors"
                                />
                                <div>
                                    <h4 className="font-bold text-coffee-900">{t.name}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
