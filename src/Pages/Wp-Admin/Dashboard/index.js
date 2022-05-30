import React, { useEffect, useState } from "react";   
import { useAuth } from "../../../Contexts/AuthorContext";
import { Button, Col, Container, Row } from "react-bootstrap";

const Dashboard = ()=> { 
    const { currentUser, logout, verificationEmail } = useAuth(); 
    const [ verifyEmail, setVerifyEmail ] = useState(currentUser.emailVerified);
    
    useEffect(()=> {
        setVerifyEmail(currentUser.emailVerified)
    }, [currentUser.emailVerified]);

    async function onClickVerificationEmail(){
        // email verification
        try { 
            await verificationEmail(currentUser); 
        } catch (err) {
            console.log(err); 
        }
    }
    const logoutButton = <Button variant="" onClick={ logout } >logout</Button>;

    const dashboard =  <section className="dashboard">
        <Container>
            <Row>
                <Col> 
                    <h1>Wellcome to admin page</h1>
                    
                    {currentUser && <>
                        <p>Username : { currentUser.displayName }</p>
                        <p>Email : { currentUser.email }</p>

                        <div className="btn-group">
                            { logoutButton }
                        </div>
                    </>}
                </Col>
            </Row> 
        </Container>
    </section>;

    const verifyContent = <section className="dashboard dashboard__unverify">
        <Container>
            <Row>
                <Col>
                    <p>Please verify email</p>
                    <div className="btn-group">
                        <Button variant="" onClick={ onClickVerificationEmail }>Verify</Button>
                        { logoutButton }
                    </div>
                </Col>
            </Row>
        </Container>
    </section>;

    return ( verifyEmail ? dashboard : verifyContent )
}

export default Dashboard;