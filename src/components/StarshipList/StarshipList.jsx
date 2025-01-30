import StarshipCard from '../StarshipCard/StarshipCard.jsx'
import './StarshipList.css'

export default function StarshipList({starships}) {
    return (
        <div className='starship-list'>
            {starships.map((starship, index) => (
                <StarshipCard 
                key={index} 
                name={starship.name} 
                starshipClass={starship.starship_class}
                manufacturer={starship.manufacturer}
                model={starship.model}
                />
            ))}
        </div>
    )
}