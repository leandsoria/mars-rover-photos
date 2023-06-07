import { useRoverContext } from '../../context/rover-context';

function NoImages() {
  const { rover } = useRoverContext();
  return (
    <h3 className="text-center">
      There no Images for {rover} rover or the current Date <br />
      Try another Rover or Date
    </h3>
  );
}

export default NoImages;
