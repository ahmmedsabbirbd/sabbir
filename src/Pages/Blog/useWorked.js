import { getDatabase, query, ref, get, orderByKey } from "firebase/database";
import  { useEffect, useState } from "react";

const useWorked = ()=> {
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const [ worked, setWorked ] = useState([]); 
    
    useEffect(()=> {
        let isLoadedinOnetime = false;
        
        const fetchWorked = async ()=> {
            const db = getDatabase();
            const workedRef = ref(db, 'worked');

            const workedQuery = query(
                workedRef,
                orderByKey() 
            );

            try {
                setError(false);
                setLoading(true);
                //request firebase database
                const snapshot = await get(workedQuery);
                setLoading(false);
                
                if (!isLoadedinOnetime) {
                    if(snapshot.exists()) { 
                        setWorked(prevWorked=> {
                            return [ ...prevWorked, ...Object.values(snapshot.val()) ]
                        });
                    } else {
                        // 
                    } 
                } 

            } catch (err) {
                console.log(err);
                setLoading(false);
                setError(true);
            }
        }

        fetchWorked();

        return ()=> {
            isLoadedinOnetime = true;
        }
    }, []);

    return {
        error,
        loading,
        worked
    };
}

export default useWorked;