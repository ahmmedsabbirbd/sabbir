import { NavLink, Link } from 'react-router-dom';
import Logo from './../Assets/Images/logo.svg';
import { Col, Container, Row, Button, Image } from 'react-bootstrap'; 

const Footer = ()=> {  
    return ( <>
        <div className="footer-gutter"></div>
        <footer className='footer'>
            <Container>
                <div className='ball'></div>
                <div className='crooked'></div>
                <Row>
                    <Col lg='4'> 
                        <div className='footer__widget'>
                            <div className='footer__logo'>
                                <NavLink to='/' className='navbar-brand'>
                                    <Image src={Logo} fluid alt='logo' />
                                </NavLink>
                            </div>

                            <div className='footer__text'>
                                <p>Copyright © 2022 Sabbir Ahmmed All Rights Reserved.</p>
                            </div>

                            <ul className='footer__socail-media'>
                                <li><Button variant="" onClick={ ()=> window.open("https://www.facebook.com/ahmmedsabbirbd", "_blank") } className='icon-facebook'></Button></li>
                                <li><Button variant="" onClick={ ()=> window.open("https://tiktok.com/@ahmmedsabbirbd", "_blank") } className='icon-tiktok'></Button></li>
                                <li><Button variant="" onClick={ ()=> window.open("https://github.com/ahmmedsabbirbd", "_blank") } className='icon-git'></Button></li>
                            </ul>                
                        </div>  
                    </Col>

                    <Col lg='8'>
                        <Row className='mb-30'>
                            <Col md='4' sm='6'>
                                <div className='footer__widget'>  
                                    <ul className='footer__widget-menu text-capitalize'>  
                                        <li className='title'><NavLink to='/animation'>Animation</NavLink></li>
                                        <li><Link to='/animation/eid-mubarak?name=Sabbir+Ahmmed&description=%E0%A6%88%E0%A6%A6+%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%87+%E0%A6%96%E0%A7%81%E0%A6%B6%E0%A6%BF+%E0%A6%88%E0%A6%A6+%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%87+%E0%A6%86%E0%A6%A8%E0%A6%A8%E0%A7%8D%E0%A6%A6%0A%E0%A6%88%E0%A6%A6+%E0%A6%86%E0%A6%B8%E0%A7%87+%E0%A6%AD%E0%A7%81%E0%A6%B2%E0%A6%BF%E0%A6%AF%E0%A6%BC%E0%A7%87+%E0%A6%A6%E0%A6%BF%E0%A6%A4%E0%A7%87+%E0%A6%B8%E0%A6%95%E0%A6%B2+%E0%A6%AC%E0%A6%BF%E0%A6%AC%E0%A6%BE%E0%A6%A6+%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%A8%E0%A7%8D%E0%A6%A6%0A%E0%A6%88%E0%A6%A6+%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%87+%E0%A6%AD%E0%A7%81%E0%A6%B2%E0%A7%87+%E0%A6%AF%E0%A6%BE%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE+%E0%A6%AF%E0%A6%A4+%E0%A6%A6%E0%A7%81%E0%A6%83%E0%A6%96+%E0%A6%AD%E0%A6%AF%E0%A6%BC%0A%E0%A6%88%E0%A6%A6%E0%A7%87%E0%A6%B0+%E0%A6%AE%E0%A6%A4%E0%A7%8B%E0%A6%87+%E0%A6%A4%E0%A7%8B%E0%A6%AE%E0%A6%BE%E0%A6%B0+%E0%A6%9C%E0%A7%80%E0%A6%AC%E0%A6%A8%E0%A6%9F%E0%A6%BE+%E0%A6%B9%E0%A7%8B%E0%A6%95+%E0%A6%A6%E0%A7%80%E0%A6%AA%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%AE%E0%A6%AF%E0%A6%BC%0A***+%E0%A6%88%E0%A6%A6+%E0%A6%AE%E0%A7%8B%E0%A6%AC%E0%A6%BE%E0%A6%B0%E0%A6%95+***'>Eid Mubarak</Link></li>
                                    </ul>
                                </div>
                            </Col> 

                            <Col md='4' sm='6'>
                                <div className='footer__widget'>  
                                    <ul className='footer__widget-menu text-capitalize'>  
                                        <li className='title'><NavLink to='/worked'>Worked</NavLink></li>
                                    </ul>
                                </div>
                            </Col> 

                            <Col md='4' sm='6'>
                                <div className='footer__widget'>  
                                    <ul className='footer__widget-menu text-capitalize'>  
                                        <li className='title'><NavLink to='/about'>About</NavLink></li>
                                    </ul>
                                </div>
                            </Col> 
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col>  
                        <hr />
                    </Col>
                </Row>
            </Container>
        </footer>
    </>)
}

export default Footer;