import { useState, useEffect } from 'react';
import { useRoverContext } from '../context/rover-context';

export function useGetRoverData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { rover } = useRoverContext();

  useEffect(() => {
    const URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}?api_key=lO8QlRx3SxEapxceG3XppCYqT44gJsB82K2ZSSIe`;
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
}
