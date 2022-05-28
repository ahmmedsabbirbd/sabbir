import React, { useState } from "react";   
import { Col, Container, Row } from "react-bootstrap";
import { useAuth } from "../../../Contexts/AuthorContext";

const Dashboard = ()=> { 
    const { currentUser, logout, verificationEmail } = useAuth(); 
    const [ verifyEmail, setVerifyEmail ] = useState(currentUser.emailVerified);  

    async function onClick(){

        // email verification
        try { 
            await verificationEmail(currentUser); 
        } catch (err) {
            console.log(err); 
        }
    }
    const logoutButton = <button onClick={ logout } >logout</button>;

    const dashboard = <Container>
        <Row>
            <Col> 
                <h1>Wellcome to admin page</h1>
                
                {currentUser && <>
                    <p>{ currentUser.displayName }</p>
                    { logoutButton }
                </>}
            </Col>
        </Row> 
    </Container>;

    const verifyContent = <Container>
        <Row>
            <Col>
                <p>Please verify email</p>
                <button onClick={ onClick }>Verify</button>
                { logoutButton }
            </Col>
        </Row>
    </Container>;

    return ( verifyEmail ? dashboard : verifyContent )
}

export default Dashboard;