import { NavLink, Link } from 'react-router-dom';
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
                                <li><Link to='https://www.facebook.com/ahmmedsabbirbd' className='icon-facebook'  target='_blank'></Link></li>
                                <li><Link to='https://tiktok.com/@ahmmedsabbirbd' className='icon-tiktok'   target='_blank'></Link></li>
                            </ul>                
                        </div>  
                    </Col>

                    <Col lg='8'>
                        <Row className='mb-30'>
                            <Col md='4' sm='6' >
                                <div className='footer__widget'>  
                                    <ul className='footer__widget-menu text-capitalize'>  
                                        <li className='title'><NavLink to='/animation'>Animation</NavLink></li>
                                        <li><Link to='/animation'>Eid</Link></li>
                                        <li><Link to='/animation'>Birthday</Link></li> 
                                        <li><Link to='/animation'>Valentine's Day</Link></li> 
                                        <li><Link to='/animation'>Mother's Day</Link></li> 
                                        <li><Link to='/animation'>Fother's Day</Link></li> 
                                        <li><Link to='/animation'>Animation 1</Link></li> 
                                        <li><Link to='/animation'>Fother's 2</Link></li> 
                                        <li><Link to='/animation'>Fother's 3</Link></li> 
                                    </ul>
                                </div>
                            </Col> 

                            <Col md='4' sm='6' >
                                <div className='footer__widget'>  
                                    <ul className='footer__widget-menu text-capitalize'>  
                                        <li className='title'><NavLink to='/blogs'>Worked</NavLink></li>
                                        <li><Link to='/blogs'>Worked 1</Link></li>
                                        <li><Link to='/blogs'>Worked 2</Link></li> 
                                        <li><Link to='/blogs'>Worked 3</Link></li> 
                                        <li><Link to='/blogs'>Worked 4</Link></li> 
                                        <li><Link to='/blogs'>Worked 5</Link></li> 
                                        <li><Link to='/blogs'>Worked 6</Link></li> 
                                        <li><Link to='/blogs'>Worked 7</Link></li> 
                                        <li><Link to='/blogs'>Worked 8</Link></li> 
                                    </ul>
                                </div>
                            </Col> 

                            <Col md='4' sm='6' >
                                <div className='footer__widget'>  
                                    <ul className='footer__widget-menu text-capitalize'>  
                                        <li className='title'><NavLink to='/about'>About</NavLink></li>
                                        <li><Link to='/about'>About 1</Link></li>
                                        <li><Link to='/about'>About 2</Link></li> 
                                        <li><Link to='/about'>About 3</Link></li> 
                                        <li><Link to='/about'>About 4</Link></li> 
                                        <li><Link to='/about'>About 5</Link></li> 
                                        <li><Link to='/about'>About 6</Link></li> 
                                        <li><Link to='/about'>About 7</Link></li> 
                                        <li><Link to='/about'>About 8</Link></li> 
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