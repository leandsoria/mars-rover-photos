import { useState, useContext, createContext } from 'react';

export const RoverContext = createContext({});

// eslint-disable-next-line react/prop-types

// eslint-disable-next-line react/prop-types
export const RoverContextProvider = ({ children }) => {
  const [rover, setRover] = useState('curiosity');
  const [isLoaded, setIsLoaded] = useState(false);
  const [cameraSelected, setCameraSelected] = useState(null);
  const [dateType, setDateType] = useState('earth');
  const [earthDate, setEarthDate] = useState('');
  const [solDate, setSolDate] = useState(1000);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [showBookmarkedPhotos, setShowBookmarkedPhotos] = useState(false);

  const [imageOpened, setImageOpened] = useState({
    imgSrc: null,
    roverName: null,
    cameraName: null,
    earthDate: null,
  });
  const earthDateHandler = (value) => {
    setEarthDate(value);
  };
  const setDateTypeHandler = (dateType) => {
    setDateType(dateType);
  };

  const setRoverHandler = (string) => {
    setRover(string.toLowerCase());
  };

  const cameraFilterSelectedHandler = (value) => {
    setCameraSelected(value);
  };

  const solDateHandler = (solDate) => {
    setSolDate(solDate);
  };
  const imageModalHandler = () => {
    setIsImageModalOpen(!isImageModalOpen);
  };

  const imageOpenHandler = (params) => {
    setImageOpened(params);
  };

  const bookmarkedShowHandler = () => {
    setShowBookmarkedPhotos(!showBookmarkedPhotos);
  };

  const roverCameras = {
    curiosity: {
      cameras: ['FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'MAHLI', 'MARDI', 'NAVCAM'],
    },
    opportunity: { cameras: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'] },
    spirit: { cameras: ['FHAZ', 'RHAZ', 'NAVCAM', 'PANCAM', 'MINITES'] },
  };

  return (
    <RoverContext.Provider
      value={{
        rover,
        setRoverHandler,
        roverCameras,
        isLoaded,
        setIsLoaded,
        cameraSelected,
        cameraFilterSelectedHandler,
        earthDate,
        earthDateHandler,
        solDate,
        solDateHandler,
        dateType,
        setDateTypeHandler,
        isImageModalOpen,
        imageModalHandler,
        imageOpened,
        imageOpenHandler,
        showBookmarkedPhotos,
        bookmarkedShowHandler,
      }}
    >
      {children}
    </RoverContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useRoverContext = () => useContext(RoverContext);
