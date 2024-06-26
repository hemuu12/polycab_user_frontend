 "use client";

// import React, { useEffect, useRef, useState } from "react";
// import { GeoJSON, FeatureGroup, MapContainer, ScaleControl, Marker, Popup } from "react-leaflet";
// import * as topojson from "topojson-client";
// import L from "leaflet";
// import india from "./india.json";
// import { getColor, layersUtils, getCenterOfGeoJson } from "./mapUtils";
// import "leaflet/dist/leaflet.css";
// import CustomMarker from "../components/marker/marker";

// const COUNTRY_VIEW_ID = "india-states";

// interface IndiaFeature {
//   type: string;
//   properties: {
//     name: string;
//   };
//   geometry: {
//     type: string;
//     coordinates: number[][][];
//   };
// }

// interface Factory {
//   id: number;
//   latitude: number;
//   longitude: number;
//   name: string;
//   description: string;
//   featuredImage: string;
// }

// export const imgdata=[
//    {image:"./images/U4.png"},
//    {image:"./images/U7.png"},
//    {image:"./images/U4-2.png"},
//    {image:"./images/U6.png"},
//    {image:"./images/U8.png"}
//  ]
// const factories: Factory[] = [
//   {
//     id: 1,
//     latitude: 28.7041,
//     longitude: 77.1025,
//     name: "Factory A",
//     description: "This is a description for Factory A located in Delhi.",
//     featuredImage: "./images/U4.png",
//   },
//   {
//     id: 2,
//     latitude: 19.0760,
//     longitude: 72.8777,
//     name: "Factory B",
//     description: "This is a description for Factory B located in Mumbai.",
//     featuredImage: "./images/U7.png",
//   },
//   {
//     id: 3,
//     latitude: 12.9716,
//     longitude: 77.5946,
//     name: "Factory C",
//     description: "This is a description for Factory C located in Bangalore.",
//     featuredImage: "./images/U4-2.png",
//   },
//   {
//     id: 4,
//     latitude: 22.5726,
//     longitude: 88.3639,
//     name: "Factory D",
//     description: "This is a description for Factory D located in Kolkata.",
//     featuredImage: "./images/U6.png",
//   },
//   {
//     id: 5,
//     latitude: 13.0827,
//     longitude: 80.2707,
//     name: "Factory E",
//     description: "This is a description for Factory E located in Chennai.",
//     featuredImage: "./images/U8.png",
//   },
// ];

// export default function Maps() {
//    const [geoJsonId, setGeoJsonId] = useState(COUNTRY_VIEW_ID);
//    const geoJson = topojson.feature(india, india.objects[geoJsonId]) as GeoJSON.FeatureCollection<IndiaFeature>;
//    const mapRef = useRef<L.Map>(null);
//    const geoJsonRef = useRef<L.FeatureGroup>(null);
 
//    const onDrillDown = (e: L.LeafletMouseEvent) => {
//      const featureId = (e.target as any).feature.id;
//      if (!india.objects[featureId]) {
//        return;
//      }
//      setGeoJsonId(featureId);
//    };
 
//    useEffect(() => {
//      if (mapRef.current && geoJsonRef.current) {
//        mapRef.current.fitBounds(geoJsonRef.current.getBounds());
//      }
//    }, [geoJsonId]);
 
//    const mapCenter = getCenterOfGeoJson(geoJson);
 
//    return (
//      <div className="mapMainContainer">
//        <div className="buttonWrapper">
//          <button onClick={() => setGeoJsonId(COUNTRY_VIEW_ID)} className="backButton">
//            Back To Country View
//          </button>
//        </div>
//        <MapContainer className="map" center={mapCenter} zoom={4} ref={mapRef}>
//          <FeatureGroup ref={geoJsonRef}>
//            <GeoJSON
//              data={geoJson}
//              key={geoJsonId}
//              style={geoJSONStyle}
//              onEachFeature={onEachFeature}
//            />
//          </FeatureGroup>
//          <ScaleControl />
 
//          {factories.map(factory => (
//            <CustomMarker key={factory.id} factory={factory} />
//          ))}
//        </MapContainer>
//      </div>
//    );
 
//    function onEachFeature(feature: IndiaFeature, layer: L.Layer) {
//      const layerUtilsInstance = layersUtils(geoJsonRef, mapRef);
//      layer.on({
//        mouseover: layerUtilsInstance.highlightOnClick,
//        mouseout: layerUtilsInstance.resetHighlight,
//        click: onDrillDown,
//      });
//    }
 
//    function geoJSONStyle(feature: IndiaFeature) {
//      return {
//        color: "#00000080",
//        weight: 0.5,
//        fillOpacity: 0.5,
//        fillColor: "#66656542",
//      };
//    }
//  }



import React, { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 20.5937, // Approximate center of India
  lng: 78.9629,
};

export const imgdata = [
  { image: "./images/U4.png" },
  { image: "./images/U7.png" },
  { image: "./images/U4-2.png" },
  // { image: "./images/U6.png" },
  // { image: "./images/U8.png" }
];

const mapStyles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imgdata.length);
  return imgdata[randomIndex].image;
};

const Maps = () => {
  const [factories, setFactories] = useState([]);
  const [selectedFactory, setSelectedFactory] = useState(null);
  const [isFactoriesLoaded, setIsFactoriesLoaded] = useState(false);
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBDXL6h1dQq7dmt0e8s93nMAWlhCQdlEjU', // Replace with your API key
    libraries,
  });

  useEffect(() => {
    fetch('api/factory', {
      method: 'GET'
    })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then((data) => {
      setFactories(data);
      setIsFactoriesLoaded(true);
    })
    .catch((error) => {
      console.error('There has been a problem with your fetch operation:', error);
      setIsFactoriesLoaded(true); 
    });
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded || !isFactoriesLoaded) return <div>Loading...</div>;

  const convertBufferToImage = (imageData) => {
    if (!imageData) {
      return null;
    }
    const uint8Array = new Uint8Array(imageData.data);
    const blob = new Blob([uint8Array], { type: imageData.type });
    const imageUrl = URL.createObjectURL(blob);
    return imageUrl;
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={5}
        center={center}
        options={{ styles: mapStyles }}

      >
        {factories?.map((factory) => (
          <Marker
            key={factory.id}
            position={{ lat: factory.location.latitude, lng: factory.location.longitude }}
            icon={{
              url: getRandomImage(),
              scaledSize: new window.google.maps.Size(90, 90),
            }}
            onClick={() => setSelectedFactory(factory)}
          />
        ))}

        {selectedFactory && (
          <InfoWindow 
            position={{ lat: selectedFactory.location.latitude, lng: selectedFactory.location.longitude }}
            onCloseClick={() => setSelectedFactory(null)}
          >
            <div className="content z-50 rounded-xl w-[300px] bg-[#1F93C7] text-white p-3 transition-opacity duration-300">
              <div className="">
                <img width={280} height={100} src={selectedFactory.shortVideo} alt="" />
              </div>
              <div className="mt-5">
                <h3>{selectedFactory.name}</h3>
                <div className="flex items-center mt-1">
                  <p className="ml-1 text-xs">{selectedFactory.address}</p>
                </div>
                <p className="text-xs mt-2 text-wrap">{selectedFactory.description}</p>
                <div className="mt-4">
                  <button className="bg-white text-[#FE3B1F] text-sm px-4 py-2 rounded-full">View Tour</button>
                </div>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  );
};

export default Maps;
