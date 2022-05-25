import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap"; 
// import useWorked from "./useWorked";
import { useAuth } from '../../Contexts/AuthorContext';
import AddWorked from "./AddWorked";
import { getDatabase, ref, set, onValue, remove, update, limitToFirst, query, orderByKey, startAt, get } from "firebase/database";
import { getAuth } from "firebase/auth";
import UpdateWorked from "./UpdateWorked";
import { Link } from "react-router-dom";

const Blogs = ()=> { 
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const { currentUser } = useAuth();
    const [ worked, setWorked ] = useState([]); 
    const [ tempUid, setTempUid ] = useState(""); 
    // const { loading, error, worked } = useWorked();
    const [ isEdit, setIsEdit ] = useState(false); 
    const auth = getAuth();
    const db = getDatabase();
    const [videos, setVideos] = useState([]);
    const [hasMore, setHasMore] = useState(true); 
 
    useEffect(() => { 
        onValue(query( ref(db, `/worked`) ), snapshot => {
            setWorked([]);

            const data = snapshot.val(); 

            if( data !== null) {
                Object.values(data).map(work => {
                    setWorked(oldArray => [...oldArray, work]);
                });
            }
        });  
        }, []); 
        
    const handleDelete = (uid) => {
        remove(ref(db, `/worked/${uid}`)); 
    }

    return (
        <section className='blog'> 
            <Container >
                <Row >
                    <Col> 
                    <AddWorked />
                        {worked.length > 0 && worked.map((work, index)=> (<div key={index}>
                            <Link to={work.title} state={work} >
                                <img src={work.image} className='img-fluid' />
                                <h2>{work.title}</h2>  
                            </Link>
                            { ( auth.lastNotifiedUid == 'jZGXrap732aDZLOBoG2SyjOzK252' ) && <> 
                            <button onClick={ ()=> handleDelete(work.uid) }>Delete</button>
                            <UpdateWorked work={work} />
                            </>}</div>
                        ))
                        }  

                        {!loading && worked.length === 0 && <div>Data not found</div>}
                        {error && <div>There was a error</div>}
                    </Col> 
                </Row>
            </Container>  
        </section>
    )
}

export default Blogs;