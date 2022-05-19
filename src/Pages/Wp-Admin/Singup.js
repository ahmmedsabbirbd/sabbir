// import React, { useState, useEffect } from "react";  
// import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from '../../firebase';

// import { useNavigate } from "react-router-dom";
// import { Container } from "react-bootstrap";

// const Singup = ()=> { 
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate(); 
//     const [isResistering, setIsResistering] = useState(false);
//     const [resisterInformation, setResisterInformation ] = useState({
//         email : "",
//         confirmEmail : "",
//         password : "",
//         confirmPassword : "",
//     });

//     useEffect(() => {
//         auth.onAuthStateChanged((user) => {
//             if(user) {
//                 navigate('/dashboard');
//             }
//         })
//     })

//     const handleOnEmail = (e)=> { 
//         setEmail(e.target.value);
//     }

//     const handleOnPassword = (e)=> {
//         setPassword(e.target.value); 
//     }

//     const handleSignIn = ()=> {   
//         signInWithEmailAndPassword(auth, email, password).then( ()=> {
//             navigate('/dashboard');
//         }).catch((err) => alert(err.message) );
//     }

//     const handleResister = ()=> { 
//         if ( resisterInformation.email !== resisterInformation.confirmEmail  ) {
//             alert("Email not same");
//             return
//         } else if ( resisterInformation.password !== resisterInformation.confirmPassword ) {
//             alert("Password not same");
//             return
//         }
        
//         createUserWithEmailAndPassword(auth, resisterInformation.email, resisterInformation.password).then( ()=> {
//             navigate('/wp-admin');
//         }).catch((err) => alert(err.message) );   
//     }

//     return (
//        <Container >
//            <h1>Singup</h1>
//            <div>
//                { isResistering ? (<>
//                     <input type="email" placeholder="Email" value={resisterInformation.email} onChange={(e) => { setResisterInformation({...resisterInformation, email : e.target.value}) }} /> 
//                     <input type="email" placeholder="Confirm Email" value={resisterInformation.confirmEmail} onChange={(e) => { setResisterInformation({...resisterInformation, confirmEmail : e.target.value}) }} /> 
//                     <input type="password" placeholder="Password" value={resisterInformation.password} onChange={(e) => { setResisterInformation({...resisterInformation, password : e.target.value}) }} /> 
//                     <input type="password" placeholder="Confirm Password" value={resisterInformation.confirmPassword} onChange={(e) => { setResisterInformation({...resisterInformation, confirmPassword : e.target.value}) }} /> 
//                     <button onClick={handleResister}>Resister</button>
//                     <button onClick={() => setIsResistering(false)}>Go Back</button>
//                 </>) : (<> 
//                     <input type="email" onChange={handleOnEmail} value={email} />
//                     <input type="password" onChange={handleOnPassword} value={password} />
//                     <button onClick={handleSignIn}>Sing In</button>
//                     <button onClick={() => setIsResistering(true)}>Create an Account</button>
//                 </>)
//                }
               
//            </div>
//        </Container>
//     )
// }

// export default Singup;