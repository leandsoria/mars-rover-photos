import { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Icon } from '@mui/material';
import { useRoverContext } from '../context/rover-context';
import LoadSpinning from '../ui/Statuses/LoadSpinning';
import InfoIcon from '@mui/icons-material/Info';
import ModalPopupBox from '../ui/ModalPopup/ModalPopupBox';
import Backdrop from '../ui/Backdrop';

const camerasName = [
  { shortName: 'FHAZ', longName: 'Front Hazard Avoidance Camera' },
  { shortName: 'RHAZ', longName: 'Rear Hazard Avoidance Camera' },
  { shortName: 'MAST', longName: 'Mast Camera' },
  { shortName: 'CHEMCAM', longName: 'Chemistry and Camera Complex' },
  { shortName: 'MAHLI', longName: 'Mars Hand Lens Imager' },
  { shortName: 'MARDI', longName: 'Mars Descent Imager' },
  { shortName: 'NAVCAM', longName: 'Navigation Camera' },
  { shortName: 'PANCAM', longName: 'Panoramic Camera' },
];

function CamerasFilter() {
  const [cameras, setCameras] = useState(null);
  const [firstLoad, setFirstLoad] = useState(false);
  const [checkedCamera, setCheckedCamera] = useState([true, false]);
  const { rover, roverCameras, isLoaded, cameraFilterSelectedHandler } =
    useRoverContext();
  const [isOpenInfoModal, setIsOpenInfoModal] = useState(false);

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

  const openInfoModalHandler = () => {
    setIsOpenInfoModal(!isOpenInfoModal);
  };

  return (
    <>
      {!isLoaded && !firstLoad && <LoadSpinning />}
      {firstLoad && cameras && (
        <div className="flex flex-col items-center justify-between h-full gap-y-4">
          <h2>
            Rover Cameras{' '}
            <Icon
              component={InfoIcon}
              onClick={openInfoModalHandler}
              className="cursor-pointer active:scale-95"
            />
          </h2>
          <ModalPopupBox isOpen={isOpenInfoModal}>
            <>
              <Backdrop onClick={openInfoModalHandler} />
              <div
                className={`bg-[rgba(0,0,0,.75)] p-8 rounded-md ${
                  isOpenInfoModal ? 'z-30' : ''
                }`}
              >
                <h2 className="text-center mb-4">Rover Cameras</h2>
                <ul>
                  {camerasName.map((cam) => {
                    return (
                      <li key={cam.shortName}>
                        <p className="my-1">
                          <span className="font-bold">{cam.shortName}</span>:{' '}
                          {cam.longName}
                        </p>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          </ModalPopupBox>

          <FormGroup onClick={checkHandler}>
            <div className="flex flex-row flex-wrap gap-x-4 gap-y-2 items-center justify-center max-w-[520px]">
              {cameras?.map((cam) => (
                <FormControlLabel
                  key={cam}
                  control={<Checkbox defaultChecked />}
                  label={cam}
                  name={cam}
                  sx={{
                    '&': {
                      marginRight: 4,
                    },
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
