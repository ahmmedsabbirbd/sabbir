import { Col, Container, Row } from 'react-bootstrap';
import BannerImage from './../Assets/Images/home-main.svg';
import { NavLink } from 'react-router-dom'; 

const Home = ()=> {
    return (
        <section className='banner'> 
            <Container >
                <Row className='align-items-center'>
                    <Col md='8' >
                        <div className='banner__content'>
                            <h1 className='title'>Wellcome to my Site.</h1> 
                            <p>I'm Sabbir.And i'm Font-End-Devoloper.</p>
                            <NavLink to='/about' className='btn' >Read More</NavLink>
                        </div>
                    </Col>

                    <Col md='4' >
                        <div className='banner__media'>
                            <img src={BannerImage} alt='Banner' className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Home;