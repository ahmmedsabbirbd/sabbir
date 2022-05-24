import { Navigate, Outlet } from 'react-router-dom'; 
import { useAuth } from "../Contexts/AuthorContext";  

const PrivateOutlet = ()=> {
    const auth = useAuth(); 

    return auth.currentUser ? <Outlet />  :  <Navigate to='/wp-admin' /> ;
}

export default PrivateOutlet;