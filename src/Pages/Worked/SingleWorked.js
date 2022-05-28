import { Container, Row, Col, Button } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom"; 
import UpdateWorked from "./UpdateWorked";

const SingleWorked = ()=> {
    const navigate = useNavigate(); 
    const { title } = useParams(); 
    const location = useLocation();
    const { image, content} = location.state; 

    return (
        <Container>
            <Row> 
                <Col>
                    <article>
                        <UpdateWorked work={ location.state } />
                        <img src={ image } alt={ title } className="img-fluid" />
                        <h1>{title}</h1> 
                        <div className="content-editor" dangerouslySetInnerHTML={ {__html: content} } ></div>
                        <Button variant="" onClick={ ()=> navigate('/worked')  } >Go Back</Button>
                    </article>
                </Col>
            </Row>
        </Container>
    )
}
export default SingleWorked;