import React, { useEffect, useState } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useParams } from 'react-router-dom'; 

const SingleWorked = ()=> { 
    const { title } = useParams();
    // const [ data, setData ] = useState(''); // method 1
    const location = useLocation();
 
    // useEffect(()=> {
    //     const SingleData = BlogData.filter((data)=> data.title == title);
    //     setData(SingleData[0]);   
    // }, []) // method 1

    // const { id, description, category, image_1, publish_date} = data; // method 1
    const { image, content} = location.state; 

    return (
    <Container >
        <Row > 
            <Col >
                <article>
                    <img src={image} className='img-fluid' />
                    <h1>{title}</h1> 
                    <div className="content-editor" dangerouslySetInnerHTML={{__html: content}} ></div>
                    <Link to={'/worked'}>Go Back</Link>
                </article>
            </Col>
        </Row>
    </Container>
    )
}
export default SingleWorked;