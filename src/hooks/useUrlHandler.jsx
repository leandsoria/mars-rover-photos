import { useRoverContext } from '../context/rover-context';

const useUrlHandler = (rover) => {
  const { dateType, earthDate, solDate } = useRoverContext();

  function earthDateHandler() {
    if (!earthDate) return '';
    const earthDateQueryParameter = `&earth_date=${earthDate}`;
    return earthDateQueryParameter;
  }

  function solDateHandler() {
    if (dateType === 'sol' && !solDate) return `sol=1000`;
    if (dateType === 'sol' && solDate) return `sol=${solDate}`;
  }

  function dateTypeHandler() {
    if (dateType === 'sol') return solDateHandler();
    if (dateType === 'earth') return earthDateHandler();
  }
  const dateTypeResult = dateTypeHandler();
  let key = '';
  if (import.meta.env.VITE_VERCEL_NASA_API_KEY) {
    key = import.meta.env.VITE_VERCEL_NASA_API_KEY;
  } else {
    // eslint-disable-next-line no-undef
    key = process.env.VITE_VERCEL_NASA_API_KEY;
  }

  // import.meta.env.VITE_VERCEL_NASA_URL +
  const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?${dateTypeResult}${key}`;
  return URL;
};

export default useUrlHandler;
