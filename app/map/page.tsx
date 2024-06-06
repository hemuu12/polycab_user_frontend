"use client"

import React, { useEffect, useState } from 'react';
import { drawPath, constants, stateCodes } from '../components/constants/Constants';
import CustomMarker from '../components/marker/marker';

export type MapPropType = {
   className?: string,
   size?: number,
   mapColor?: string,
   strokeColor?: string,
   strokeWidth?: string,
   hoverColor?: string,
   onClick: (value: string) => void,
}

const cityCoordinates = {
   Mumbai: { latitude: "19°02′11.11", longitude: "72°51′34.09″" },
   Delhi: { latitude: 28.6139, longitude: 77.209 },
   Bangalore: { latitude: 12.9716, longitude: 77.5946 },
   Kolkata: { latitude: 22.5726, longitude: 88.3639 },
   Chennai: { latitude: 13.0827, longitude: 80.2707 },
 };

const Map = ({
   className = 'svgmap',
   size = constants.WIDTH,
   mapColor = constants.MAPCOLOR,
   strokeColor = constants.STROKE_COLOR,
   strokeWidth = constants.STROKE_WIDTH,
   hoverColor = constants.HOVERCOLOR,
   onClick,
}: MapPropType) => {
   const [zoomLevel, setZoomLevel] = useState(1);
   const [factories , setFactories]=useState<any[]>([]);

   const handleZoomIn = () => {
      setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.1);
   };

   const handleZoomOut = () => {
      setZoomLevel((prevZoomLevel) => Math.max(prevZoomLevel - 0.1, 0.1));
   };

   const mapStyle = {
      width: size * zoomLevel,
      height: 'auto', // Maintain aspect ratio
      fill: mapColor,
      stroke: strokeColor,
      strokeWidth: strokeWidth,
   }

   const handleMouseEnter = (hoverStateId: string) => {
      const path: HTMLElement | null = document.getElementById(hoverStateId);
      if (path) {
         path.style.fill = hoverColor;
      }
   }

   const handleMouseLeave = (hoverStateId: string) => {
      const path: HTMLElement | null = document.getElementById(hoverStateId);
      if (path) {
         path.style.fill = mapColor;
      }
   }


   useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/factory');
          const data = await response.json();
          setFactories(data);
        } catch (error) {
          console.error('Error fetching factories:', error);
        }
      };
  
      fetchData();
    }, []);

    console.log(factories,"dataaaaaaaaaaaaaaaaaaa")

   return (
      <div className="flex items-center justify-center h-screen">

                  <div className='z-10 flex gap-20'>
                     
                  {
                     factories?.map((factory, index) => (
                        <div key={index} >
                        <CustomMarker key={index} lat={factory.latitude} lng={factory.longitude} factory={factory} />
                        </div>
                     ))
                  }
</div>   
         <div className="relative">
            <div className={className} style={mapStyle}>
               <svg
                  version='1.1'
                  id='svg2'
                  x='0px'
                  y='0px'
                  viewBox='-114 -50.4 611.9 695.7'
               >
                  {stateCodes.map((stateCode) => (
                     <path
                        key={stateCode}
                        onMouseEnter={() => handleMouseEnter(stateCode)}
                        onMouseLeave={() => handleMouseLeave(stateCode)}
                        id={stateCode}
                        d={drawPath[stateCode]}
                     />
                  ))}
               </svg>
            </div>
            <div className="absolute bottom-0 left-0 m-4 flex space-x-4">
               <button className='border border-gray-500 p-1 text-2xl' onClick={handleZoomIn}>+</button>
               <button className='border border-gray-500 p-1 text-2xl' onClick={handleZoomOut}>-</button>
            </div>
         </div>
      </div>
   );
}

export default Map;



// import React from 'react'
// import "../globals.css"
// import ChoroplethMapDrillDown from '../components/marker/geoMap'
// const Map= () => {
//   return (
//     <div>
//       <ChoroplethMapDrillDown/>


//     </div>
//   )
// }

// export default Map