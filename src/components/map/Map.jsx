import React, { useEffect, useRef } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import './mymap.css'
import 'ol/ol.css';

const WorldMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 3,
      }),
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return <div className='map container' id="map" ref={mapRef}  />;
};

export default WorldMap;
