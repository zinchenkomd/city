import React from 'react';
import {Polygon} from "react-google-maps"

function District(props) {
    return (
        <Polygon
            key={props.info.id}
            paths={props.info.polygon_points}
            options={{
                fillColor: props.color,
                fillOpacity: 0.20,
                strokeColor: props.color,
                strokeOpacity: 0.5,
                strokeWeight: 0.5,
            }}
            onClick={() => props.onDistrictSelect(props.info.id)}
        />
    )
}

export default District;
