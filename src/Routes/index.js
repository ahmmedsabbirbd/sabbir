import Home from "../Pages/Home";
import About from "../Pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Layout/Header';
import Error from '../Pages/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from "../Pages/Blog";
import Contact from "../Pages/Contact";
import '../Sass/style.scss';
import Footer from "../Layout/Footer"; 
import Animation from "../Pages/Animation";
import EidMubarak from "../Pages/Animation/EidMubarak"; 
import ScrollToTop from "../Components/ScrollToTop";

const CustomRoutes = ()=> { 
    return (
        <div className="app">
            <BrowserRouter> 
                <ScrollToTop />
                {}
                <Header /> 
                <Routes>
                    <Route path="/" element={ <Home />} />
                    <Route path="*" element={ <Error />} />
                    <Route path="/about" element={ <About />} />
                    <Route path="/blogs" element={ <Blogs />} />
                    <Route path="/contact" element={ <Contact />} />
                    <Route path="/animation" element={ <Animation />} />
                    <Route path="/animation/eid-mubarak" element={ <EidMubarak />} /> 
                </Routes>
                <Footer />
            </BrowserRouter> 
        </div>
    )
}

export default CustomRoutes;