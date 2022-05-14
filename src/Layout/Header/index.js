import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../Assets/Images/logo.svg';
import { Container } from 'react-bootstrap';
import './Header.Module.css';
import Breadcrumb from './Breadcrumb';

const Header = ()=> {
	const [ screenWidth, setScreenWidth ] = useState( window.innerWidth );
	const [ mobileMenuShow, setMobileMenuShow ] = useState( false );
	window.addEventListener('resize', ()=> { setScreenWidth( window.innerWidth ); setMobileMenuShow( false ) } ); 

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
		<li><NavLink to='/'>Home</NavLink></li>
		<li><NavLink to='/about'>About</NavLink></li>
		<li><NavLink to='/blogs'>Worked</NavLink></li>
		<li><NavLink to='/contact'>Contact</NavLink></li>
		<li><NavLink to='/animation/eid-mubarak'>Animation</NavLink></li>
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
		<header className='header'>
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
		<Breadcrumb />
		</>
    )
}

export default Header;



// export function useWindowDimensions() {

//   const hasWindow = typeof window !== 'undefined';

//   function getWindowDimensions() {
//     const width = hasWindow ? window.innerWidth : null;
//     const height = hasWindow ? window.innerHeight : null;
//     return {
//       width,
//       height,
//     };
//   }

//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//   useEffect(() => {
//     if (hasWindow) {
//       function handleResize() {
//         setWindowDimensions(getWindowDimensions());
//       }

//       window.addEventListener('resize', handleResize);
//       return () => window.removeEventListener('resize', handleResize);
//     }
//   }, [hasWindow]);

//   return windowDimensions;
// }

// // yourComponent.js

// import useWindowDimensions from './hooks/useWindowDimensions';

// const Component = () => {
//   const { height, width } = useWindowDimensions();
//   /* you can also use default values or alias to use only one prop: */
//   // const { height: windowHeight = 480 } useWindowDimensions();

//   return (
//     <div>
//       width: {width} ~ height: {height}
//     </div>
//   );