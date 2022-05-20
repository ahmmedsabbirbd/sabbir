import { Navigate, Outlet } from 'react-router-dom'; 
import { useAthu } from "../Contexts/AuthorContext";  

const PrivateOutlet = ()=> {
    const auth = useAthu(); 

    return auth.currentUser ? <Outlet />  :  <Navigate to='/wp-admin' /> ;
}

export default PrivateOutlet;