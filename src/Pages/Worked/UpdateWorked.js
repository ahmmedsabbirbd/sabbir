import { useState, useRef, useMemo } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; 
import useWorked from "./useWorked";
import { useAuth } from '../../Contexts/AuthorContext';
import { getDatabase, ref, set, update } from "firebase/database";
import { uid } from "uid";
import { getAuth } from "firebase/auth";
import JoditEditor from "jodit-react";

const UpdateWorked = (props)=> { 
    const { work } = props;
    const [ loading, setLoading ] = useState(false);
    const [ image, setImage ] = useState(work.image);   
    const [ error, setError ] = useState(false);
    const [ updateWorkedShow, setUpdateWorkedShow ] = useState(false)
    const [ title, setTitle ] = useState(work.title)
    const [ publishDate, setPublishDate ] = useState('');  
	const [content, setContent] = useState(work.content) 
    const [ tempUid, setTempUid ] = useState("")  
    const auth = getAuth();
    
    const { currentUser } = useAuth();  

    const handleUpdate = (work) => {
        setLoading(false);
        setUpdateWorkedShow(!updateWorkedShow) 
        setTempUid(work.uid); 
    }

    const writeToWorkedUpdate = (e)=> {
        e.preventDefault();
        const db = getDatabase() 

        update(ref(db, `worked/${tempUid}`), {
            uid : tempUid,
            title : title,
            image: image,
            content: content, 
        }); 

        setUpdateWorkedShow(!updateWorkedShow);
        setLoading(true);
    } 


    return (<>
    { ( auth.lastNotifiedUid == 'jZGXrap732aDZLOBoG2SyjOzK252' ) && !updateWorkedShow && <button onClick={()=> handleUpdate(work) }>Update Worked</button>}
    {updateWorkedShow && <>
        <form onSubmit={writeToWorkedUpdate}>
            <input type="text" value={title} required placeholder="Worked title" onChange={(e) => setTitle(e.target.value)} /> 
            <input type="text" value={image} placeholder="Futured Image link" onChange={(e) => setImage(e.target.value)} />  
            <JoditEditor value={content} tabIndex={1} onBlur={newContent => setContent(newContent)} />  

            {error && <p>{error}</p>}
            <button disabled={loading} type='submit'>Update</button>
            <button onClick={()=> setUpdateWorkedShow(false) }>Cancel</button>
        </form> 
    </>}
    </>) 
}

export default UpdateWorked;