import { useNavigate  } from "react-router-dom"; 
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthorContext";

export function Singup() {
    const { signup } = useAuth();
    const navigate = useNavigate();
    const [ error, setError ] = useState();
    const [ email, setEmail ] = useState("");
    const [ loading, setLoading ] = useState();
    const [ agree, setAgree ] = useState(false);
    const [ username, setUsername ] = useState(""); 
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    async function handleSubmit(e){
        e.preventDefault();

        // Validation
        if(password !== confirmPassword) {
            return setError("Password is not matched");
        }

        if (!agree) {
            setError("Please checked my condition");
            return
        }

        try {
            setError("");
            setLoading(true);
            await signup(email, password, username);
            navigate("/dashboard");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Account not created");
        }
    } 

    return (
        <section className="singup">
            <Container>
                    <Row>
                        <Col>
                            <h1 className="title">Singup</h1> 
                            <form onSubmit={handleSubmit}>
                                <input type="text" required placeholder="Enter your Username" value={ username } onChange={  (e) => setUsername(e.target.value) } />
                                <input type="email" required placeholder="Enter your Email" value={ email } onChange={ (e) => setEmail(e.target.value) } />
                                <input type="password" required placeholder="Enter your Password" value={ password } onChange={ (e) => setPassword(e.target.value) } />
                                <input type="password" required placeholder="Enter your Confirm Password" value={confirmPassword} onChange={ (e) => setConfirmPassword(e.target.value) } />
                                
                                <div className="agree">
                                    <input id="agree" type="checkbox" onChange={ (e) => setAgree(e.target.checked) }/>
                                    <label for="agree">I agree with you</label>
                                </div>

                                {error && <p className="error">{ error }</p>}
                                <button className="btn" disabled={ loading } type="submit">Submit</button>
                            </form>
                        </Col>
                    </Row>
            </Container>
        </section>
    )
} 

const Login = ()=> {  
    const navigate = useNavigate();
    const { login, currentUser } = useAuth();
    const [ error, setError ] = useState();
    const [ email, setEmail ] = useState("");
    const [ loading, setLoading ] = useState();
    const [ password, setPassword ] = useState("");  
    
    useEffect(()=> {
        currentUser && navigate("/dashboard");
    }, [currentUser, navigate])

    async function handleSubmit(e){
        e.preventDefault();  
        
        // check emaill & password
        try {
            setError("");
            setLoading(true);
            await login(email, password);

            navigate("/dashboard");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Login not succecus");
        }
    } 

    return (
        <section className="login">
            <Container>
                <Row>
                    <Col>
                        <h1 className="title">Login</h1> 
                        <form onSubmit={ handleSubmit }> 
                            <input type="email" required placeholder="Enter your Email" value={ email }  onChange={ (e) => setEmail(e.target.value) } />
                            <input type="password" required placeholder="Enter your Password" value={ password } onChange={ (e) => setPassword(e.target.value) } />

                            {error && <p className="error">{ error }</p>}
                            <button className="btn" disabled={ loading } type="submit">Submit</button>
                        </form> 
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}

export function ForgetPassword()  {
    const navigate = useNavigate();
    const { resetPassword } = useAuth();
    const [ error, setError ] = useState();
    const [ email, setEmail ] = useState("");   
    const [ loading, setLoading ] = useState();

    async function handleSubmit(e){
        e.preventDefault();  
        
        // Forget Password
        try {
            setError("");
            setLoading(true);
            await resetPassword(email);
            alert("Check your gmail. Type your letest password");

            navigate("/");
        } catch (err) {
            console.log(err);
            setLoading(false);
            setError("Forget password not succecus");
        }
    } 
    
    return (
        <section className="forget-password">
            <Container>
                <Row>
                    <Col>
                        <h1 className="title">Forget Password</h1> 
                        <form onSubmit={ handleSubmit }> 
                            <input type="email" required placeholder="Enter your Email" value={ email } onChange={ (e) => setEmail(e.target.value) } /> 

                            {error && <p className="error">{ error }</p>}
                            <button className="btn" disabled={ loading }>Submit</button>
                        </form>
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}

export default Login;