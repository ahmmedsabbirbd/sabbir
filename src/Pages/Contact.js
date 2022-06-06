import { Col, Container, Row } from "react-bootstrap";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion.js";

const Contact = ()=> {
    return (
        <motion.section 
            className="contact"

            intial= {
                {width: 0} 
            }

            animate= {
                {width: "100%"} 
            }
            
            exit= { 
                {x: window.innerWidth, transition: { duration: 0.3 }} 
            } 
        > 
            <Container>
                <Row>
                    <Col>
                        <h1>Contact Us</h1>
                        <p>Phone : <span style={ {cursor: "pointer"} } onClick={ ()=> window.open("tel:01712923446", "_blank") } >01712923446</span></p>
                        <p>Email : <span style={ {cursor: "pointer"} } onClick={ ()=> window.open("mailto:ahmmedsabbirbd@gmail.com", "_blank") } >ahmmedsabbirbd@gmail.com </span></p>
                    </Col> 
                </Row>
            </Container>  
        </motion.section>
    )
}

export default Contact;