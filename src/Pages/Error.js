import { Container, Row, Col } from "react-bootstrap"; 

const Error = ()=> {
    return (
        <section style={{ 'padding': '50px 0'}}> 
            <Container >
                <Row>
                    <Col>
                        <h1>Error!..</h1>
                        <p>Please check your url</p>
                    </Col> 
                </Row>
            </Container>  
        </section>
    )
}

export default Error;