/* eslint-disable react/prop-types */
function ModalPopupBox({ children, isOpen }) {
  return (
    <div
      className={`fixed  flex flex-col justify-center items-center  transition-all duration-300 origin-center backdrop-blur-md ${
        isOpen
          ? 'w-screen h-screen top-0 left-0 opacity-100 z-20'
          : 'w-0 h-0 top-1/2 left-1/2 opacity-0 -z-10'
      }`}
    >
      {children}
    </div>
  );
}

export default ModalPopupBox;
