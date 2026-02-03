import './Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">
                    <div className="footer__brand">
                        <h3 className="footer__logo">Auto Amor & Relax</h3>
                        <p className="footer__tagline">Rituales de Cuidado Consciente</p>
                        <p className="footer__author">Marie Prieto</p>
                    </div>

                    <div className="footer__links">
                        <h4>Navegación</h4>
                        <ul>
                            <li><a href="#inicio">Inicio</a></li>
                            <li><a href="#sobre-mi">Sobre Mí</a></li>
                            <li><a href="#servicios">Servicios</a></li>
                            <li><a href="#combos">Combos</a></li>
                            <li><a href="#contacto">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="footer__contact">
                        <h4>Contacto</h4>
                        <a
                            href="https://wa.me/5491166127097"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__phone"
                        >
                            +54 9 11 6612-7097
                        </a>
                        <a
                            href="https://maps.app.goo.gl/gYR3rg1aX9b5P1Do6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer__location"
                        >
                            Ver ubicación en Maps
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>&copy; {currentYear} Auto Amor & Relax. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
