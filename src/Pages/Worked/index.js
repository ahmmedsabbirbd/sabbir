import Skeleton from "../../Skeleton";
import AddWorked from "./AddWorked";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react"; 
import { Container, Row, Col, Button, Image } from "react-bootstrap";  
import { getDatabase, ref, onValue, remove, query } from "firebase/database";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion.js";

const Blogs = ()=> { 
    const auth = getAuth();
    const db = getDatabase();  
    const [ worked, setWorked ] = useState([]); 
    const [ error, setError ] = useState(false);    
    const [ loading, setLoading ] = useState(true);
    const [ searchText, setSearchText ] = useState(""); 

    useEffect(() => { 

        try {
            onValue(query( ref(db, `/worked`) ), snapshot => {
                setWorked([]);
                
                const data = snapshot.val();
                Object.values(data).map(work => setWorked(oldArray => [...oldArray, work]) );
                setLoading(false);
            });
        } catch (err) {
            console.log(err); 
            setLoading(true);
            setError("<p className='error'>Some Problem</p>"); 
        }

    }, [ db ]);  

    const Searchworked = worked.filter(work => {  
        return Object.keys(work).some(key => work[key].toString().toLowerCase().includes(searchText.toString().toLowerCase()));
    });
        
    const handleDelete = (uid) => {
        remove(ref(db, `/worked/${uid}`)); 
    }

    return (
        <motion.section 
            className="worked" 
            
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
                <Row>
                    <Col>
                        <div className="worked__top">
                            <div className="search-bar">
                                <input type="text" placeholder="Search Worked" onChange={(e)=> setSearchText(e.target.value)} />
                            </div>
                            <AddWorked />
                        </div>
                    </Col>
                </Row>

                <Row className="mb-30">
                    { loading ? <Skeleton type="fakeWorkItem" /> : ( Searchworked.length > 0 && Searchworked.map((work, index)=> (<Col md="6" key={ index }>
                        <article className="worked-post">
                            <Link  to={ work.uid } />
                            {work.image &&
                                <div className="media d-flex align-items-center justify-content-center">
                                    <Image src={ work.image } alt={ work.title } fluid />
                                </div>
                            }

                            <h4 className="title">{work.title}</h4>  
                            { ( auth.lastNotifiedUid === "jZGXrap732aDZLOBoG2SyjOzK252" ) && <> 
                            <Button variant="danger" onClick={ ()=> handleDelete(work.uid) } >Delete</Button> 
                            </>}
                        </article>

                        </Col>
                    )))}
                    
                    <Col>
                        {!loading && Searchworked.length === 0 && <div>Data not found</div> }
                        {error && error }
                    </Col> 
                </Row>
            </Container>  
        </motion.section>
    )
}

export default Blogs;