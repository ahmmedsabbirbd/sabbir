import { useState } from "react";
import JoditEditor from "jodit-react";
import { Button } from "react-bootstrap";  
import { getAuth } from "firebase/auth";
import { getDatabase, ref, update } from "firebase/database"; 
import { useNavigate } from "react-router-dom";

const UpdateWorked = (props)=> { 
    const auth = getAuth(); 
    const { work } = props;
    const navigate = useNavigate();
    const [ error, setError ] = useState(false);
    const [ tempUid, setTempUid ] = useState("")  
    const [ loading, setLoading ] = useState(false);
    const [ title, setTitle ] = useState(work.title)
    const [ image, setImage ] = useState(work.image);   
	const [content, setContent] = useState(work.content)   
    const [ updateWorkedShow, setUpdateWorkedShow ] = useState(false)

    const handleUpdate = (work) => {
        setLoading(false);
        setUpdateWorkedShow(!updateWorkedShow) 
        setTempUid(work.uid); 
    }

    const writeToWorkedUpdate = (e)=> {
        e.preventDefault();
        setError("");
        setLoading(true);
        
        try {
            const db = getDatabase();

            update(ref(db, `worked/${tempUid}`), {
                uid : tempUid,
                title : title,
                image: image,
                content: content, 
            });

            navigate("/worked/"); 
        } catch (err) {
            console.log(err);
            setLoading(true);
            setError("Your Worked not update");
        }

        setUpdateWorkedShow(!updateWorkedShow);
    } 

    return (<>
    { ( auth.lastNotifiedUid === "jZGXrap732aDZLOBoG2SyjOzK252" ) && !updateWorkedShow && <Button onClick={()=> handleUpdate(work) } variant="" >Update Worked</Button>}
    {updateWorkedShow && <>
        <form onSubmit={writeToWorkedUpdate}>
            <input type="text" value={title} required placeholder="Worked title" onChange={(e) => setTitle(e.target.value)} /> 
            <input type="text" value={image} placeholder="Futured Image link" onChange={(e) => setImage(e.target.value)} />  
            <JoditEditor value={content} tabIndex={1} onBlur={newContent => setContent(newContent)} />  

            {error && <p>{error}</p>}
            <Button disabled={loading} type="submit" variant="">Update</Button>
            <Button onClick={()=> setUpdateWorkedShow(false) } variant="" >Cancel</Button>
        </form> 
    </>}
    </>)
}

export default UpdateWorked;