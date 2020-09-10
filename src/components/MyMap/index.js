import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, TileLayer } from 'react-leaflet';

import './myMap.scss';

const MyMap = ({ latitude, longitude, mobile = false }) => {
  const position = [ latitude, longitude ];
  return (
    <Map center={position} zoom={14} style={{ width: '100%', height: '100%' }} dragging={!mobile}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      <Marker className="leaflet-container__marker" position={position} />
    </Map>
  );
};

MyMap.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  mobile: PropTypes.bool,
};

export default MyMap;
