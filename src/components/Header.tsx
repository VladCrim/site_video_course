import { useState, useEffect } from 'react'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const navLinks = [
        { label: 'О школе', href: '#trust' },
        { label: 'Курсы', href: '#courses' },
        { label: 'Мастер', href: '#master' },
        { label: 'Отзывы', href: '#reviews' },
        { label: 'Контакты', href: '#contact' },
    ]

    return (
        <header
            id="header"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-brown-black/95 backdrop-blur-md shadow-lg py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group">
                    <img
                        src="/images/logo.png"
                        alt="Irina Berzina Hand Made"
                        className="h-28 sm:h-32 object-contain group-hover:brightness-110 transition-all duration-300 drop-shadow-lg"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-white/80 hover:text-gold text-sm tracking-wide uppercase transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-gold hover:after:w-full after:transition-all after:duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <a
                    href="#contact"
                    className="hidden lg:inline-flex items-center gap-2 bg-cognac hover:bg-cognac-light text-white px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-cognac/30"
                >
                    Начать обучение
                </a>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-white p-2"
                    aria-label="Меню"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
                        <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                        <span className={`block h-[2px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="bg-brown-black/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
                    {navLinks.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-white/80 hover:text-gold text-base py-2 border-b border-white/10 transition-colors duration-300"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="bg-cognac text-white text-center py-3 rounded-full font-medium mt-2"
                    >
                        Начать обучение с 0 ₽
                    </a>
                </nav>
            </div>
        </header>
    )
}
