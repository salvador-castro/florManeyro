import './Contact.css'

const Contact = () => {
    return (
        <section id="contacto" className="contact section">
            <div className="container">
                <div className="section-title">
                    <span className="section-subtitle">Contacto</span>
                    <h2>Reservá tu Turno</h2>
                </div>

                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__card">
                            <div className="contact__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                </svg>
                            </div>
                            <h3>WhatsApp</h3>
                            <p>+54 9 11 6612-7097</p>
                            <a
                                href="https://wa.me/5491166127097?text=Hola%20Marie!%20Quiero%20reservar%20un%20turno"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-whatsapp"
                            >
                                Escribime
                            </a>
                        </div>

                        <div className="contact__card">
                            <div className="contact__icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                    <circle cx="12" cy="10" r="3" />
                                </svg>
                            </div>
                            <h3>Ubicación</h3>
                            <p>Consultá la ubicación en Maps</p>
                            <a
                                href="https://maps.app.goo.gl/gYR3rg1aX9b5P1Do6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                Ver en Mapa
                            </a>
                        </div>
                    </div>

                    <div className="contact__message">
                        <p>
                            ¿Tenés dudas sobre algún tratamiento? ¿Querés una consulta personalizada?
                            No dudes en escribirme, estoy para ayudarte a encontrar el tratamiento
                            perfecto para vos.
                        </p>
                        <p className="contact__highlight">
                            ✨ Todos los tratamientos son 100% personalizados ✨
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
