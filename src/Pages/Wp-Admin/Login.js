import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useAthu } from "../../Contexts/AuthorContext";
import { useNavigate  } from "react-router-dom";

const Login = ()=> {  
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');  

    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState();
    const navigate = useNavigate();

    const { login } = useAthu();

    async function handleSubmit(e){
        e.preventDefault();  
        
        try {
            setError('');
            setLoading(true);
            await login(email, password);

            navigate('/dashboard');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Login not succecus');
        }
    } 

    return (
       <Container >
            <h1>Login</h1>
            <div>
            <form onSubmit={handleSubmit}> 
                <input type="email" required placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" required placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                {error && <p>{error}</p>}
                <button disabled={loading} >submit</button>
            </form>
           </div>
       </Container>
    )
}

export default Login;