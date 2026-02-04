import { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const navLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#sobre-mi', label: 'Sobre Mí' },
        { href: '#servicios', label: 'Servicios' },
        { href: '#combos', label: 'Combos' },
        { href: '#contacto', label: 'Contacto' },
    ]

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="container">
                <nav className="nav">
                    <a href="#inicio" className="nav__logo">
                        <span className="nav__logo-text">Auto Amor & Relax</span>
                    </a>

                    {/* Mobile menu overlay */}
                    {isMobileMenuOpen && (
                        <div
                            className="nav__overlay"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />
                    )}

                    <ul className={`nav__links ${isMobileMenuOpen ? 'nav__links--open' : ''}`}>
                        {/* Close button inside menu */}
                        <button
                            className="nav__close"
                            onClick={() => setIsMobileMenuOpen(false)}
                            aria-label="Cerrar menú"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                        </button>

                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="nav__link"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <button
                        className="nav__toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Abrir menú"
                    >
                        <span className="nav__toggle-bar"></span>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header