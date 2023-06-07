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

  const URL =
    import.meta.env.VITE_NASA_URL +
    rover +
    '/photos?' +
    dateTypeResult +
    import.meta.env.VITE_NASA_API_KEY;
  return URL;
};

export default useUrlHandler;
