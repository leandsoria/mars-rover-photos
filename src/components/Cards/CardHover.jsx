import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

import { Icon } from '@mui/material';
import { useRoverContext } from '../../context/rover-context';

function CardHover({
  roverName,
  roverId,
  cameraName,
  earthDate,
  imgSrc,
  photoId,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const { imageModalHandler, imageOpenHandler } = useRoverContext();
  const starClasses = [
    {
      position: 'absolute',
      fontSize: '35px',
      top: '10px',
      right: '10px',
      zIndex: 10,
      opacity: 0.5,
      transition: 'opacity ease, transform .2s',
      transitionDuration: '.3s',
      '&:hover': {
        opacity: 1,
      },
      '&:active': {
        transform: 'scale(1.2)',
      },
    },
    isBookmarked && {
      opacity: 1,
    },
  ];

  const setFavouriteHandler = () => {
    setIsBookmarked(!isBookmarked);
    let favouriteArray = [];
    const storedPhotos = localStorage.getItem('photos');
    /* if is not favourite pic - save */
    if (!isBookmarked) {
      /* doesn't exists storage - save */
      if (!storedPhotos) {
        favouriteArray.push(photoId);
        localStorage.setItem('photos', JSON.stringify(favouriteArray));
      }
      /* storage exists - save */
      if (storedPhotos) {
        const parsedStoredPhotos = JSON.parse(storedPhotos);
        favouriteArray = [...parsedStoredPhotos];
        favouriteArray.push(photoId);
        localStorage.setItem('photos', JSON.stringify(favouriteArray));
      }
    }
    /* if there are favourites - delete */
    if (isBookmarked) {
      const parsedStoredPhotos = JSON.parse(storedPhotos);
      favouriteArray = [...parsedStoredPhotos];
      const filteredStorage = favouriteArray.filter((p) => p !== photoId);
      localStorage.setItem('photos', JSON.stringify(filteredStorage));
    }
  };

  const onClickHandler = () => {
    imageModalHandler();
    imageOpenHandler({
      roverName,
      roverId,
      cameraName,
      earthDate,
      imgSrc,
      photoId,
    });
  };

  useEffect(() => {
    const storedPhotos = localStorage.getItem('photos');
    const parsedStoredPhotos = JSON.parse(storedPhotos);
    if (parsedStoredPhotos?.includes(photoId)) setIsBookmarked(true);
  }, [photoId]);

  return (
    <div className="w-full max-w-full sm:max-w-[50%] md:max-w-[calc(100%_/_3_-_36px)] xl:max-w-[calc(20%_-_36px)] min-h-[350px] aspect-square flex flex-col justify-end rounded-md p-4 text-white font-semibold relative group overflow-hidden cursor-pointer transition-all ease-in-out ">
      <Icon
        component={isBookmarked ? StarIcon : StarBorderIcon}
        sx={starClasses}
        onClick={setFavouriteHandler}
      />
      <div onClick={onClickHandler} className="">
        <div className="img-background w-full h-full absolute top-0 left-0 blur-sm"></div>
        <img
          src={imgSrc}
          alt={roverName + ' ' + cameraName}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full group-hover:scale-150 transition-all ease-in-out duration-500 brightness-50 group-hover:brightness-75"
        />
        <div className="relative z-10 ">
          <h3>{roverName}</h3>
          <p>Camera: {cameraName} </p>
          <p>Date: {earthDate}</p>
        </div>
      </div>
    </div>
  );
}

CardHover.propTypes = {
  roverName: PropTypes.string,
  roverId: PropTypes.number,
  cameraName: PropTypes.string,
  earthDate: PropTypes.string,
  imgSrc: PropTypes.string,
  photoId: PropTypes.number,
};

export default CardHover;
