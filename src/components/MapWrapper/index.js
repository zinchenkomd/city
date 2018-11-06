import React from 'react';
import {withScriptjs, withGoogleMap, GoogleMap} from 'react-google-maps';
import District from '../District/index.js';
import styles from './styles.css';

const colors = ['red', 'blue', 'yellow'];

const WrappedMapWrapper = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={13}
        defaultCenter={CENTER_COORDINATE}
    >
        {props.zones.map((district, index) => <District
            key={district.id}
            info={district}
            color={colors[index]}
            onDistrictSelect={(id) => props.onDistrictSelect(id)}
        />)}
    </GoogleMap>
));

function MapWrapper(props) {
    const containerClassName = props.isWide ? styles.wide : styles.narrow;

    return (
        <WrappedMapWrapper
            onDistrictSelect={(id) => props.onDistrictSelect(id)}
            zones={props.zones}
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_API_KEY}`}
            loadingElement={<div style={{height: `100%`}}/>}
            containerElement={<div className={containerClassName}/>}
            mapElement={<div style={{height: `100%`}}/>}
        />
    )
}

export default MapWrapper;
