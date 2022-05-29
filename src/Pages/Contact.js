import { Col, Container, Row } from "react-bootstrap"; 

const Contact = ()=> {
    return (
        <section className="contact"> 
            <Container>
                <Row>
                    <Col>
                        <h1>Contact Us</h1>
                        <p>Phone : <span style={ {cursor: "pointer"} } onClick={ ()=> window.open("tel:01712923446", "_blank") } >01712923446</span></p>
                        <p>Email : <span style={ {cursor: "pointer"} } onClick={ ()=> window.open("mailto:ahmmedsabbirbd@gmail.com", "_blank") } >ahmmedsabbirbd@gmail.com </span></p>
                    </Col> 
                </Row>
            </Container>  
        </section>
    )
}

export default Contact;