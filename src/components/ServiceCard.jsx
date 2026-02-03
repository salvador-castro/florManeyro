import './ServiceCard.css'

const ServiceCard = ({ name, description, price, duration }) => {
    return (
        <div className="service-card">
            <div className="service-card__content">
                <h4 className="service-card__name">
                    {name}
                    {duration && <span className="service-card__duration">{duration}</span>}
                </h4>
                {description && (
                    <p className="service-card__description">{description}</p>
                )}
            </div>
            <div className="service-card__price">
                ${price.toLocaleString('es-AR')}
            </div>
        </div>
    )
}

export default ServiceCard
