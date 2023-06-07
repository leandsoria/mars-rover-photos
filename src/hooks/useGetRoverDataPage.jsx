import { useState, useEffect } from 'react';
import { useRoverContext } from '../context/rover-context';
import { useFetch } from './useFetch';
import { useGetLocalStorage } from './useLocalStorage';

const pageSize = 25;

/* EXPORTED FUNCTION */
export function useGetRoverDataPage() {
  const [allRoverImagesArray, setAllRoverImagesArray] = useState(null);
  const [slicedRoverImagesArray, setSlicedRoverImagesArray] = useState(null);

  const [filteredAllRoverImagesArray, setFilteredAllRoverImagesArray] =
    useState(null);
  const [
    slicedFilteredAllRoverImagesArray,
    setSlicedFilteredAllRoverImagesArray,
  ] = useState(null);

  const [bookmarkedRoverImagesArray, setBookmarkedRoverImagesArray] =
    useState(null);
  const [
    slicedBookmarkedRoverImagesArray,
    setSlicedBookmarkedRoverImagesArray,
  ] = useState(null);
  const [
    filteredBookmarkedRoverImagesArray,
    setFilteredBookmarkedAllRoverImagesArray,
  ] = useState(null);
  const [isCameraFilterActive, setIsCameraFilterActive] = useState(false);

  const {
    rover,
    cameraSelected,
    showBookmarkedPhotos,
    roverCameras,
    dateType,
  } = useRoverContext();
  const { data, isLoading, error } = useFetch(rover);
  const bookmarkedPhotosStorageArray = useGetLocalStorage();

  /* PAGINATION STATES */
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [fromItem, setFromItem] = useState(0);
  const [toItem, setToItem] = useState(pageSize);

  /* Get Array of Images */
  useEffect(() => {
    setAllRoverImagesArray(data?.photos);
  }, [data]);

  /* Start Pagination */
  /* Set Count */
  useEffect(() => {
    let perPage;
    if (!allRoverImagesArray) return;
    if (!isCameraFilterActive) {
      perPage = Math.ceil(allRoverImagesArray?.length / pageSize);
    }
    if (isCameraFilterActive) {
      perPage = Math.ceil(filteredAllRoverImagesArray?.length / pageSize);
    }
    if (showBookmarkedPhotos) {
      perPage = Math.ceil(bookmarkedRoverImagesArray?.length / pageSize);
    }
    setCount(perPage);
  }, [
    allRoverImagesArray,
    isCameraFilterActive,
    showBookmarkedPhotos,
    filteredAllRoverImagesArray,
    bookmarkedRoverImagesArray,
  ]);

  /* UPDATE CURRENT PAGE TO 1 */
  useEffect(() => {
    setCurrentPage(1);
  }, [dateType, showBookmarkedPhotos, rover, cameraSelected]);

  /* create first slices */
  useEffect(() => {
    if (!allRoverImagesArray) return;
    const slicedArray = allRoverImagesArray.slice(fromItem, toItem);
    setSlicedRoverImagesArray(slicedArray);
  }, [data, allRoverImagesArray]);

  /* update from and to  */
  useEffect(() => {
    setFromItem((currentPage - 1) * pageSize);
    setToItem((currentPage - 1) * pageSize + pageSize);
  }, [currentPage]);

  /* update slices */
  useEffect(() => {
    if (!isCameraFilterActive && !showBookmarkedPhotos) {
      const slicedArray = allRoverImagesArray?.slice(fromItem, toItem);
      setSlicedRoverImagesArray(slicedArray);
    }
    if (isCameraFilterActive && !showBookmarkedPhotos) {
      const slicedArray = filteredAllRoverImagesArray?.slice(fromItem, toItem);
      setSlicedFilteredAllRoverImagesArray(slicedArray);
    }
    if (isCameraFilterActive && showBookmarkedPhotos) {
      const slicedArray = filteredBookmarkedRoverImagesArray?.slice(
        fromItem,
        toItem
      );

      setSlicedBookmarkedRoverImagesArray(slicedArray);
    }
    if (!isCameraFilterActive && showBookmarkedPhotos) {
      const slicedArray = bookmarkedRoverImagesArray?.slice(fromItem, toItem);
      setSlicedBookmarkedRoverImagesArray(slicedArray);
    }
  }, [
    fromItem,
    toItem,
    isCameraFilterActive,
    filteredAllRoverImagesArray,
    allRoverImagesArray,
    showBookmarkedPhotos,
    rover,
    bookmarkedRoverImagesArray,
    filteredBookmarkedRoverImagesArray,
  ]);

  /* update images based on FILTERS*/
  useEffect(() => {
    let cameraFilter = [];
    for (const keys in cameraSelected) {
      if (cameraSelected[keys]) cameraFilter.push(keys);
    }
    if (cameraFilter.length !== roverCameras[rover].cameras.length) {
      setIsCameraFilterActive(true);

      const temporalArray = allRoverImagesArray?.filter((imgs) =>
        cameraFilter.includes(imgs.camera.name)
      );

      setFilteredAllRoverImagesArray(temporalArray);
    }
    if (cameraFilter.length === roverCameras[rover].cameras.length) {
      setIsCameraFilterActive(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cameraSelected, currentPage, rover, allRoverImagesArray, dateType]);

  /* SHOW BOOKMARKED IMAGES */
  useEffect(() => {
    if (showBookmarkedPhotos && allRoverImagesArray) {
      const temporalArray = allRoverImagesArray?.filter((imgs) =>
        bookmarkedPhotosStorageArray?.includes(imgs.id)
      );
      setBookmarkedRoverImagesArray(temporalArray);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showBookmarkedPhotos, allRoverImagesArray, bookmarkedPhotosStorageArray]);

  /* SHOW BOOKMARKED & FILTERED  IMAGES */
  useEffect(() => {
    let cameraFilter = [];
    for (const keys in cameraSelected) {
      if (cameraSelected[keys]) cameraFilter.push(keys);
    }
    if (cameraFilter.length !== roverCameras[rover].cameras.length) {
      setIsCameraFilterActive(true);
      const temporalArray = bookmarkedRoverImagesArray?.filter((imgs) =>
        cameraFilter.includes(imgs.camera.name)
      );

      setFilteredBookmarkedAllRoverImagesArray(temporalArray);
    }
    if (cameraFilter.length === roverCameras[rover].cameras.length) {
      setIsCameraFilterActive(false);
    }
  }, [
    cameraSelected,
    currentPage,
    showBookmarkedPhotos,
    bookmarkedRoverImagesArray,
    dateType,
    rover,
    roverCameras,
  ]);

  return {
    isLoading,
    error,
    showBookmarkedPhotos,
    allRoverImagesArray,
    count,
    currentPage,
    setCurrentPage,
    slicedRoverImagesArray,
    slicedFilteredAllRoverImagesArray,
    filteredAllRoverImagesArray,
    isCameraFilterActive,
    slicedBookmarkedRoverImagesArray,
  };
}
