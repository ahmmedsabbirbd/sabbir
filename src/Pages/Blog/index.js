import { Container, Row, Col } from "react-bootstrap";
import './Bolg.Module.css';

const Blogs = ()=> {
    return (
        <section className='blog'> 
            <Container >
                <Row >
                    <Col>
                        <h1>It's upcoming page</h1>
                    </Col> 
                </Row>
            </Container>  
        </section>
    )
}

export default Blogs;