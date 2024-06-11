import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';

const convertBufferToImage = (imageData) => {
  if (!imageData) {
    return null;
  }
  const uint8Array = new Uint8Array(imageData.data);
  const blob = new Blob([uint8Array], { type: imageData.type });
  const imageUrl = URL.createObjectURL(blob);
  return imageUrl;
};

export const imgdata=[
  {image:"./images/U4.png"},
  {image:"./images/U7.png"}
]
const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imgdata.length);
  return imgdata[randomIndex].image;
};

const CustomMarker = ({ factory }) => {

  const randomImage = getRandomImage();

  return (
    <div className="absolute z-40 w-[200px] h-[400px] ml-[50px] cursor-pointer group ">
      <div className="hovercontent  w-5 z-40 h-5 bg-white rounded-full object-fill">
        <img className="w-10 h-10 rounded-full cursor-pointer group" src={randomImage} alt={factory.name} />
      </div>
      
      {/* hover content */}
      <div className="content absolute z-50 rounded-xl bottom-0 left-0 w-[300px] bg-[#1F93C7] text-white p-3 opacity-0 transition-opacity duration-300">
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
    </div>
  );
};

export default CustomMarker;
