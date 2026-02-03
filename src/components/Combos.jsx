import './Combos.css'

const combosData = [
    {
        name: 'Spa Revitalizante',
        price: 56000,
        image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400&h=400&fit=crop',
        features: [
            'Higiene Facial Express.',
            'Mascarilla Iluminadora.',
            "Masajes Relajantes 45'."
        ],
        note: 'No incluye extracciones.'
    },
    {
        name: 'Spa Premium',
        price: 76000,
        image: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&h=400&fit=crop',
        features: [
            'Higiene Facial Profunda (incluye extracciones y microdermoabrasión).',
            'Masaje Facial con Espátula Ultrasónica.',
            "Masajes Relajantes c/ Piedras Calientes 60'."
        ],
        note: null
    }
]

const Combos = () => {
    return (
        <section id="combos" className="combos section">
            <div className="container">
                <div className="section-title">
                    <span className="section-subtitle">Paquetes Especiales</span>
                    <h2 className="combos__main-title">Combos</h2>
                </div>

                <div className="combos__grid">
                    {combosData.map((combo, index) => (
                        <div key={index} className="combo-card">
                            <div className="combo-card__image">
                                <img src={combo.image} alt={combo.name} />
                            </div>

                            <div className="combo-card__content">
                                <h3 className="combo-card__name">{combo.name}</h3>

                                <ul className="combo-card__features">
                                    {combo.features.map((feature, i) => (
                                        <li key={i}>• {feature}</li>
                                    ))}
                                </ul>

                                {combo.note && (
                                    <p className="combo-card__note">{combo.note}</p>
                                )}

                                <div className="combo-card__price">
                                    ${combo.price.toLocaleString('es-AR')}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="combos__cta">
                    <a
                        href="https://wa.me/5491166127097?text=Hola%20Marie!%20Quiero%20consultar%20por%20los%20combos"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                    >
                        Consultar por Combos
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Combos
