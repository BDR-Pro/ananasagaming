// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react';

const useDataFetcher = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await fetch(url);
                const result = await res.json();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url])

    return { data, loading, error }
};

export default useDataFetcher;