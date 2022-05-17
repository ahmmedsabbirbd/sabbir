import { Col, Container, Row } from 'react-bootstrap';

const About = ()=> {
    return (
        <section className='about'> 
            <Container >
                <Row>
                    <Col>
                        <div className='about__content'>
                            <h1 className='title'>About Me</h1>
                            <p>I'm Sabbir.And i'm Font-End-Devoloper.</p>
                        </div>
                    </Col> 
                </Row>
            </Container>  
        </section>
    )
}

export default About;