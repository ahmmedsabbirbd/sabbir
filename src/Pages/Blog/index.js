import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import useWorked from "./useWorked";

const Blogs = ()=> { 
    const { loading, error, worked } = useWorked(); 

    return (
        <section className='blog'> 
            <Container >
                <Row >
                    <Col>
                        <h1>It's upcoming page</h1> 
                        {worked.length > 0 && worked.map((work, index)=> (
                            <div key={index}> 
                                <h2>{work.title}</h2>
                                <p>{work.description}</p>
                                <p>Published Date : {work.publish_date}</p>
                            </div>
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