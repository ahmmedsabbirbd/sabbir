import { Container, Row, Col } from "react-bootstrap";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion.js";

const Error = ()=> {
    return (
        <motion.section 
            style={ { 'padding': '50px 0'} } 

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
                        <h1>Error!..</h1>
                        <p>Please check your url</p>
                    </Col> 
                </Row>
            </Container>  
        </motion.section>
    )
}

export default Error;