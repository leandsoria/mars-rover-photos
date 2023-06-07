import { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel, FormGroup } from '@mui/material';
import { useRoverContext } from '../context/rover-context';
import LoadSpinning from '../ui/Statuses/LoadSpinning';

function CamerasFilter() {
  const [cameras, setCameras] = useState(null);
  const [firstLoad, setFirstLoad] = useState(false);
  const [checkedCamera, setCheckedCamera] = useState([true, false]);
  const { rover, roverCameras, isLoaded, cameraFilterSelectedHandler } =
    useRoverContext();

  /* CREATE OBJECT FOR CAMERAS AND HAVE ALL CHECKBOXES CHECKED */
  useEffect(() => {
    if (isLoaded && rover) {
      /* once the API is done, avoid to reload camera filters */
      setFirstLoad(true);
      const { cameras } = roverCameras[rover];
      setCameras(cameras);
      const obj = Object.fromEntries(cameras.map((cam) => [cam, true]));
      setCheckedCamera(obj);
      cameraFilterSelectedHandler(obj);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rover, isLoaded]);

  /* FILTER HANDLER */
  const checkHandler = (e) => {
    setCheckedCamera({ ...checkedCamera, [e.target.name]: e.target.checked });
    cameraFilterSelectedHandler({
      ...checkedCamera,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <>
      {!isLoaded && !firstLoad && <LoadSpinning />}
      {firstLoad && cameras && (
        <div className="flex flex-col items-center justify-between h-full gap-y-4">
          <h2>Cameras: </h2>
          <FormGroup onClick={checkHandler}>
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 items-center justify-center max-w-[520px]">
              {cameras?.map((cam) => (
                <FormControlLabel
                  key={cam}
                  control={<Checkbox defaultChecked />}
                  label={cam}
                  name={cam}
                  sx={{
                    '&': { marginRight: 4 },
                    svg: {
                      fill: 'white',
                    },
                  }}
                />
              ))}
            </div>
          </FormGroup>
        </div>
      )}
    </>
  );
}

export default CamerasFilter;
