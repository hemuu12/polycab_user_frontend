import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { IoLocationSharp } from 'react-icons/io5';
import L from 'leaflet';

const CustomMarker = ({ factory }: any) => {
  // Define custom icon
  const customIcon = L.icon({
    iconUrl: factory.featuredImage, // Assuming factory.featuredImage is a valid icon URL
    iconSize: [65, 65], // Set the size of the icon as needed
  });

  return (
    <Marker position={[factory.latitude, factory.longitude]} icon={customIcon}>
      <Popup className="custom-popup">
        <div className="content z-50 rounded-xl w-[300px] bg-[#1F93C7] text-white p-3 transition-opacity duration-300">
          <div className="w-[275px]">
            <img src={factory.shortVideo} alt="" />
          </div>
          <div className="mt-5">
            <h3>{factory.name}</h3>
            <div className="flex items-center mt-1">
              <IoLocationSharp size={18} color="white" />
              <p className="ml-1 text-xs">{factory.address}</p>
            </div>
            <p className="text-xs mt-2 text-wrap">{factory.description}</p>
            <div className="mt-4">
              <button className="bg-white text-[#FE3B1F] text-sm px-4 py-2 rounded-full">View Tour</button>
            </div>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default CustomMarker;
