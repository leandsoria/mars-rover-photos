import { Icon } from '@mui/material';
import { useRoverContext } from '../../context/rover-context';
import CancelIcon from '@mui/icons-material/Cancel';
import ImageModalText from './ImageModalText';

function ImageModalContent() {
  const { isImageModalOpen, imageModalHandler, imageOpened } =
    useRoverContext();
  return (
    <>
      <Icon
        component={CancelIcon}
        className={`absolute z-10 text-white top-12 right-12 cursor-pointer hidden`}
        sx={[
          !isImageModalOpen && {
            fontSize: 0,
          },
        ]}
        onClick={imageModalHandler}
      />
      <img
        src={imageOpened.imgSrc}
        alt={imageOpened.roverName + ' ' + imageOpened.cameraName}
        className={`w-auto h-full max-h-[75%]  group-hover:scale-150 transition-all ease-in-out duration-500 brightness-50 group-hover:brightness-75 ${
          isImageModalOpen ? 'blur-none' : 'blur-lg'
        }`}
      />
      <ImageModalText />
    </>
  );
}

export default ImageModalContent;
