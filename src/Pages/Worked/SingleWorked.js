import Skeleton from "../../Skeleton";
import UpdateWorked from "./UpdateWorked";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"; 
import { getDatabase, onValue, query, ref } from "firebase/database"; 
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion.js";

const SingleWorked = ()=> { 
    const navigate = useNavigate(); 
    const db = getDatabase();  
    const { uid } = useParams();    
    const [ loading, setLoading ] = useState(true);
    const [ singleWork, setSingleWork ]= useState("");

    useEffect(() => { 
        try {
            onValue(query( ref(db, `/worked/${uid}`) ), snapshot => {
                setSingleWork();
                
                const data = snapshot.val(); 
                setSingleWork(data); 
                setLoading(false);
            });
        } catch (err) {
            console.log(err); 
            setLoading(false);
        }

    }, [ db, uid ]);

    const { title, content, image } = singleWork;

    return (
        <motion.section 
            className="single-worked"
            
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
            <Container>
                <Row> 
                    <Col>
                        <UpdateWorked work={ singleWork } />
                        { loading ? <Skeleton type="fakeSingleWorkItem" /> : <article>
                            {image &&
                                <div className="fetured-media d-flex justify-content-center align-items-center">
                                    <Image src={ image } alt={ title } fluid />
                                </div>
                            }
                            <h1 className="title">{title}</h1> 
                            <div className="content-editor" dangerouslySetInnerHTML={ {__html: content} } ></div>
                            <Button variant="" onClick={ ()=> navigate('/worked')  } >Go Back</Button>
                        </article> }
                    </Col>
                </Row>
            </Container>
        </motion.section>
    )
}
export default SingleWorked;