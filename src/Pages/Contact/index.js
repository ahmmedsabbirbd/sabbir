import { Col, Container, Row } from 'react-bootstrap';
import BannerImage from '../../Assets/Images/home-main.svg';

const Contact = ()=> {
    return (
        <section className='contact'> 
            <Container >
                <Row className='align-items-center'>
                    <Col md='7' >
                        <div className='contact__content'>
                            <h1 className='title'>What is Lorem Ipsum? Contact</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button>Scroll down</button>
                        </div>
                    </Col>

                    <Col md='5' >
                        <div className='contact__media'>
                            <img src={BannerImage} alt='Banner' className='img-fluid' />
                        </div>
                    </Col>
                </Row>
            </Container>  
        </section>
    )
}

export default Contact;