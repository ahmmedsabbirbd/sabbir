import { NavLink } from "react-router-dom"; 
import { Col, Container, Image, Row } from "react-bootstrap";
import BannerImage from "./../Assets/Images/home-main.svg";

const Home = ()=> { 
    return (
        <section className="banner"> 
            <Container>
                <Row className="align-items-center">
                    <Col md="8">
                        <div className="banner__content">
                            <h1 className="title">Wellcome To My Site.</h1> 
                            <p>I'm <span className="h5">Sabbir.</span> And i'm Font-End-Devoloper.</p>
                            <p>My work is always simple, fresh, and pixel-perfect.</p>
                            <NavLink to="/about" className="btn">Read More</NavLink>
                        </div>
                    </Col>

                    <Col md="4">
                        <div className="banner__media">
                            <Image src={ BannerImage } alt="Banner" fluid />
                        </div>
                    </Col>
                </Row>
            </Container> 
        </section>
    )
}

export default Home;