import { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "./map.css";
import "ol/ol.css";
import { AiFillBackward } from "react-icons/ai";
import { Link } from "react-router-dom";

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

  return (
    <>
      <div className="map-container container">
        <Link to="../" className="home">
          <AiFillBackward />
          <h2>Back to home</h2>
        </Link>
        <div className="openmap" id="map" ref={mapRef} />;
      </div>
    </>
  );
};

export default WorldMap;
