'use client';

import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import Map, { NavigationControl, Source, Layer, MapRef, Marker, Popup, MapLayerMouseEvent } from 'react-map-gl';
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
    const [mainWaterData, setMainWaterData] = useState<GeoJSONData | null>(null);
    const [selectedMarker, setSelectedMarker] = useState<Feature | null>(null);

    // New state for the selected zone (from main water bodies)
    const [selectedZone, setSelectedZone] = useState<Feature | null>(null);
    // States for the checkboxes
    const [waterBodiesChecked, setWaterBodiesChecked] = useState(false);
    const [plantationChecked, setPlantationChecked] = useState(false);

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

    useEffect(() => {
        fetch('/main_water_bodies.geojson')
            .then(response => response.json())
            .then(data => setMainWaterData(data))
            .catch(error => console.error('Error loading main water bodies data:', error));
    }, []);

    const handleStyleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setMapStyle(event.target.value);
    };

    // When clicking on the map, check if a zone from main water bodies was clicked.
    const handleMapClick = (event: MapLayerMouseEvent) => {
        if (mapRef.current) {
            // Query features from the main water bodies fill layer
            const features = mapRef.current.queryRenderedFeatures(event.point, {
                layers: ['main-water-bodies-fill']
            });
            if (features.length > 0) {
                // If a feature is found, set it as the selected zone.
                setSelectedZone(features[0] as unknown as Feature);
            } else {
                setSelectedZone(null);
            }
        }
    };

    // Determine the fill color for the selected zone based on the checkboxes.
    let selectedZoneFillColor = 'rgba(0, 255, 0, 0.7)'; // default color
    if (waterBodiesChecked && plantationChecked) {
        selectedZoneFillColor = 'purple';
    } else if (waterBodiesChecked) {
        selectedZoneFillColor = 'red';
    } else if (plantationChecked) {
        selectedZoneFillColor = 'green';
    }

    return (
        <div className='w-full h-[70vh]'>
            <div className='absolute z-10 p-3'>
                <select
                    name='map'
                    aria-label='map'
                    onChange={handleStyleChange}
                    value={mapStyle}
                    className='bg-primary text-secondary'
                >
                    <option value="mapbox://styles/mapbox/satellite-v9">Satellite</option>
                    <option value="mapbox://styles/mapbox/streets-v11">Street</option>
                    <option value="mapbox://styles/mapbox/satellite-streets-v11">Satellite Street</option>
                </select>
            </div>

            {/* Fixed control panel for zone styling (shown only when a zone is selected) */}
            {selectedZone && (
                <div className="absolute top-64 right-14 bg-white p-3 z-10 shadow">
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={waterBodiesChecked}
                                onChange={(e) => setWaterBodiesChecked(e.target.checked)}
                            />{' '}
                            Water Bodies
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={plantationChecked}
                                onChange={(e) => setPlantationChecked(e.target.checked)}
                            />{' '}
                            Plantation
                        </label>
                    </div>
                </div>
            )}

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
                onClick={handleMapClick}
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
                        <div className='text-[#00d9ff]'>
                            <IconMapPinFilled />
                        </div>
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

                {mainWaterData && (
                    <Source type="geojson" data={mainWaterData}>
                        <Layer
                            id="main-water-bodies-fill"
                            type="fill"
                            paint={{
                                'fill-color': 'rgba(0, 255, 0, 0.7)',
                                'fill-opacity': 0.5,
                            }}
                        />
                        <Layer
                            id="main-water-bodies-outline"
                            type="line"
                            paint={{
                                'line-color': '#00ff00',
                                'line-width': 2,
                            }}
                        />
                    </Source>
                )}

                {/* If a zone is selected, render it on top with the new style */}
                {selectedZone && (
                    <Source type="geojson" data={{ type: 'FeatureCollection', features: [selectedZone] }}>
                        <Layer
                            id="selected-zone-fill"
                            type="fill"
                            paint={{
                                'fill-color': selectedZoneFillColor,
                                'fill-opacity': 0.7,
                            }}
                        />
                        <Layer
                            id="selected-zone-outline"
                            type="line"
                            paint={{
                                'line-color': '#000',
                                'line-width': 2,
                            }}
                        />
                    </Source>
                )}
            </Map>
        </div>
    );
};

export default Page;
