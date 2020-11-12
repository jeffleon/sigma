import {useState, useEffect} from 'react';

/* fetch custome hook */
const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // do a fetch and look for a error or a data mainwhile the loading is true 
    useEffect(()=>{
        const fetchsource = async () =>{
            try{
                var cors = 'https://cors-anywhere.herokuapp.com/'
                var response = await fetch(cors + url); 
                const data = await response.json();
                setData(data);
                setLoading(false);
            }catch(error){
                setError(error);
                setLoading(false);     
            }
        }
        fetchsource()
    },[url])

    return {data, loading, error}
}

export default useFetch