import BannerImage from '../../Assets/Images/home-main.svg';
import { Container, Row, Col } from "react-bootstrap";

const Blogs = ()=> {
    return (
        <section className='blog'> 
            <Container className='align-items-center' >
                <Row >
                    <Col md='7' >
                        <div className='blog__content'>
                            <h1 className='title'>What is Lorem Ipsum? Blog</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            <button>Scroll down</button>
                        </div>
                    </Col>

                    <Col md='5' >
                        <div className='blog__media'>
                            <img src={BannerImage} alt='Banner' className='img-fluid' /> 
                        </div>
                    </Col>
                </Row>
            </Container>  
        </section>
    )
}

export default Blogs;