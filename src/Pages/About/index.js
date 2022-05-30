import Skill from "./Skill";
import sabbir from "../../Assets/Images/sabbir.jpg";
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

        <Skill />
    </>)
}

export default About;