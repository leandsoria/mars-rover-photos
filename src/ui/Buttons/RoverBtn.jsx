import PropTypes from 'prop-types';
import { useRoverContext } from '../../context/rover-context';

function RoverBtn({ text }) {
  const { setRoverHandler, rover } = useRoverContext();

  const btnHandler = () => {
    setRoverHandler(text);
  };

  return (
    <button
      onClick={btnHandler}
      className={`border rounded-md px-8 py-4 uppercase font-semibold  transition ease-in-out duration-300 active:scale-95  ${
        text.toLowerCase() === rover
          ? ' text-white bg-[#2a2a2a] border border-[#646cff]'
          : ''
      }`}
    >
      {text}
    </button>
  );
}
RoverBtn.propTypes = {
  text: PropTypes.string,
};

export default RoverBtn;
