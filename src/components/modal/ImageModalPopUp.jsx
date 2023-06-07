import { useRoverContext } from '../../context/rover-context';
import Backdrop from '../../ui/Backdrop';
import ModalPopupBox from '../../ui/ModalPopup/ModalPopupBox';
import ImageModalContent from './ImageModalContent';

function ImageModalPopUp() {
  const { isImageModalOpen, imageModalHandler } = useRoverContext();
  return (
    <ModalPopupBox isOpen={isImageModalOpen}>
      <Backdrop onClick={imageModalHandler} />
      <ImageModalContent />
    </ModalPopupBox>
  );
}

export default ImageModalPopUp;
