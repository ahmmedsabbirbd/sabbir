import { uid } from "uid";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { getDatabase, ref, onValue, remove, query, set } from "firebase/database";

const Skill = ()=> {
    const auth = getAuth();
    const db = getDatabase();  
    const [ title, setTitle ] = useState("");   
    const [ image, setImage ] = useState("");  
    const [ error, setError ] = useState(false);    
    const [ loading, setLoading ] = useState(true);
    const [ skillImtem, setSkillImtem ] = useState([]); 
    const [ addSkillShow, setAddSkillShow ] = useState(false);
    const [ skillContentTitle, setSkillContentTitle ] = useState("");   
    const [ addSkillContenShow, setAddSkillContenShow ] = useState(false);
    const [ skillContentDescription, setSkillContentDescription ] = useState("");   

    useEffect(() => { 
        try {
            onValue(query( ref(db, `/skillItem`) ), snapshot => {
                setSkillImtem([]);
                
                const data = snapshot.val();
                
                if( data !== null) {
                    Object.values(data).map(work => setSkillImtem(oldArray => [...oldArray, work]) );
                }
            });
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError("Some Problem"); 
        }

        //Update Content
        try {
            onValue(query( ref(db, `/SkillContent`) ), snapshot => { 
                
                const data = snapshot.val(); 

                if( data !== null) {
                    setSkillContentTitle(data.title);
                    setSkillContentDescription(data.description);
                }
            });
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError("Some Problem"); 
        }

    }, [ db ]);
    
    const writeToSkillItemAdd = (e)=> {
        e.preventDefault();
        setLoading(true);
        setError(false); 
        
        try {
            const db = getDatabase();
            const uidd = uid();

            set(ref(db, `skillItem/${uidd}`), {
                uid : uidd,
                title : title,
                image: image,
            }); 

            setImage("");
            setTitle(""); 
        } catch (err) {
            console.log(err); 
            setLoading(false);
            setError("SkillItem not added");
        }

        setAddSkillShow(!addSkillShow);
    }

    const writeToSkillContentAdd = (e)=> {
        e.preventDefault();
        setLoading(true);
        setError(false); 
        
        try {
            const db = getDatabase();

            set(ref(db, `SkillContent/`), { 
                title : skillContentTitle,
                description: skillContentDescription,
            }); 

            setAddSkillContenShow(false);
            setLoading(false);
        } catch (err) {
            console.log(err); 
            setLoading(false);
            setError("SkillContent not updated");
        }

        setAddSkillContenShow(!addSkillContenShow);
    }
        
    const handleDelete = (uid) => {
        remove(ref(db, `/skillItem/${uid}`)); 
    }

    addSkillShow || addSkillContenShow ? document.body.classList.add("fake-overly") : document.body.classList.remove("fake-overly");

    return (
        <section className="skill"> 
            <Container >
                <Row>
                    <Col>
                        <div className="skill__content text-center">
                            <h2 className="title">{ skillContentTitle }</h2>
                            <p>{ skillContentDescription }</p>

                            { ( auth.lastNotifiedUid === "jZGXrap732aDZLOBoG2SyjOzK252" ) && !addSkillContenShow && <Button onClick={()=> setAddSkillContenShow(!addSkillContenShow) } variant="" >Update Content</Button> }

                            {addSkillContenShow && <>
                                <form className="update-content" onSubmit={writeToSkillContentAdd}>
                                    <input type="text" required placeholder="Update title" value={ skillContentTitle } onChange={(e) => setSkillContentTitle(e.target.value)} />  
                                    <textarea type="text" placeholder="Update Description" value={ skillContentDescription } onChange={(e) => setSkillContentDescription(e.target.value)} /> 

                                    {error && <p className="errror">{error}</p>}
                                    <div className="btn-group">
                                        <Button disabled={ loading } type="submit" variant="" >Update Content</Button> 
                                        <Button onClick={()=> setAddSkillContenShow(false) } variant="" >Cancel</Button>
                                    </div>
                                </form> 
                            </>}
                            
                            <ul className="list-inline skill__items">
                                {skillImtem.length > 0 && skillImtem.map((skill, index)=> (
                                    <li key={ index } className="d-inline-flex flex-column justify-content-center align-items-center"><Image alt="css" src={ skill.image } fluid />{ skill.title } { ( auth.lastNotifiedUid === "jZGXrap732aDZLOBoG2SyjOzK252" ) && <> 
                                    <Button variant="danger" onClick={ ()=> handleDelete(skill.uid) } >Delete</Button> 
                                    </>}</li>
                                ))}
                            </ul>

                            { ( auth.lastNotifiedUid === "jZGXrap732aDZLOBoG2SyjOzK252" ) && !addSkillShow && <Button onClick={()=> setAddSkillShow(!addSkillShow)} variant="" >Add Skill</Button> }

                            {addSkillShow && <>
                                <form className="add-skill" onSubmit={writeToSkillItemAdd}>
                                    <input type="text" required placeholder="Skill title" onChange={(e) => setTitle(e.target.value)} />  
                                    <input type="text" placeholder="Skill Image link" onChange={(e) => setImage(e.target.value)} /> 

                                    {error && <p className="error">{error}</p>}
                                    <div className="btn-group">
                                        <Button disabled={ loading } type="submit" variant="" >Add Skill</Button> 
                                        <Button onClick={()=> setAddSkillShow(false) } variant="" >Cancel</Button>
                                    </div>
                                </form> 
                            </>}
                        </div>
                    </Col> 
                </Row>
            </Container>  
        </section>
    )
}

export default Skill;