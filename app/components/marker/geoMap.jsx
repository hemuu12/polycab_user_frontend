"use client";
import React, { useEffect, useRef, useState } from "react";
import { GeoJSON, MapContainer, TileLayer, ScaleControl } from "react-leaflet";
import * as topojson from "topojson-client";
import india from "./india.json";
import { getColor, layersUtils, getCenterOfGeoJson } from "./mapUtils";
import "leaflet/dist/leaflet.css";

const COUNTRY_VIEW_ID = "india-states";

const ChoroplethMapDrillDown = () => {
  const [geoJsonId, setGeoJsonId] = useState(COUNTRY_VIEW_ID);
  const [geoJsonData, setGeoJsonData] = useState(topojson.feature(india, india.objects[COUNTRY_VIEW_ID]));

  const mapRef = useRef(null);
  const geoJsonRef = useRef(null);

  const onDrillDown = (e) => {
    const featureId = e.target.feature.id;
    if (!india.objects[featureId]) {
      return;
    }
    setGeoJsonId(featureId);
    setGeoJsonData(topojson.feature(india, india.objects[featureId]));
  };

  useEffect(() => {
    if (mapRef.current && geoJsonRef.current) {
      mapRef.current.fitBounds(geoJsonRef.current.getBounds());
    }
  }, [geoJsonData]);

  const mapCenter = getCenterOfGeoJson(geoJsonData);

  return (
    <div className="mapMainContainer">
      <div className="buttonWrapper">
        <button
          onClick={() => {
            setGeoJsonId(COUNTRY_VIEW_ID);
            setGeoJsonData(topojson.feature(india, india.objects[COUNTRY_VIEW_ID]));
          }}
          className="backButton"
        >
          Back To Country View
        </button>
      </div>
      <MapContainer className="map" center={mapCenter} zoom={4} ref={mapRef}>
        <GeoJSON
          data={geoJsonData}
          key={geoJsonId}
          style={geoJSONStyle}
          onEachFeature={onEachFeature}
          ref={geoJsonRef}
        />
        <ScaleControl />
      </MapContainer>
    </div>
  );

  function onEachFeature(feature, layer) {
    let layerUtils = layersUtils(geoJsonRef, mapRef);
    layer.on({
      mouseover: layerUtils.highlightOnClick,
      mouseout: layerUtils.resetHighlight,
      click: onDrillDown
    });
  }

  function geoJSONStyle(feature) {
    return {
      color: "#1f2021",
      weight: 1,
      fillOpacity: 0.5,
      fillColor: "#cbd5e0"
    };
  }
};

export default ChoroplethMapDrillDown;
