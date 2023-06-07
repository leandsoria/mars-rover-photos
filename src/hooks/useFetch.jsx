import { useEffect, useState } from 'react';
import { useRoverContext } from '../context/rover-context';
import useUrlHandler from './useUrlHandler';

export function useFetch(rover) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { setIsLoaded, dateType, earthDate, solDate } = useRoverContext();
  const URL = useUrlHandler(rover);
  useEffect(() => {
    setIsLoading(true);
    setIsLoaded(false);

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoaded(true);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [rover, setIsLoaded, dateType, earthDate, solDate]);
  return { data, error, isLoading };
}
