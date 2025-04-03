import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

// Ensure to set your Mapbox token in your environment variables
const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

interface MapProps {
  latitude: number;
  longitude: number;
}

const Map: React.FC<MapProps> = ({ latitude, longitude }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      // Initialize Mapbox
      mapboxgl.accessToken = MAPBOX_TOKEN;
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [longitude, latitude],
        zoom: 14,
        dragPan: false,
        scrollZoom: false,
        boxZoom: false,
        keyboard: false,
        doubleClickZoom: false,
        touchZoomRotate: false,
      });

      mapRef.current = map;

      // Add a marker
      new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);

      // Ensure the map stays centered on the marker
      map.once('load', () => {
        map.setCenter([longitude, latitude]);
        map.setZoom(14); // Adjust zoom level as needed
      });

      // Clean up on unmount
      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
        }
      };
    }
  }, [latitude, longitude]);

  return <div ref={mapContainerRef} className="w-full h-96"></div>;
};

export default Map;