import Marker from '../assets/locationMarker.png'

function Card(props) {
    return (
        <div className="card">
            <img src={`src/assets/${props.imgUrl}`} className="card-image" alt="" />
            <div className="card-info">
                <div className="location">
                    <img src={Marker} className="marker" alt="" />
                    <p className="country">{props.location}</p>
                    <a href={props.googleMapsUrl} className="google-link">View on Google Maps
                    </a>
                </div>
                <h2 className="destination">{props.title}</h2>
            <p className="date">{`${props.startDate} - `}</p>
                <p className="date">{props.endDate}</p>
                <p className="description">{props.description}
                </p>
            </div>
        </div>
    )
}

export default Card