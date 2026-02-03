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

                    <ul className={`nav__links ${isMobileMenuOpen ? 'nav__links--open' : ''}`}>
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
                        aria-label="Toggle menu"
                    >
                        <span className={`nav__toggle-bar ${isMobileMenuOpen ? 'nav__toggle-bar--open' : ''}`}></span>
                    </button>
                </nav>
            </div>
        </header>
    )
}

export default Header
