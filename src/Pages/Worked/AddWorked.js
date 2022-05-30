import { uid } from "uid";
import { useState } from "react";
import JoditEditor from "jodit-react";
import { getAuth } from "firebase/auth";
import { Button } from "react-bootstrap";  
import { getDatabase, ref, set } from "firebase/database";
import defalutImage from "../../Assets/Images/worked.png";

const AddWorked = ()=> { 
    const auth = getAuth();
    const [ title, setTitle ] = useState("");   
    const [ image, setImage ] = useState(defalutImage);
	const [content, setContent] = useState("") 
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    const [ addWorkedShow, setAddWorkedShow ] = useState(false);

    const writeToWorkedAdd = (e)=> {
        e.preventDefault();
        setLoading(true);
        setError(false); 
        
        try {
            const db = getDatabase();
            const uidd = uid();

            set(ref(db, `worked/${uidd}`), {
                uid : uidd,
                title : title,
                image: image,
                content: content, 
            });

            setLoading(false);
            setImage("");
            setTitle("");
            setContent("");
        } catch (err) {
            console.log(err); 
            setLoading(false);
            setError("worked not added");
        }

        setAddWorkedShow(!addWorkedShow);
    } 

    addWorkedShow ? document.body.classList.add("fake-overly") : document.body.classList.remove("fake-overly");

    return (<>
    { ( auth.lastNotifiedUid === "jZGXrap732aDZLOBoG2SyjOzK252" ) && !addWorkedShow && <Button onClick={()=> setAddWorkedShow(!addWorkedShow)} variant="" >Add Worked</Button> }
    
    {addWorkedShow && <>
        <form className="add-worked" onSubmit={writeToWorkedAdd}>
            <input type="text" required placeholder="Worked title" onChange={(e) => setTitle(e.target.value)} />  
            <input type="text" placeholder="Futured Image link" onChange={(e) => setImage(e.target.value)} />
            <JoditEditor tabIndex={1} onBlur={newContent => setContent(newContent)} />  

            {error && <p>{error}</p>}
            <div className="btn-group">
                <Button disabled={ loading } type="submit" variant="" >Add Worked</Button> 
                <Button onClick={()=> setAddWorkedShow(false) } variant="" >Cancel</Button>
            </div>
        </form> 
    </>}
    </>)
}

export default AddWorked;