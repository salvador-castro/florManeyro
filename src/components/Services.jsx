import { useState } from 'react'
import ServiceCard from './ServiceCard'
import FlowerDecoration from './FlowerDecoration'
import './Services.css'

const servicesData = {
    wellness: {
        title: 'BEST-SELLERS',
        subtitle: 'WELLNESS - MASSAGE',
        tagline: 'Tratamientos Personalizados - Edición Verano',
        services: [
            {
                name: 'Masaje Descontracturante',
                duration: "90'",
                price: 50000
            },
            {
                name: 'Masaje Descontracturante/Relax',
                duration: "60'",
                price: 40000
            },
            {
                name: 'Masaje Relajantes c/ Piedras Calientes',
                duration: "60'",
                price: 45000
            },
            {
                name: 'Masaje Focalizado (zona a elección)',
                duration: "45'",
                description: 'Espalda · Hombros · Cervicales · Zona lumbar/Ciático',
                price: 32000
            },
            {
                name: 'Masaje Descontracturante Champi',
                duration: "45'",
                description: 'Cuero cabelludo/Cabeza/Cuello/Rostro y Brazos. Ideal para quienes sufren de: Migraña - Bruxismo - Contracturas frecuentes.',
                price: 32000
            }
        ]
    },
    skinFace: {
        title: 'BEST-SELLERS',
        subtitle: 'SKIN - FACE',
        tagline: 'Tratamientos Personalizados - Edición Verano',
        services: [
            {
                name: 'Higiene Facial Profunda',
                description: 'Incluye extracciones/ Microdermoabrasión/ Mascarilla específica.',
                price: 50000
            },
            {
                name: 'Higiene Profunda + Dermaplaning',
                price: 56000
            },
            {
                name: 'Higiene Profunda + Dermapen',
                description: 'Activos específicos según diagnóstico.',
                price: 68000
            },
            {
                name: 'Glow Treatments',
                description: 'HydraGlow · LiftingGlow · HighlightGlow.',
                price: 72000
            }
        ]
    },
    skinBody: {
        title: 'BEST-SELLERS',
        subtitle: 'SKIN - BODY',
        tagline: 'Tratamientos Personalizados - Edición Verano',
        services: [
            {
                name: 'Masaje Reductor/Anticelulítico/Modelador',
                duration: "60'",
                price: 40000
            },
            {
                name: 'Masaje Reductor + Tratamiento intensivo',
                duration: "90/100'",
                description: 'Cremas/Geles específicos.',
                price: 55000
            },
            {
                name: 'Higiene profunda en espalda',
                duration: "60/75'",
                description: 'Microdermoabrasión/Máscara queratolítica/ Extracciones',
                price: 45000
            },
            {
                name: 'Exfoliación corporal + Masaje relajante',
                duration: "45'",
                description: 'Incluye hidratación corporal.',
                price: 42000
            }
        ]
    }
}

const Services = () => {
    const [activeCategory, setActiveCategory] = useState('wellness')
    const categories = [
        { id: 'wellness', label: 'Wellness & Massage' },
        { id: 'skinFace', label: 'Skin Face' },
        { id: 'skinBody', label: 'Skin Body' }
    ]

    const currentData = servicesData[activeCategory]

    return (
        <section id="servicios" className="services section">
            <div className="diagonal-bg"></div>
            <FlowerDecoration position="top-left" />
            <FlowerDecoration position="bottom-right" />

            <div className="container">
                <div className="section-title">
                    <span className="section-subtitle">Nuestros Servicios</span>
                    <h2>Tratamientos</h2>
                </div>

                <div className="services__tabs">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`services__tab ${activeCategory === cat.id ? 'services__tab--active' : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="services__content">
                    <div className="services__header">
                        <h3 className="services__title">{currentData.title}</h3>
                        <p className="services__subtitle">{currentData.subtitle}</p>
                        <p className="services__tagline">{currentData.tagline}</p>
                    </div>

                    <div className="services__list">
                        {currentData.services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                name={service.name}
                                duration={service.duration}
                                description={service.description}
                                price={service.price}
                            />
                        ))}
                    </div>
                </div>

                <div className="services__cta">
                    <a
                        href="https://wa.me/5491166127097?text=Hola%20Marie!%20Quiero%20reservar%20un%20turno"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Reservar Turno
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Services
