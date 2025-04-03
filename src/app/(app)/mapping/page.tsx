'use client';

import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import Map, { NavigationControl, Source, Layer, MapRef, Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IconMapPinFilled } from '@tabler/icons-react';

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

type FeatureProperties = {
    name: string;
    description: {
        value: string;
    };
};

type Feature = {
    type: string;
    geometry: {
        type: string;
        coordinates: number[] | number[][];
    };
    properties: FeatureProperties;
};

type GeoJSONData = {
    type: string;
    features: Feature[];
};

type MarkerFeatureProperties = {
    name: string;
    description: {
        "@type": string;
        value: string;
    };
    styleUrl: string;
    "icon-scale": number;
    "icon-offset": [number, number];
    "icon-offset-units": [string, string];
    icon: string;
};

type MarkerFeature = {
    type: "Feature";
    geometry: {
        type: "Point";
        coordinates: [number, number, number];
    };
    properties: MarkerFeatureProperties;
};

type MarkerJSONData = {
    type: "FeatureCollection";
    features: MarkerFeature[];
};


const Page: React.FC = () => {
    const [mapStyle, setMapStyle] = useState('mapbox://styles/mapbox/satellite-v9');
    const [geoJSONData, setGeoJSONData] = useState<GeoJSONData | null>(null);
    const [markerJSONData, setMarkerJSONData] = useState<MarkerJSONData | null>(null);
    const [selectedMarker, setSelectedMarker] = useState<Feature | null>(null);
    const mapRef = useRef<MapRef>(null);

    useEffect(() => {
        fetch('/delhi-water-bodies.json')
            .then(response => response.json())
            .then(data => setGeoJSONData(data))
            .catch(error => console.error('Error loading GeoJSON data:', error));
    }, []);

    useEffect(() => {
        fetch('/full_water_bodies.json')
            .then(response => response.json())
            .then(data => setMarkerJSONData(data))
            .catch(error => console.error('Error loading MarkerJSON data:', error));
    }, []);

    const handleStyleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setMapStyle(event.target.value);
    };

    return (
        <div className='w-full h-[70vh]'>
            <div className='absolute z-10 p-3'>
                <select name='map' aria-label='map' onChange={handleStyleChange} value={mapStyle} className='bg-primary text-secondary'>
                    <option value="mapbox://styles/mapbox/satellite-v9">Satellite</option>
                    <option value="mapbox://styles/mapbox/streets-v11">Street</option>
                    <option value="mapbox://styles/mapbox/satellite-streets-v11">Satellite Street</option>
                </select>
            </div>

            <Map
                initialViewState={{
                    longitude: 76.9205261,
                    latitude: 28.5180842,
                    zoom: 12,
                }}
                style={{ width: '100%', height: '100%' }}
                mapStyle={mapStyle}
                mapboxAccessToken={MAPBOX_TOKEN}
                ref={mapRef}
            >
                <NavigationControl position="top-right" />

                {geoJSONData && (
                    <Source type="geojson" data={geoJSONData}>
                        <Layer
                            id="water-bodies"
                            type="fill"
                            paint={{
                                'fill-color': [
                                    'case',
                                    ['has', 'highlighted'],
                                    'red',
                                    'blue'
                                ],
                                'fill-opacity': 0.5,
                            }}
                        />
                        <Layer
                            id="water-bodies-outline"
                            type="line"
                            paint={{
                                'line-color': '#000',
                                'line-width': 2,
                            }}
                        />
                    </Source>
                )}

                {markerJSONData && markerJSONData.features.map((feature, index) => (
                    <Marker
                        key={index}
                        longitude={feature.geometry.coordinates[0]}
                        latitude={feature.geometry.coordinates[1]}
                        onClick={e => {
                            e.originalEvent.stopPropagation();
                            setSelectedMarker(feature);
                        }}
                    >
                        <div className='text-[#00d9ff]'><IconMapPinFilled /></div>
                    </Marker>
                ))}

                {selectedMarker && (
                    <Popup
                        longitude={Number(selectedMarker.geometry.coordinates[0])}
                        latitude={Number(selectedMarker.geometry.coordinates[1])}
                        onClose={() => setSelectedMarker(null)}
                        closeOnClick={false}
                    >
                        <div className='overflow-auto max-h-52'>
                            <h3>{selectedMarker.properties.name}</h3>
                            <p dangerouslySetInnerHTML={{ __html: selectedMarker.properties.description.value }}></p>
                        </div>
                    </Popup>
                )}
            </Map>
        </div>
    );
};

export default Page;
