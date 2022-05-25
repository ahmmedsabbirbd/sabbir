import Home from "../Pages/Home";
import About from "../Pages/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../Layout/Header';
import Error from '../Pages/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Contact from "../Pages/Contact";
import '../Sass/style.scss';
import Footer from "../Layout/Footer"; 
import Animation from "../Pages/Animation";
import EidMubarak from "../Pages/Animation/EidMubarak"; 
import ScrollToTop from "../Components/ScrollToTop";
import { AuthProvider } from "../Contexts/AuthorContext";
import Dashboard from '../Pages/Wp-Admin/Dashboard';
import Login from "../Pages/Wp-Admin/"; 
import Worked from "../Pages/Worked"; 
import PrivateOutlet from "./PrivateOutlet";
import SingleWorked from "../Pages/Worked/SingleWorked";

const CustomRoutes = ()=> {  
    
    return (
        <div className="app">
            <BrowserRouter>
                <ScrollToTop />
                <Header /> 
                <AuthProvider > 
                <Routes> 
                    <Route path="/" element={ <Home />} />
                    <Route path="*" element={ <Error />} />
                    <Route path="/about" element={ <About />} />
                    <Route path="/worked" element={ <Worked />} />
                    <Route path="/worked/:title" element={ <SingleWorked />} />
                    <Route path="/contact" element={ <Contact />} />
                    <Route path="/animation" element={ <Animation />} />  
                    <Route path="/wp-admin" element={ <Login />} />
                    <Route path="/*" element={ <PrivateOutlet />}>
                        <Route path="dashboard" element={ <Dashboard />} /> 
                    </Route> 
                    <Route path="/animation/eid-mubarak" element={ <EidMubarak />} /> 
                </Routes>
                </AuthProvider>  
                <Footer />
            </BrowserRouter> 
        </div>
    )
}

export default CustomRoutes;