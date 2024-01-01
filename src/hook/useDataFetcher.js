// Modify your useDataFetcher hook
import { useEffect, useState } from 'react';

const useDataFetcher = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchData = async (fetchUrl) => {
        try {
            const response = await fetch(fetchUrl);
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(url);
    }, [url]);

    return { data, error, loading, fetchData };
};

export default useDataFetcher;
