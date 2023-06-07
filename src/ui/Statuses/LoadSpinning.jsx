import { CircularProgress } from '@mui/material';

function LoadSpinning() {
  return (
    <div className="flex flex-col justify-center items-center gap-12 text-center">
      <h3 className="uppercase">Fetching Rover from Mars</h3>
      <CircularProgress />
    </div>
  );
}

export default LoadSpinning;
