import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Animation = ()=> {
    return (
        <section className='animation'>
            <Container >
                <Row >
                    <Col lg='4' sm='6'>
                        <NavLink to='/animation/eid-mubarak'>
                            <h1>Eid Mubarak</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis adipisci nam temporibus saepe minima amet dolores optio laudantium qui?</p>
                        </NavLink>
                    </Col>  
                </Row>
            </Container>  
        </section>
    )
}

export default Animation;