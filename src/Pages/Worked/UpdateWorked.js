import { useEffect, useState } from "react";
import JoditEditor from "jodit-react";
import { Button } from "react-bootstrap";  
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref, update } from "firebase/database"; 

const UpdateWorked = (props)=> { 
    const auth = getAuth(); 
    const { work } = props;
    const navigate = useNavigate();
    const [ error, setError ] = useState(false);
    const [ tempUid, setTempUid ] = useState("");
    const [ loading, setLoading ] = useState(false);
    const [ title, setTitle ] = useState(work.title);
    const [ image, setImage ] = useState(work.image);   
	const [content, setContent] = useState(work.content); 
    const [ updateWorkedShow, setUpdateWorkedShow ] = useState(false);

    useEffect(()=> {
        setTitle(work.title);
        setImage(work.image);
        setContent(work.content);
    }, [work])

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

            navigate(`/worked/${tempUid}`); 
        } catch (err) {
            console.log(err);
            setLoading(true);
            setError("Your Worked not update");
        }

        setUpdateWorkedShow(!updateWorkedShow);
    }

    updateWorkedShow ? document.body.classList.add("fake-overly") : document.body.classList.remove("fake-overly");

    return (<>
        { ( auth.lastNotifiedUid === "jZGXrap732aDZLOBoG2SyjOzK252" ) && !updateWorkedShow && <Button onClick={()=> handleUpdate(work) } variant="update" >Update Worked</Button>}
        {updateWorkedShow && <>
            <form className="upadte-worked" onSubmit={writeToWorkedUpdate}>
                <input type="text" value={title} required placeholder="Worked title" onChange={(e) => setTitle(e.target.value)} /> 
                <input type="text" value={image} placeholder="Futured Image link" onChange={(e) => setImage(e.target.value)} />  
                <JoditEditor value={content} tabIndex={1} onBlur={newContent => setContent(newContent)} />  

                {error && <p className="error">{error}</p>}
                <div className="btn-group">
                    <Button disabled={loading} type="submit" variant="">Update</Button>
                    <Button onClick={()=> setUpdateWorkedShow(false) } variant="" >Cancel</Button>
                </div>
            </form> 
        </>}
    </>)
}

export default UpdateWorked;