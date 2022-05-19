import React, { useEffect, useState } from "react"; 
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";
import { Container } from "react-bootstrap";
import { useAthu } from '../../../Contexts/AuthorContext'

const Dashboard = ()=> { 
    const { currentUser, logout } = useAthu();

    return (
       <Container > 
           <h1>hi</h1>
           <h1>Wellcome to admin page</h1> 
           {currentUser && <>
           <p>{currentUser.displayName}</p>
            <button onClick={logout}>logout</button>          

           </> }
       </Container>
    )
}

export default Dashboard;