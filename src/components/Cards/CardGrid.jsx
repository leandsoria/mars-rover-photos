import { createPortal } from 'react-dom';
import ImageModalPopUp from '../modal/ImageModalPopUp';
import CardResponse from './CardResponse';
import GridPagination from './GridPagination';
import { useGetRoverDataPage } from '../../hooks/useGetRoverDataPage';
import CardHover from './CardHover';
import { useEffect } from 'react';

function CardGrid() {
  const MODAL_ID = document.getElementById('modal-image__popup');
  const {
    isLoading,
    showBookmarkedPhotos,
    isCameraFilterActive,
    slicedRoverImagesArray,
    slicedFilteredAllRoverImagesArray,
    slicedBookmarkedRoverImagesArray,
    currentPage,
    count,
    setCurrentPage,
  } = useGetRoverDataPage();
  const roverData = useGetRoverDataPage();
  /* PAGINATION HANDLER*/
  const pageHandler = (e, page) => {
    setCurrentPage(page);
  };
  console.log(roverData);

  useEffect(() => {}, [slicedRoverImagesArray]);
  return (
    <div className="flex flex-col py-8 w-full justify-center items-center">
      <GridPagination
        onClick={pageHandler}
        count={count || 0}
        page={currentPage}
      />
      <div className="flex flex-row flex-wrap justify-center gap-9 w-full">
        <CardResponse />
        {slicedRoverImagesArray &&
          !isLoading &&
          !isCameraFilterActive &&
          !showBookmarkedPhotos &&
          slicedRoverImagesArray.map((p) => (
            <CardHover
              key={p.id}
              photoId={p.id}
              roverName={p.rover.name}
              roverId={p.rover.id}
              cameraName={p.camera.full_name}
              earthDate={p.earth_date}
              imgSrc={p.img_src}
            />
          ))}
        {slicedFilteredAllRoverImagesArray &&
          !isLoading &&
          isCameraFilterActive &&
          !showBookmarkedPhotos &&
          slicedFilteredAllRoverImagesArray.map((p) => (
            <CardHover
              key={p.id}
              photoId={p.id}
              roverName={p.rover.name}
              roverId={p.rover.id}
              cameraName={p.camera.full_name}
              earthDate={p.earth_date}
              imgSrc={p.img_src}
            />
          ))}
        {slicedBookmarkedRoverImagesArray &&
          !isLoading &&
          showBookmarkedPhotos &&
          slicedBookmarkedRoverImagesArray.map((p) => (
            <CardHover
              key={p.id}
              photoId={p.id}
              roverName={p.rover.name}
              roverId={p.rover.id}
              cameraName={p.camera.full_name}
              earthDate={p.earth_date}
              imgSrc={p.img_src}
            />
          ))}
      </div>
      {createPortal(<ImageModalPopUp />, MODAL_ID)}
    </div>
  );

  /* RENDER BOOKMARKED IMAGES */
}

export default CardGrid;
