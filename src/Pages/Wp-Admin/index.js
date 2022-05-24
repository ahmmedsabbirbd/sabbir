import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthorContext";
import { useNavigate  } from "react-router-dom"; 

const Singup = ()=> {
    const [ username, setUsername ] = useState(''); 
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ agree, setAgree ] = useState(false);
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState();
    const navigate = useNavigate();
    const { signup } = useAuth();

    async function handleSubmit(e){
        e.preventDefault();

        // Validation
        if(password !== confirmPassword) {
            return setError('Password is not matched');
        }

        if (!agree) {
            setError('please checked my condition');
            return
        }

        try {
            setError('');
            setLoading(true);
            await signup(email, password, username);
            navigate('/dashboard');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Account not created');
        }
    } 

    return (
       <Container >
            <Row>
                <Col>
                    <h1>Singup</h1> 
                    <form onSubmit={handleSubmit}>
                        <input type="text" required placeholder="Enter your Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        <input type="email" required placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" required placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <input type="password" required placeholder="Enter your Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        
                        <div>
                            <input type="checkbox" onChange={(e) => setAgree(e.target.checked)}/>
                            <p>I agree with you</p>
                        </div>

                        {error && <p>{error}</p>}
                        <button disabled={loading} type='submit'>submit</button>
                    </form>
                </Col>
            </Row>
       </Container>
    )
} 

const Login = ()=> {  
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');  
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState();
    const navigate = useNavigate();
    const { login, currentUser } = useAuth();
    
    useEffect(()=> {
        currentUser && navigate('/dashboard');
    }, [])

    async function handleSubmit(e){
        e.preventDefault();  
        
        // check emaill & password
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
            <Row>
                <Col>
                    <h1>Login</h1> 
                    <form onSubmit={handleSubmit}> 
                        <input type="email" required placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input type="password" required placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                        {error && <p>{error}</p>}
                        <button disabled={loading} >submit</button>
                    </form> 
                </Col>
            </Row> 
        </Container> 
    )
}

const ForgetPassword = ()=> {
    const [ email, setEmail ] = useState('');   
    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState();
    const navigate = useNavigate();
    const { resetPassword } = useAuth();

    async function handleSubmit(e){
        e.preventDefault();  
        
        // Forget Password
        try {
            setError('');
            setLoading(true);
            await resetPassword(email);

            navigate('/wp-admin');
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError('Forget password not succecus');
        }
    } 
    
    return (
        <Container >
            <Row>
                <Col>
                    <h1>Forget Password</h1> 
                    <form onSubmit={handleSubmit}> 
                        <input type="email" required placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} /> 

                        {error && <p>{error}</p>}
                        <button disabled={loading} >submit</button>
                    </form>
                </Col>
            </Row> 
        </Container>
     )
}

export default Login;