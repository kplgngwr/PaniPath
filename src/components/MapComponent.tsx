'use client'

import React, { useState } from 'react';
import Map, { NavigationControl } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

const MapComponent: React.FC = () => {
    const [mapStyle, setMapStyle] = useState('mapbox://styles/mapbox/streets-v11');

    const handleStyleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setMapStyle(event.target.value);
    };

    return (
        <div style={{ width: '90vw', height: '90vh' }}>
            <div style={{ position: 'absolute', zIndex: 1, padding: '10px' }}>
                <select name='map' aria-label='map' onChange={handleStyleChange} value={mapStyle} className='text-black'>
                    <option value="mapbox://styles/mapbox/streets-v11">Street</option>
                    <option value="mapbox://styles/mapbox/satellite-v9">Satellite</option>
                    <option value="mapbox://styles/mapbox/light-v10">Light</option>
                    <option value="mapbox://styles/mapbox/dark-v10">Dark</option>
                    <option value="mapbox://styles/mapbox/outdoors-v11">Outdoors</option>
                    <option value="mapbox://styles/mapbox/satellite-streets-v11">Satellite Street</option>
                </select>
            </div>

            <Map
                initialViewState={{
                    longitude: -100,
                    latitude: 40,
                    zoom: 3,
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle={mapStyle}
                mapboxAccessToken={MAPBOX_TOKEN}
            >
                <NavigationControl position="top-right" />
            </Map>
        </div>
    );
};

export default MapComponent;

