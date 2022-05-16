import { useLocation } from 'react-router-dom'; 
import { Container, Row, Col } from 'react-bootstrap'; 
 
const Breadcrumb = ()=> { 
    const location = useLocation();
    const BreadcrumbText =  location.pathname;

    const Breadcrum = <section className='breadcrumb-wrapper'>
            <Container>
                <Row>
                    <Col>
                        <nav className='breadcrumb'> 
                            <p>{ ( BreadcrumbText === '/' ) ? "" : ('Home' + location.pathname)}</p>
                        </nav>                
                    </Col>
                </Row>
            </Container>
        </section>;
    return <> { ( BreadcrumbText === '/' ) ? "" : Breadcrum } </>
}

export default Breadcrumb;