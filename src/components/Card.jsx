import Marker from '../assets/locationMarker.png'

function Card({place}) {
    let darkBackground
    if(place.id / 2 % 1) {
        darkBackground = 'bg-dark'
    }
    
    
    return (
        <div className={`card ${darkBackground}`}>
            <img src={`src/assets/${place.imageUrl}`} className="card-image" alt="" />
            <div className="card-info">
                <div className="location">
                    <img src={Marker} className="marker" alt="" />
                    <p className="country">{place.location}</p>
                    <a href={place.googleMapsUrl} className="google-link">View on Google Maps
                    </a>
                </div>
                <h2 className="destination">{place.title}</h2>
            <p className="date">{`${place.startDate} - `}</p>
                <p className="date">{place.endDate}</p>
                <p className="description">{place.description}
                </p>
            </div>
        </div>
    )
}

export default Card