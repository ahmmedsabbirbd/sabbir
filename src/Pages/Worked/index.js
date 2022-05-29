import AddWorked from "./AddWorked";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react"; 
import { Container, Row, Col, Button, Image } from "react-bootstrap";  
import { getDatabase, ref, onValue, remove, query } from "firebase/database";

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
                
                if( data !== null) {
                    Object.values(data).map(work => setWorked(oldArray => [...oldArray, work]) );
                }
            });
            setLoading(false);
        } catch (err) {
            console.log(err); 
            setLoading(true);
            setError("Some Problem"); 
        }

    }, [ db ]);  

    const Searchworked = worked.filter(work => {  
        return Object.keys(work).some(key => work[key].toString().toLowerCase().includes(searchText.toString().toLowerCase()));
    });
        
    const handleDelete = (uid) => {
        remove(ref(db, `/worked/${uid}`)); 
    }

    return (
        <section className="blog"> 
            <Container >
                <Row >
                    <Col> 
                        <AddWorked />
                        <input type="text" placeholder="Search Worked" onChange={(e)=> setSearchText(e.target.value)} />
                        
                        {Searchworked.length > 0 && Searchworked.map((work, index)=> (<div key={ index }>
                            <Link to={ work.title } state={ work } >

                            {work.image &&
                                <div className="media">
                                    <Image src={ work.image } alt={ work.title } fluid />
                                </div>
                            }
                                <h2>{work.title}</h2>  
                            </Link>
                            { ( auth.lastNotifiedUid === "jZGXrap732aDZLOBoG2SyjOzK252" ) && <> 
                            <Button variant="" onClick={ ()=> handleDelete(work.uid) } >Delete</Button> 
                            </>}</div>
                        ))}  

                        {!loading && Searchworked.length === 0 && <div>Data not found</div> }
                        {error && error }
                    </Col> 
                </Row>
            </Container>  
        </section>
    )
}

export default Blogs;