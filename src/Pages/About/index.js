import Skill from "./Skill";
import { Button, Col, Container, Image, Row } from "react-bootstrap"; 
import { getAuth } from "firebase/auth";
import { getDatabase, onValue, query, ref, set } from "firebase/database";
import { useEffect, useState } from "react";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion.js";

const About = ()=> {
    const auth = getAuth();
    const db = getDatabase();
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ aboutTitle, setAboutTitle ] = useState(""); 
    const [ aboutContent, setAboutContent ] = useState(""); 
    const [ aboutImg, setAboutImg ] = useState(""); 
    const [ addAboutShow, setAddAboutShow ] = useState(false);

    useEffect(() => {  
        //Update Content
        try {
            onValue(query( ref(db, `/About`) ), snapshot => { 
                const data = snapshot.val();  
                setAboutImg(data.img);
                setAboutTitle(data.title);
                setAboutContent(data.content);
                setLoading(false); 
            });
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Some Problem"); 
        }
    }, [ db ]);

    const writeToAbout = (e)=> {
        e.preventDefault();
        setLoading(true);
        setError(false); 
        
        try {
            const db = getDatabase();

            set(ref(db, `About/`), { 
                title : aboutTitle,
                content: aboutContent, 
                img: aboutImg,
            }); 

            setAddAboutShow(false);
            setLoading(false);
        } catch (err) {
            console.log(err); 
            setLoading(false);
            setError("About not updated");
        }

        setAddAboutShow(!addAboutShow);
    }

    addAboutShow ? document.body.classList.add("fake-overly-1") : document.body.classList.remove("fake-overly-1");

    return (<>
        <motion.section className="about pb-0"
            intial= {
                {width: 0} 
            }
            animate= {
                {width: "100%"} 
            }
            exit= { 
                {x: window.innerWidth, transition: { duration: 0.3 }} 
            } 
        > 
            <Container >
                <Row className="align-items-center">
                    <Col md='6'>
                        <div className="about__content">
                            { loading ? <div className="skeleton title"></div> : <h1 className="title">{ aboutTitle }</h1>} 
                            { loading ? <div className="skeleton a-content"></div> : <div dangerouslySetInnerHTML={ {__html: aboutContent} } ></div>}

                            { ( auth.lastNotifiedUid === "jZGXrap732aDZLOBoG2SyjOzK252" ) && !addAboutShow && (
                                loading ? <div className="skeleton a-btn btn"></div> : <Button onClick={()=> setAddAboutShow(!addAboutShow) } variant="" >Update Content</Button> 
                            )}
                            
                            {addAboutShow && <>
                                <form className="update-content" onSubmit={writeToAbout}>
                                    <input type="text" value={ aboutTitle } onChange={(e) => setAboutTitle(e.target.value)} />  
                                    <textarea type="text" value={ aboutContent } onChange={(e) => setAboutContent(e.target.value)} />  
                                    <input type="text" value={ aboutImg } onChange={(e) => setAboutImg(e.target.value)} />  

                                    {error && <p className="errror">{error}</p>}
                                    <div className="btn-group">
                                        <Button disabled={ loading } type="submit" variant="" >Update Content</Button> 
                                        <Button onClick={()=> setAddAboutShow(false) } variant="" >Cancel</Button>
                                    </div>
                                </form> 
                            </>}
                        </div>
                    </Col>

                    <Col md='6'>
                        { loading ? <div className="skeleton about__media"></div> :  <div className="about__media">
                                <Image src={ aboutImg } alt={ aboutTitle } fluid/>
                            </div> 
                        }
                    </Col>
                </Row>
            </Container>  
        </motion.section>

        <Skill />
    </>)
}

export default About;