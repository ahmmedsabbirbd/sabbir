import js from "../Assets/Images/js.png";
import css from "../Assets/Images/css.png";
import html from "../Assets/Images/html.png";
import sass from "../Assets/Images/sass.png";
import react from "../Assets/Images/react.png";
import jquery from "../Assets/Images/jquery.png";
import sabbir from "../Assets/Images/sabbir.jpg";
import tailwind from "../Assets/Images/tailwind.png"; 
import bootstrap from "../Assets/Images/bootstrap.png";
import { Col, Container, Image, ListGroup, Row } from "react-bootstrap";

const About = ()=> {
    return (<>
        <section className="about"> 
            <Container >
                <Row className="align-items-center">
                    <Col md='6'>
                        <div className="about__content">
                            <h1 className="title">About Me</h1>
                            <p>I'm Sabbir.And i'm front-end developer with 2 years of experience. My work is very passionate and dedicated to me. I have acquired enough skills for you to accomplish your work perfectly.</p>
                        </div>
                    </Col>
                    <Col md='6'>
                        <img src={ sabbir } alt="sabbir" className="img-fluid"/>
                    </Col>
                </Row>
            </Container>  
        </section>

        <section className="skill"> 
            <Container >
                <Row>
                    <Col>
                        <div className="skill__content">
                            <h2 className="title">My Skill</h2>
                            <p>With 2 years of experience, I have a thorough understanding of HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP,  REACT, TAILWIND CSS and SASS. I can design any type of website.</p>

                            <ListGroup as="ul" variant="skill__items" horizontal>
                                <ListGroup.Item as="li"><Image alt="html" src={ html } fluid /></ListGroup.Item>
                                <ListGroup.Item as="li"><Image alt="css" src={ css } fluid /></ListGroup.Item>
                                <ListGroup.Item as="li"><Image alt="js" src={ js } fluid /></ListGroup.Item>
                                <ListGroup.Item as="li"><Image alt="react" src={ react } fluid /></ListGroup.Item>
                                <ListGroup.Item as="li"><Image alt="jquery" src={ jquery } fluid /></ListGroup.Item>
                                <ListGroup.Item as="li"><Image alt="bootstrap" src={ bootstrap } fluid /></ListGroup.Item>
                                <ListGroup.Item as="li"><Image alt="tailwind" src={ tailwind } fluid /></ListGroup.Item>
                                <ListGroup.Item as="li"><Image alt="sass" src={ sass } fluid /></ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col> 
                </Row>
            </Container>  
        </section>
    </>)
}

export default About;