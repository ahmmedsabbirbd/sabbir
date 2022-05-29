import js from "../Assets/Images/js.png";
import css from "../Assets/Images/css.png";
import html from "../Assets/Images/html.png";
import sass from "../Assets/Images/sass.png";
import react from "../Assets/Images/react.png";
import jquery from "../Assets/Images/jquery.png";
import sabbir from "../Assets/Images/sabbir.jpg";
import tailwind from "../Assets/Images/tailwind.png"; 
import bootstrap from "../Assets/Images/bootstrap.png";
import { Col, Container, Image, Row } from "react-bootstrap";

const About = ()=> {
    return (<>
        <section className="about pb-0"> 
            <Container >
                <Row className="align-items-center">
                    <Col md='6'>
                        <div className="about__content">
                            <h1 className="title">About Me</h1>
                            <p>I'm Sabbir.And i'm front-end developer with 2 years of experience. My work is very passionate and dedicated to me. I have acquired enough skills for you to accomplish your work perfectly.</p>
                        </div>
                    </Col>

                    <Col md='6'>
                        <div className="about__media">
                            <Image src={ sabbir } alt="sabbir" fluid/>
                        </div> 
                    </Col>
                </Row>
            </Container>  
        </section>

        <section className="skill"> 
            <Container >
                <Row>
                    <Col>
                        <div className="skill__content text-center">
                            <h2 className="title">My Skill</h2>
                            <p>With 2 years of experience, I have a thorough understanding of HTML, CSS, JAVASCRIPT, JQUERY, BOOTSTRAP,  REACT, TAILWIND CSS and SASS. I can design any type of website.</p>

                            <ul className="list-inline skill__items">
                                <li className="d-inline-flex flex-column justify-content-center align-items-center"><Image alt="html" src={ html } fluid />HTML</li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center"><Image alt="css" src={ css } fluid />CSS</li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center"><Image alt="js" src={ js } fluid />JavaScript</li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center"><Image alt="react" src={ react } fluid />React</li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center"><Image alt="jquery" src={ jquery } fluid />JQuery</li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center"><Image alt="bootstrap" src={ bootstrap } fluid />Bootstrap</li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center"><Image alt="tailwind" src={ tailwind } fluid />Tailwind</li>
                                <li className="d-inline-flex flex-column justify-content-center align-items-center"><Image alt="sass" src={ sass } fluid />Sass</li>
                            </ul>
                        </div>
                    </Col> 
                </Row>
            </Container>  
        </section>
    </>)
}

export default About;