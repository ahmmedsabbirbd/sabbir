import "bootstrap/dist/css/bootstrap.min.css";
import "../Sass/style.scss"; 
import Header from "../Layout/Header"; 
import Footer from "../Layout/Footer";  
import ScrollToTop from "../Components/ScrollToTop"; 
import { AuthProvider } from "../Contexts/AuthorContext";
import { BrowserRouter } from "react-router-dom"; 
import AnimatedRoutes from "./AnimatedRoutes";


const CustomRoutes = ()=> {  
    return (
        <div className="app" >
            <BrowserRouter >
                <ScrollToTop />
                <Header /> 
                <AuthProvider > 
                <AnimatedRoutes />
                </AuthProvider>  
                <Footer />
            </BrowserRouter> 
        </div>
    )
}

export default CustomRoutes;