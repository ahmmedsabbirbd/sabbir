import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.svg';
import { Container } from 'react-bootstrap'; 
import Breadcrumb from './Breadcrumb';

const Header = ()=> {
	const [ headerSticky, setHeaderSticky ] = useState(false); 
	const [ screenWidth, setScreenWidth ] = useState(window.innerWidth);
	const [ mobileMenuShow, setMobileMenuShow ] = useState(false);
	window.addEventListener('resize', ()=> { setScreenWidth(window.innerWidth); setMobileMenuShow(false) });

	const Onscroll = ()=> {
		(window.scrollY > 0) ? setHeaderSticky(true) : setHeaderSticky(false); 
		(document.body.scroll) && setMobileMenuShow(false); 
	}

	window.addEventListener('scroll', ()=> Onscroll() ); 

	const Toggler = <>
		<li className='mobile-navbar-toggler'>
			<button onClick={()=> setMobileMenuShow( !mobileMenuShow )} className={ mobileMenuShow ? 'navbar-toggle in active' : 'navbar-toggle' } >
				<span className='icon-bar'><span className='inner'></span></span>
				<span className='icon-bar'><span className='inner'></span></span>
				<span className='icon-bar'><span className='inner'></span></span>
			</button>
		</li>
		</>;

	const NavItem = <>
		<li><NavLink onClick={()=> setMobileMenuShow(false)} to='/'>Home</NavLink></li>
		<li><NavLink onClick={()=> setMobileMenuShow(false)} to='/about'>About</NavLink></li>
		<li><NavLink onClick={()=> setMobileMenuShow(false)} to='/blogs'>Worked</NavLink></li>
		<li><NavLink onClick={()=> setMobileMenuShow(false)} to='/contact'>Contact</NavLink></li>
		<li><NavLink onClick={()=> setMobileMenuShow(false)} to='/animation'>Animation</NavLink></li>
		</>;

	const MobileMenu = <> 
		<div className='mobile-header'>
			<div className='navigation'>
				<ul className='nav navbar-nav'>
					{ NavItem }
				</ul> 
			</div>
		</div> 
	</>

    return (
        <>
		{ mobileMenuShow && MobileMenu }
		<header className={`header transparent ${headerSticky ? 'sticky' : ''}`}>
			<div className='navbar navbar-expand'>
				<Container className='d-flex align-items-center justify-content-between' >
					<div className='navbar-header d-flex align-items-center'>
						<div className='logo'>
							<NavLink to='/' className='navbar-brand'>
								<img src={Logo} className='img-fluid' alt='logo' />
							</NavLink>
						</div>
					</div>
			
					<div className='collapse navbar-collapse'>
						<ul className='nav navbar-nav'>
							{ ( screenWidth < 768 ) ? Toggler : NavItem }
						</ul> 
					</div>
				</Container>
			</div>
		</header> 
		<div className="header-gutter"></div>
		<Breadcrumb />
		</>
    )
}

export default Header;