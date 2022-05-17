import { Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const AnimationItem = (props)=> {
    const { title, description, url } = props;
    
    return ( 
        <Col lg='4' sm='6'>
            <NavLink className='animation-item' to={url} >
                <h3 className='title' >{title}</h3>
                <p>{description}</p>
            </NavLink>
        </Col>
    )
}

export default AnimationItem;