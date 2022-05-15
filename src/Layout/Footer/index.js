import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.svg';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.Module.css'; 

const Footer = ()=> {  
    return ( 
        <footer className='footer'>
            <Container >
                <div className='ball'></div>
                <div className='crooked'></div>
                <Row >
                    <Col lg='4'> 
                        <div className='footer__widget'>
                            <div className='footer__logo'>
                                <NavLink to='/' className='navbar-brand'>
                                    <img src={Logo} className='img-fluid' alt='logo' />
                                </NavLink>
                            </div>

                            <div className='footer__text'>
                                <p>It is a long established fact that a reoder will be distracted by the readole content of a page when looking at it's layout</p>
                            </div>

                            <ul className='footer__socail-media'>
                                <li><a className='icon-facebook' href='https://www.facebook.com/ahmmedsabbirbd' target='_blank'></a></li>
                                <li><a className='icon-tiktok' href='https://tiktok.com/@ahmmedsabbirbd' target='_blank'></a></li>
                            </ul>                
                        </div>  
                    </Col>

                    <Col lg='8'>
                        <Row className='mb-30'>
                            <Col md='4' sm='6' >
                                <div className='footer__widget'>  
                                    <ul className='footer__widget-menu text-capitalize'>  
                                        <li className='title'><NavLink to='/animation'>Animation</NavLink></li>
                                        <li><a>Eid</a></li>
                                        <li><a>Birthday</a></li> 
                                        <li><a>Valentine's Day</a></li> 
                                        <li><a>Mother's Day</a></li> 
                                        <li><a>Fother's Day</a></li> 
                                        <li><a>Animation 1</a></li> 
                                        <li><a>Fother's 2</a></li> 
                                        <li><a>Fother's 3</a></li> 
                                    </ul>
                                </div>
                            </Col> 

                            <Col md='4' sm='6' >
                                <div className='footer__widget'>  
                                    <ul className='footer__widget-menu text-capitalize'>  
                                        <li className='title'><NavLink to='/blogs'>Worked</NavLink></li>
                                        <li><a>Worked 1</a></li>
                                        <li><a>Worked 2</a></li> 
                                        <li><a>Worked 3</a></li> 
                                        <li><a>Worked 4</a></li> 
                                        <li><a>Worked 5</a></li> 
                                        <li><a>Worked 6</a></li> 
                                        <li><a>Worked 7</a></li> 
                                        <li><a>Worked 8</a></li> 
                                    </ul>
                                </div>
                            </Col> 

                            <Col md='4' sm='6' >
                                <div className='footer__widget'>  
                                    <ul className='footer__widget-menu text-capitalize'>  
                                        <li className='title'><NavLink to='/about'>About</NavLink></li>
                                        <li><a>About 1</a></li>
                                        <li><a>About 2</a></li> 
                                        <li><a>About 3</a></li> 
                                        <li><a>About 4</a></li> 
                                        <li><a>About 5</a></li> 
                                        <li><a>About 6</a></li> 
                                        <li><a>About 7</a></li> 
                                        <li><a>About 8</a></li> 
                                    </ul>
                                </div>
                            </Col> 
                        </Row>
                    </Col>
                </Row>

                <Row >
                    <Col>  
                        <hr />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;