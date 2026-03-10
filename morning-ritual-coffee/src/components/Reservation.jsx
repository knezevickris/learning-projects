export default function Reservation() {
    return (
        <section id="reservation" className="py-24 px-6 bg-coffee-100">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6 tracking-tight">Celebrate With Us</h2>
                    <p className="text-lg text-coffee-800 leading-relaxed max-w-2xl mx-auto">
                        Looking for a cozy spot for your next special occasion? Whether it's a birthday, an anniversary, or a simple get-together with friends, reserve a table and let us make it memorable.
                    </p>
                </div>

                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border border-coffee-200">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-coffee-900 uppercase tracking-wider mb-2">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Jane Doe"
                                    className="w-full px-4 py-3 rounded-lg border border-coffee-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-cream-base/50"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-coffee-900 uppercase tracking-wider mb-2">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="jane@example.com"
                                    className="w-full px-4 py-3 rounded-lg border border-coffee-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-cream-base/50"
                                />
                            </div>

                            {/* Date */}
                            <div>
                                <label htmlFor="date" className="block text-sm font-bold text-coffee-900 uppercase tracking-wider mb-2">Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    className="w-full px-4 py-3 rounded-lg border border-coffee-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-cream-base/50 text-coffee-900"
                                />
                            </div>

                            {/* Guests */}
                            <div>
                                <label htmlFor="guests" className="block text-sm font-bold text-coffee-900 uppercase tracking-wider mb-2">Number of Guests</label>
                                <select
                                    id="guests"
                                    className="w-full px-4 py-3 rounded-lg border border-coffee-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-cream-base/50 text-coffee-900"
                                >
                                    <option value="">Select...</option>
                                    <option value="2">2 People</option>
                                    <option value="3-4">3-4 People</option>
                                    <option value="5-8">5-8 People</option>
                                    <option value="9+">9+ People (Large Event)</option>
                                </select>
                            </div>
                        </div>

                        {/* Special Requests */}
                        <div>
                            <label htmlFor="requests" className="block text-sm font-bold text-coffee-900 uppercase tracking-wider mb-2">Special Requests</label>
                            <textarea
                                id="requests"
                                rows="4"
                                placeholder="Any dietary requirements? Is it a surprise party?"
                                className="w-full px-4 py-3 rounded-lg border border-coffee-200 focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none transition-all bg-cream-base/50 resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="px-8 py-4 bg-terracotta text-cream-base font-bold rounded-full hover:bg-[#c26244] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 w-full md:w-auto min-w-[200px]"
                            >
                                Request Reservation
                            </button>
                            <p className="mt-4 text-xs text-coffee-600 font-medium">
                                *We will confirm your reservation via email within 24 hours.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
