import './StarshipCard.css'

export default function StarshipCard({ name, starshipClass, manufacturer, model }) {
    return (
        <div className="starship-card">
            <h3>{name}</h3>
            <p>Class: {starshipClass}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Model: {model}</p>
        </div>
    )
}