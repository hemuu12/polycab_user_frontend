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

const Map = ({
   className = 'svgmap',
   size = constants.WIDTH,
   mapColor = constants.MAPCOLOR,
   strokeColor = constants.STROKE_COLOR,
   strokeWidth = constants.STROKE_WIDTH,
   hoverColor = constants.HOVERCOLOR,
   onClick,
}: MapPropType) => {
   const [zoomLevel, setZoomLevel] = useState(0.9);
   const [factories, setFactories] = useState<any[]>([]);
   const [transform, setTransform] = useState({ x: 0, y: 0 });
   const [hasZoomed, setHasZoomed] = useState(false); // Track if the map has already zoomed

   const handleZoomIn = () => {
      setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.1);
   };

   const handleZoomOut = () => {
      setZoomLevel(0.9);
   };

   const handleMapClick = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      if (hasZoomed) return; // If already zoomed, return

      const svg = event.currentTarget;
      const rect = svg.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Calculate the transform to center the clicked position
      const newTransformX = -(x - rect.width / 2) * (zoomLevel + 0.2 - zoomLevel);
      const newTransformY = -(y - rect.height / 2) * (zoomLevel + 0.2 - zoomLevel);

      setTransform((prevTransform) => ({
         x: prevTransform.x + newTransformX,
         y: prevTransform.y + newTransformY,
      }));

      // Zoom in on first click
      setZoomLevel((prevZoomLevel) => prevZoomLevel + 0.2);
      setHasZoomed(true); // Set the state to true after zooming
   };

   const mapStyle = {
      width: size * zoomLevel,
      height: 'auto', // Maintain aspect ratio
      fill: mapColor,
      stroke: strokeColor,
      strokeWidth: strokeWidth,
      transform: `translate(${transform.x}px, ${transform.y}px) scale(${zoomLevel})`,
      transformOrigin: 'center center',
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

   return (
      <div className="flex items-center justify-center h-auto">
         <div className='absolute top-22 left-20 m-4 flex space-x-4 z-20'>
            <button className='border-gray-500 p-1 text-2xl' onClick={handleZoomIn}>+</button>
            <button className='border-gray-500 p-1 text-2xl' onClick={handleZoomOut}>-</button>
         </div>
         <div className="relative overflow-hidden w-full h-3/4 flex items-center justify-center">
            <div className={className} style={mapStyle}>
               <svg
                  version='1.1'
                  id='svg2'
                  x='0px'
                  y='0px'
                  viewBox='-114 -50.4 611.9 695.7'
                  onClick={handleMapClick}
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
               <div className="absolute top-14 left-2 w-full h-full cursor-pointer z-[200px] flex gap-2">
                  {factories?.map((factory, index) => (
                     <CustomMarker
                        key={index}
                        lat={factory.latitude}
                        lng={factory.longitude}
                        factory={factory}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Map;
