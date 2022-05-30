import UpdateWorked from "./UpdateWorked";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom"; 

const SingleWorked = ()=> { 
    const navigate = useNavigate(); 
    const { title } = useParams(); 
    const location = useLocation();
    const { image, content} = location.state; 

    return (
        <section className="single-worked">
            <Container>
                <Row> 
                    <Col>
                        <article>
                            <UpdateWorked work={ location.state } />
                            {image &&
                                <div className="fetured-media d-flex justify-content-center align-items-center">
                                    <Image src={ image } alt={ title } fluid />
                                </div>
                            }
                            <h1 className="title">{title}</h1> 
                            <div className="content-editor" dangerouslySetInnerHTML={ {__html: content} } ></div>
                            <Button variant="" onClick={ ()=> navigate('/worked')  } >Go Back</Button>
                        </article>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default SingleWorked;