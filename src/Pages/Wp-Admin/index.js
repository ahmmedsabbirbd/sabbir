import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useAthu } from "../../Contexts/AuthorContext";
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

    const { signup } = useAthu();

    async function handleSubmit(e){
        e.preventDefault();

        // Validation
        if(password !== confirmPassword) {
            return setError('Password is not matched');
        }

        console.log(agree);

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
            <h1>Singup</h1>
            <div>
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
                <button disabled={loading} >submit</button>
            </form>
           </div>
       </Container>
    )
}

export default Singup;