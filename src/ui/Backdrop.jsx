/* eslint-disable react/prop-types */
function Backdrop({ onClick }) {
  return (
    <div
      className="absolute bg-[rgba(0,0,0,.55)] w-full h-full cursor-pointer"
      onClick={onClick}
    ></div>
  );
}

export default Backdrop;
