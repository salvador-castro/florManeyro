import FlowerDecoration from './FlowerDecoration'
import './Hero.css'

const Hero = () => {
    return (
        <section id="inicio" className="hero">
            <div className="diagonal-bg"></div>
            <FlowerDecoration position="top-left" />
            <FlowerDecoration position="bottom-right" />

            <div className="container hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">Auto Amor & Relax</h1>
                    <p className="hero__subtitle">Rituales de Cuidado Consciente</p>
                    <p className="hero__tagline">Tratamientos Personalizados</p>

                    <div className="hero__cta">
                        <a href="#servicios" className="btn btn-primary">
                            Ver Tratamientos
                        </a>
                        <a
                            href="https://wa.me/5491166127097?text=Hola%20Marie!%20Quiero%20consultar%20por%20los%20tratamientos"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline"
                        >
                            Reservar Turno
                        </a>
                    </div>
                </div>

                <div className="hero__info">
                    <p className="hero__author">Marie Prieto</p>
                    <p className="hero__contact">Esteticista Integral & Maquilladora</p>
                </div>
            </div>
        </section>
    )
}

export default Hero
