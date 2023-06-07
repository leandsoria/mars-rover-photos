import { useRoverContext } from '../../context/rover-context';

function ImageModalText() {
  const { imageOpened } = useRoverContext();
  return (
    <div className="absolute top-[75%] z-50 text-white text-center">
      <h2>{imageOpened.roverName}</h2>
      <h3>Camera: {imageOpened.cameraName} </h3>
      <p>Date: {imageOpened.earthDate}</p>
    </div>
  );
}

export default ImageModalText;
