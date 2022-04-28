import { useState, useEffect } from 'react';

type Status = 'loading' | 'success' | 'failed';

function useDataFetcher<T>(fetchDataFunction: () => Promise<T>) {
  const [data, setData] = useState<T>();
  const [status, setStatus] = useState<Status>('loading');

  const fetchData = async () => {
    try {
      setStatus('loading');

      const res = await fetchDataFunction();
      setData(res);
      setStatus('success');
    } catch (error) {
      setStatus('failed');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, status, refrech: fetchData };
}

export { useDataFetcher };
