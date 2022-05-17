import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const  ScrollToTop = ()=> {
    const { pathname } = useLocation(); 

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    ( pathname === '/animation/' ) ? document.body.classList.add('is-animation-page') : document.body.classList.remove('is-animation-page');
    
    return null;
}

export default ScrollToTop;