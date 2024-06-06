import { BiLocationPlus } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";

const CustomMarker = ({ key, lat, lng, factory }) => {

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
    <>
    <div className="absolute transform -translate-x-1/4 -translate-y-full cursor-pointer" style={{ top: `${lat}px`, left: `${lng}px` }}>
      <div className="relative w-8 h-14 flex flex-col items-center">
        <div className="common-bg w-8 h-8 rounded-full flex items-center justify-center z-10">
          <div className="w-5 h-5 bg-white  rounded-full object-fill"><img className="w-5 h-5  rounded-full" src={convertBufferToImage(factory.featuredImage)} alt={factory.name}/></div>
        </div>
        <div className="w-0 h-0 border-t-8 border-t-red-500  border-r-4 border-r-transparent border-l-4 border-l-transparent custom-border"></div>
      </div>
    </div>
    {/* hover content */}
    <div className="bg-\">
      <div><img src="" alt="" /></div>
      <div>
        <h3>location</h3>
        <div>
          <FaLocationPin color="white"/>
          <h5>location</h5>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora quo laboriosam neque consectetur aliquid dicta, tempore voluptatum facilis aut sequi, similique ipsum eum nemo sint, necessitatibus cumque quasi repellendus exercitationem.</p>
        <div><button>View Tour</button></div>
      </div>

    </div>
    </>
  );
};

export default CustomMarker;







{/* <div className="absolute transform -translate-x-1/4 -translate-y-full cursor-pointer" style={{ top: `${lat}px`, left: `${lng}px` }}>
<div className="relative w-8 h-14 flex flex-col items-center">
  <div className="common-bg w-8 h-8 rounded-full flex items-center justify-center z-10">
    <div className="w-5 h-5 bg-white rounded-full">{img}</div>
  </div>
  <div className="w-0 h-0 border-t-8 border-t-red-500 common-bg border-r-4 border-r-transparent border-l-4 border-l-transparent"></div>
</div>
</div>
//  */}