import AnimationItem from "./AnimationItem";
import { Container, Row } from "react-bootstrap";
import { motion } from "../../../node_modules/framer-motion/dist/framer-motion.js";

const Animation = ()=> {
    return (
        <motion.section 
            className="animation" 

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
                    <AnimationItem url="/animation/eid-mubarak?name=Sabbir+Ahmmed&description=%E0%A6%88%E0%A6%A6+%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%87+%E0%A6%96%E0%A7%81%E0%A6%B6%E0%A6%BF+%E0%A6%88%E0%A6%A6+%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%87+%E0%A6%86%E0%A6%A8%E0%A6%A8%E0%A7%8D%E0%A6%A6%0A%E0%A6%88%E0%A6%A6+%E0%A6%86%E0%A6%B8%E0%A7%87+%E0%A6%AD%E0%A7%81%E0%A6%B2%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87+%E0%A6%A6%E0%A6%BF%E0%A6%A4%E0%A7%87+%E0%A6%B8%E0%A6%95%E0%A6%B2+%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BE%E0%A6%A6+%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%0A%E0%A6%88%E0%A6%A6+%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%87+%E0%A6%AD%E0%A7%81%E0%A6%B2%E0%A7%87+%E0%A6%AF%E0%A6%BE%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE+%E0%A6%AF%E0%A6%A4+%E0%A6%A6%E0%A7%81%E0%A6%83%E0%A6%96+%E0%A6%AD%E0%A6%AF%E0%A6%BC%0A%E0%A6%88%E0%A6%A6%E0%A7%87%E0%A6%B0+%E0%A6%AE%E0%A6%A4%E0%A7%8B%E0%A6%87+%E0%A6%A4%E0%A7%8B%E0%A6%AE%E0%A6%BE%E0%A6%B0+%E0%A6%9C%E0%A7%80%E0%A6%AC%E0%A6%A8%E0%A6%9F%E0%A6%BE+%E0%A6%B9%E0%A7%8B%E0%A6%95+%E0%A6%A6%E0%A7%80%E0%A6%AA%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%AE%E0%A6%AF%E0%A6%BC%0A***+%E0%A6%88%E0%A6%A6+%E0%A6%AE%E0%A7%8B%E0%A6%AC%E0%A6%BE%E0%A6%B0%E0%A6%95+***" title="Eid Mubarak" description="Eid Mubarak Wishes with your name" /> 
                </Row>
            </Container>  
        </motion.section>
    )
}

export default Animation;