import { useRoverContext } from '../../context/rover-context';

function NoBookmarkedImgs() {
  const { rover } = useRoverContext();
  return (
    <h3 className="text-center">
      There no Images bookmarked for {rover} rover or the current Date <br />
      Try another Rover or Date
    </h3>
  );
}

export default NoBookmarkedImgs;
