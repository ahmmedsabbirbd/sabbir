import Home from "../Pages/Home";
import About from "../Pages/About";
import Error from "../Pages/Error";
import Worked from "../Pages/Worked";  
import Login from "../Pages/Wp-Admin"; 
import Contact from "../Pages/Contact";
import Animation from "../Pages/Animation";
import PrivateOutlet from "./PrivateOutlet";
import Dashboard from "../Pages/Wp-Admin/Dashboard"; 
import EidMubarak from "../Pages/Animation/EidMubarak"; 
import SingleWorked from "../Pages/Worked/SingleWorked"; 
import { Routes, Route, useLocation } from "react-router-dom"; 
import { AnimatePresence } from "../../node_modules/framer-motion/dist/framer-motion.js";

const AnimatedRoutes = ()=> { 
    const location = useLocation();

    return ( 
        <AnimatePresence>
            <Routes location={ location } key={ location.pathname }> 
                <Route path="/" element={ <Home /> } />
                <Route path="*" element={ <Error /> } />
                <Route path="/about" element={ <About /> } />
                <Route path="/worked" element={ <Worked /> } />
                <Route path="/worked/:uid" element={ <SingleWorked /> } />
                <Route path="/contact" element={ <Contact /> } />
                <Route path="/animation" element={ <Animation /> } />  
                <Route path="/wp-admin" element={ <Login /> } />
                <Route path="/*" element={ <PrivateOutlet /> }>
                    <Route path="dashboard" element={ <Dashboard /> } /> 
                </Route> 
                <Route path="/animation/eid-mubarak" element={ <EidMubarak /> } /> 
            </Routes> 
        </AnimatePresence>
    )
}

export default AnimatedRoutes;