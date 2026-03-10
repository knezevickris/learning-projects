import { useState, useEffect } from 'react';
import logo from '../assets/pictures/logo.png';


export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Menu', href: '#menu' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Our Story', href: '#about' },
        { name: 'Reservation', href: '#reservation' },
        { name: 'Find Us', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled
                ? 'bg-cream-base/80 backdrop-blur-xl shadow-lg border-b border-coffee-400/10 py-3'
                : 'bg-transparent py-8'
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                {/* Logo Section */}
                <a
                    href="#hero"
                    className="group flex items-center gap-3"
                >
                    <div className="w-10 h-10 overflow-hidden rounded-full border border-coffee-400/20 shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <img
                            src={logo}
                            alt="Morning Ritual Logo"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <span className={`font-heading text-2xl font-bold tracking-tight transition-all duration-300 ${isScrolled ? 'text-coffee-900' : 'text-cream-base text-shadow'
                        }`}>
                        Morning Ritual
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-10 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`relative text-sm font-semibold uppercase tracking-widest transition-colors duration-300 group ${isScrolled ? 'text-coffee-800' : 'text-coffee-100 hover:text-white'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta transition-all duration-300 group-hover:w-full ${isScrolled ? 'opacity-100' : 'opacity-0 outline outline-1 outline-white'
                                }`}></span>
                        </a>
                    ))}
                </div>

                {/* Mobile menu trigger */}
                <div className="md:hidden">
                    <a
                        href="#contact"
                        className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-md ${isScrolled
                            ? 'bg-terracotta text-cream-base'
                            : 'bg-cream-base text-coffee-900'
                            }`}
                    >
                        Visit
                    </a>
                </div>
            </div>
        </nav>
    );
}
