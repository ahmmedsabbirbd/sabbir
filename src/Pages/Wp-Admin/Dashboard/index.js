import React, { useEffect, useState } from "react"; 
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { Col, Container, Row } from "react-bootstrap";
import { useAuth } from '../../../Contexts/AuthorContext'

const Dashboard = ()=> { 
    const { currentUser, logout, verificationEmail } = useAuth();

    // try { 
    //     verificationEmail(currentUser); 
    // } catch (err) {
    //     console.log(err); 
    // }

    return (
       <Container >
           <Row>
               <Col>
                <h1>hi</h1>
                <h1>Wellcome to admin page</h1> 
                {currentUser && <>
                <p>{currentUser.displayName}</p>
                    <button onClick={logout}>logout</button>          

                </> }
            </Col>
           </Row>

           <Row>
               
           </Row>
       </Container>
    )
}

export default Dashboard;