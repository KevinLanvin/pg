import React from 'react'
import PropTypes from 'prop-types'
// import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import './myMap.scss'

const MyMap = ({ latitude, longitude, mobile = false }) => (
	<></>
	// <MapContainer center={[latitude, longitude]} zoom={14}>
	// 	<TileLayer
	// 		attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	// 		url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
	// 	/>
	// 	<Marker
	// 		className='leaflet-container__marker'
	// 		position={{ lat: latitude, lon: longitude }}
	// 	/>
	// </MapContainer>
)

MyMap.propTypes = {
	latitude: PropTypes.number.isRequired,
	longitude: PropTypes.number.isRequired,
	mobile: PropTypes.bool,
}

export default MyMap
