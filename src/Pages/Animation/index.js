import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Animation = ()=> {
    const OnHandleEidAnimationPage = ()=> {
        document.body.classList.add('is-animation-page');

    }

    return (
        <section className='animation'>
            <Container >
                <Row >
                    <Col lg='4' sm='6'>
                        <NavLink onLoad={OnHandleEidAnimationPage} onClick={OnHandleEidAnimationPage} to='/animation/eid-mubarak?name=Sabbir+Ahmmed&description=ঈদ+মানে+খুশি+ঈদ+মানে+আনন্দ+ঈদ+আসে+ভুলিয়ে+দিতে+সকল+বিবাদ+দ্বন্দ+ঈদ+মানে+ভুলে+যাওয়া+যত+দুঃখ+ভয়+ঈদের+মতোই+তোমার+জীবনটা+হোক+দীপ্তিময়+***+ঈদ+মোবারক+***'>
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