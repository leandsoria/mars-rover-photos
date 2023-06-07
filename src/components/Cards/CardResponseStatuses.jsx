/* eslint-disable react/prop-types */
import { useGetRoverDataPage } from '../../hooks/useGetRoverDataPage';
import ErrorMessage from '../../ui/Statuses/ErrorMessage';
import LoadSpinning from '../../ui/Statuses/LoadSpinning';
import NoBookmarkedImgs from '../../ui/Statuses/NoBookmarkedImgs';
import NoImages from '../../ui/Statuses/NoImages';

export function StatusMessage() {
  const {
    isLoading,
    error,
    slicedRoverImagesArray,
    showBookmarkedPhotos,
    slicedBookmarkedRoverImagesArray,
  } = useGetRoverDataPage();
  if (isLoading) return <LoadSpinning />;
  if (error) return <ErrorMessage />;
  if (
    !isLoading &&
    showBookmarkedPhotos &&
    slicedBookmarkedRoverImagesArray?.length === 0
  )
    return <NoBookmarkedImgs />;
  if (!isLoading && slicedRoverImagesArray?.length === 0) return <NoImages />;
}
