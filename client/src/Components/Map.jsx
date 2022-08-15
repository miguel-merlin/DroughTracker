import React from 'react'
import GoogleMapReact from 'google-map-react'

const LocationPin = () => {
    <div>
        <p>Here</p>
    </div>
}

const Map = ({ location, zoomLevel }) => {
    return (
        <div>
            <GoogleMapReact
                bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_KEY}` }}
                defaultCenter={location}
                defaultZoom={zoomLevel}
            >
                <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map;