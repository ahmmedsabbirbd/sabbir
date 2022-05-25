import { useState, useRef, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; 
import useWorked from "./useWorked";
import { useAuth } from '../../Contexts/AuthorContext';
import { getDatabase, ref, set } from "firebase/database";
import { uid } from "uid";
import { getAuth } from "firebase/auth";
import JoditEditor from "jodit-react";

const AddWorked = ()=> { 
    const [ addWorkedShow, setAddWorkedShow ] = useState(false);
    const [ title, setTitle ] = useState('');   
    const [ image, setImage ] = useState('');   
	const [content, setContent] = useState('') 
    const auth = getAuth();
    
    const { currentUser } = useAuth(); 
    const { loading, error, worked } = useWorked(); 

    const writeToWorkedAdd = (e)=> {
        e.preventDefault();
        const db = getDatabase();
        const uidd = uid();

        set(ref(db, `worked/${uidd}`), {
            uid : uidd,
            title : title,
            image: image,
            content: content, 
        });

        setAddWorkedShow(!addWorkedShow);
    } 

    return (<>
    { ( auth.lastNotifiedUid == 'jZGXrap732aDZLOBoG2SyjOzK252' ) && !addWorkedShow && <button onClick={()=> setAddWorkedShow(!addWorkedShow)}>Add Worked</button>}
    {addWorkedShow && <>
        <form onSubmit={writeToWorkedAdd}>
            <input type="text" required placeholder="Worked title" onChange={(e) => setTitle(e.target.value)} />  
            <input type="text" placeholder="Futured Image link" onChange={(e) => setImage(e.target.value)} />  
            <JoditEditor tabIndex={1} onBlur={newContent => setContent(newContent)} />  

            {error && <p>{error}</p>}
            <button disabled={loading} type='submit'>Add Worked</button>
            <button onClick={()=> setAddWorkedShow(false) }>Cancel</button>
        </form> 
    </>}
    </>)
}

export default AddWorked;