'use client';

import React, { useState, useEffect, useRef, ChangeEvent } from 'react';
import Map, {
    NavigationControl,
    Source,
    Layer,
    MapRef,
    Marker,
    Popup,
    MapLayerMouseEvent
} from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IconMapPinFilled } from '@tabler/icons-react';

// Firebase imports
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';

// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyCugLu_wwUY0UeczWWCvagz3DvPhgo4sro",
    authDomain: "greenheart-2025.firebaseapp.com",
    databaseURL: "https://greenheart-2025-default-rtdb.firebaseio.com",
    projectId: "greenheart-2025",
    storageBucket: "greenheart-2025.firebasestorage.app",
    messagingSenderId: "767206203790",
    appId: "1:767206203790:web:795fadf6feb50b247f04df",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

type FeatureProperties = {
    name: string;
    description: {
        value: string;
    };
};

export type Feature = {
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

// Helper function to recursively remove undefined values and functions
const cleanData = (data: any): any => {
    if (typeof data === 'function') {
        return undefined;
    }
    if (Array.isArray(data)) {
        return data.map(item => cleanData(item)).filter(item => item !== undefined);
    }
    if (data !== null && typeof data === 'object') {
        const newObj: any = {};
        for (const key in data) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                const cleanedValue = cleanData(data[key]);
                if (cleanedValue !== undefined) {
                    newObj[key] = cleanedValue;
                }
            }
        }
        return newObj;
    }
    return data;
};

// Update saveZoneData to return the promise so we can handle it in the component.
const saveZoneData = (zone: Feature, color: string) => {
    const zoneId =
        zone.properties && zone.properties.name
            ? zone.properties.name.replace(/\s+/g, '_')
            : `zone_${Date.now()}`;

    const dataToSave = {
        polygon: zone,
        color,
        savedAt: new Date().toISOString(),
    };

    const sanitizedData = cleanData(dataToSave);

    return set(ref(db, 'zones/' + zoneId), sanitizedData)
        .then(() => {
            console.log('Zone data saved successfully');
        })
        .catch((error) => {
            console.error('Error saving zone data:', error);
            throw error;
        });
};

const Page: React.FC = () => {
    const [mapStyle, setMapStyle] = useState('mapbox://styles/mapbox/satellite-v9');
    const [geoJSONData, setGeoJSONData] = useState<GeoJSONData | null>(null);
    const [markerJSONData, setMarkerJSONData] = useState<MarkerJSONData | null>(null);
    const [mainWaterData, setMainWaterData] = useState<GeoJSONData | null>(null);
    const [selectedMarker, setSelectedMarker] = useState<Feature | null>(null);
    // State for the selected zone (from main water bodies)
    const [selectedZone, setSelectedZone] = useState<Feature | null>(null);
    // States for the checkboxes (mutually exclusive)
    const [waterBodiesChecked, setWaterBodiesChecked] = useState(false);
    const [plantationChecked, setPlantationChecked] = useState(false);
    // Notification state for gentle alert
    const [notification, setNotification] = useState<string | null>(null);
    // State for saved zones fetched from Firebase
    const [savedZones, setSavedZones] = useState<
        Array<{ polygon: Feature; color: string; savedAt: string }>
    >([]);

    const mapRef = useRef<MapRef>(null);

    useEffect(() => {
        fetch('/delhi-water-bodies.json')
            .then(response => response.json())
            .then(data => setGeoJSONData(data))
            .catch(error => console.error('Error loading GeoJSON data:', error));
    }, []);

    useEffect(() => {
        fetch('/full_water-bodies.json')
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

    // Listen for saved zones changes in Firebase
    useEffect(() => {
        const zonesRef = ref(db, 'zones');
        onValue(zonesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const zonesArray = Object.values(data) as Array<{
                    polygon: Feature;
                    color: string;
                    savedAt: string;
                }>;
                setSavedZones(zonesArray);
            } else {
                setSavedZones([]);
            }
        });
    }, []);

    const handleStyleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setMapStyle(event.target.value);
    };

    // When clicking on the map, check if a zone from main water bodies was clicked.
    const handleMapClick = (event: MapLayerMouseEvent) => {
        if (mapRef.current) {
            const features = mapRef.current.queryRenderedFeatures(event.point, {
                layers: ['main-water-bodies-fill']
            });
            if (features.length > 0) {
                setSelectedZone(features[0] as unknown as Feature);
            } else {
                setSelectedZone(null);
            }
        }
    };

    // Compute the fill color for the selected zone.
    let selectedZoneFillColor = 'blue';
    if (waterBodiesChecked) {
        selectedZoneFillColor = 'red';
    } else if (plantationChecked) {
        selectedZoneFillColor = 'green';
    }

    // Handler to save zone data and display notification on success
    const handleSaveZone = () => {
        if (selectedZone) {
            saveZoneData(selectedZone, selectedZoneFillColor)
                .then(() => {
                    setNotification("Zone data saved successfully!");
                    // Clear the notification after 3 seconds
                    setTimeout(() => setNotification(null), 3000);
                })
                .catch((error) => {
                    alert("Error saving zone data: " + error.message);
                });
        }
    };

    return (
        <div className='w-full h-[70vh]'>
            {/* Notification alert */}
            {notification && (
                <div className="absolute top-10 right-1/2 bg-green-500 text-white p-3 rounded shadow">
                    {notification}
                </div>
            )}

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

            {/* Control panel for styling the selected zone */}
            {selectedZone && (
                <div className="absolute top-64 right-14 bg-white p-3 z-10 shadow">
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={waterBodiesChecked}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setWaterBodiesChecked(true);
                                        setPlantationChecked(false);
                                    } else {
                                        setWaterBodiesChecked(false);
                                    }
                                }}
                            />{' '}
                            Water Bodies
                        </label>
                    </div>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                checked={plantationChecked}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setPlantationChecked(true);
                                        setWaterBodiesChecked(false);
                                    } else {
                                        setPlantationChecked(false);
                                    }
                                }}
                            />{' '}
                            Plantation
                        </label>
                    </div>
                    <button
                        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded"
                        onClick={handleSaveZone}
                    >
                        Save Zone Data
                    </button>
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
                mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
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
                                'fill-color': 'rgba(0, 0, 255, 0.7)',
                                'fill-opacity': 0.5,
                            }}
                        />
                        <Layer
                            id="main-water-bodies-outline"
                            type="line"
                            paint={{
                                'line-color': 'blue',
                                'line-width': 2,
                            }}
                        />
                    </Source>
                )}

                {/* Render saved zones from Firebase */}
                {savedZones.map((zone, index) => (
                    <Source key={index} type="geojson" data={zone.polygon}>
                        <Layer
                            id={`saved-zone-fill-${index}`}
                            type="fill"
                            paint={{
                                'fill-color': zone.color,
                                'fill-opacity': 0.7,
                            }}
                        />
                        <Layer
                            id={`saved-zone-outline-${index}`}
                            type="line"
                            paint={{
                                'line-color': '#000',
                                'line-width': 2,
                            }}
                        />
                    </Source>
                ))}

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
