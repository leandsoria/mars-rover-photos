import { useState } from 'react';
import { useRoverContext } from '../../context/rover-context';

function BookmarkedBtn() {
  const [isSelected, setIsSelected] = useState(false);
  const { bookmarkedShowHandler } = useRoverContext();
  const btnHandler = () => {
    setIsSelected(!isSelected);
    bookmarkedShowHandler();
  };

  return (
    <button
      onClick={btnHandler}
      className={`border rounded-md px-8 py-4 uppercase font-semibold  transition ease-in-out duration-300 active:scale-95 ${
        isSelected ? 'text-white bg-[#2a2a2a] border border-[#646cff]' : ''
      }`}
    >
      My Photos
    </button>
  );
}

export default BookmarkedBtn;
