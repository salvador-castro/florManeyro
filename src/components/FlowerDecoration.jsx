const FlowerDecoration = ({ position = 'top-left', className = '' }) => {
    const getPositionStyles = () => {
        switch (position) {
            case 'top-left':
                return { top: 0, left: 0, transform: 'rotate(0deg)' }
            case 'top-right':
                return { top: 0, right: 0, transform: 'scaleX(-1)' }
            case 'bottom-left':
                return { bottom: 0, left: 0, transform: 'scaleY(-1)' }
            case 'bottom-right':
                return { bottom: 0, right: 0, transform: 'scale(-1, -1)' }
            default:
                return {}
        }
    }

    return (
        <svg
            className={`flower-decoration ${className}`}
            style={{
                position: 'absolute',
                width: '200px',
                height: '200px',
                opacity: 0.6,
                zIndex: 0,
                pointerEvents: 'none',
                ...getPositionStyles()
            }}
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Main flower branch */}
            <path
                d="M160 10 C140 30, 120 50, 100 80 C80 60, 60 40, 40 30"
                stroke="#888"
                strokeWidth="1"
                fill="none"
            />

            {/* Flower petals - large flower */}
            <path
                d="M100 80 C95 65, 85 55, 75 50 C85 55, 95 50, 105 45 C100 55, 105 65, 100 80"
                stroke="#888"
                strokeWidth="0.8"
                fill="none"
            />
            <path
                d="M100 80 C110 70, 125 65, 140 60 C125 70, 120 80, 100 80"
                stroke="#888"
                strokeWidth="0.8"
                fill="none"
            />
            <path
                d="M100 80 C90 90, 80 100, 70 115 C85 100, 95 90, 100 80"
                stroke="#888"
                strokeWidth="0.8"
                fill="none"
            />

            {/* Leaves */}
            <path
                d="M40 30 C50 45, 55 60, 50 80 C45 60, 35 45, 40 30"
                stroke="#888"
                strokeWidth="0.8"
                fill="none"
            />
            <path
                d="M140 25 C150 40, 155 55, 150 75 C145 55, 135 40, 140 25"
                stroke="#888"
                strokeWidth="0.8"
                fill="none"
            />
            <path
                d="M160 10 C170 25, 175 40, 170 60 C165 40, 155 25, 160 10"
                stroke="#888"
                strokeWidth="0.8"
                fill="none"
            />

            {/* Secondary flower */}
            <path
                d="M50 80 C45 70, 35 65, 25 60 C35 70, 40 75, 50 80"
                stroke="#888"
                strokeWidth="0.6"
                fill="none"
            />
            <path
                d="M50 80 C55 90, 60 100, 55 115 C50 100, 48 90, 50 80"
                stroke="#888"
                strokeWidth="0.6"
                fill="none"
            />

            {/* Small details */}
            <circle cx="100" cy="80" r="3" stroke="#888" strokeWidth="0.5" fill="none" />
            <circle cx="50" cy="80" r="2" stroke="#888" strokeWidth="0.5" fill="none" />

            {/* Additional leaf details */}
            <path
                d="M70 50 C80 55, 85 65, 80 80"
                stroke="#888"
                strokeWidth="0.5"
                fill="none"
            />
            <path
                d="M120 45 C130 50, 140 55, 145 70"
                stroke="#888"
                strokeWidth="0.5"
                fill="none"
            />

            {/* Delicate lines */}
            <path
                d="M30 50 C40 60, 45 75, 40 90"
                stroke="#888"
                strokeWidth="0.4"
                fill="none"
            />
            <path
                d="M170 30 C175 45, 180 60, 175 80"
                stroke="#888"
                strokeWidth="0.4"
                fill="none"
            />
        </svg>
    )
}

export default FlowerDecoration
