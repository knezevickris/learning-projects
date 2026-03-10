const menuData = [
    {
        category: "Espresso Drinks",
        description: "Balanced shots and silky steamed milk.",
        items: [
            { name: "Esspresso", price: "€2.00" },
            { name: "Cappuccino", price: "€2.50" },
            { name: "Latte", price: "€2.75" },
            { name: "Macchiato", price: "€3.00" },
            { name: "Mocha", price: "€3.25" },
            { name: "Irish Coffee", price: "€4.25" },
        ]
    },
    {
        category: "Pastries",
        description: "Freshly baked every morning.",
        items: [
            { name: "Morning Muffin", price: "€2.50" },
            { name: "Butter Croissant", price: "€4.00" },
            { name: "Toast with Cheese", price: "€4.50" },
            { name: "Cinnamon Roll  ", price: "€6.00" },
            { name: "Croissant with Ice Cream", price: "€6.25" },
        ]
    },
    {
        category: "Pour-Overs",
        description: "Slow-brewed single origin beans.",
        items: [
            { name: "Traditional Turkish", price: "€3.50" },
            { name: "Colombian Huila", price: "€5.00" },
            { name: "Ethiopian Yirgacheffe", price: "€5.50" },
        ]
    }
];

export default function Menu() {
    return (
        <section id="menu" className="py-24 px-6 bg-cream-base/50">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-4 tracking-tight">Menu</h2>
                    <p className="text-coffee-600 font-medium uppercase tracking-[0.3em] text-xs">Crafted with care, served with love</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {menuData.map((section, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-coffee-100/50 flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                            <div className="mb-8 relative text-center">
                                <h3 className="text-xl font-black text-coffee-900 uppercase tracking-widest mb-2">{section.category}</h3>
                                <p className="text-coffee-600/70 text-sm font-medium italic">{section.description}</p>
                                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-px bg-terracotta/40"></div>
                            </div>

                            <ul className="space-y-6">
                                {section.items.map((item, itemIdx) => (
                                    <li key={itemIdx} className="flex flex-col gap-1 group">
                                        <div className="flex justify-between items-baseline gap-2">
                                            <span className="text-coffee-900 font-bold group-hover:text-terracotta transition-colors duration-300">
                                                {item.name}
                                            </span>
                                            <div className="flex-grow border-b border-dotted border-coffee-100 opacity-50"></div>
                                            <span className="text-terracotta font-black text-sm">
                                                {item.price}
                                            </span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
