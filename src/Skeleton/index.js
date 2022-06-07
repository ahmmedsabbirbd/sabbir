import { getAuth } from "firebase/auth";
import { Col } from "react-bootstrap"; 

export default function Skeleton( { type }  ) {
    const auth = getAuth(); 

    const FakeWorkedItemCounter = Array(10).fill();
    const FakeWorkedItem = ()=> ( 
        <Col md="6">
            <div className="skeleton s-worked-post">  
                <div className="media"></div> 
                <div className="title"></div>  
                { ( auth.lastNotifiedUid === "jZGXrap732aDZLOBoG2SyjOzK252" ) && <div className="skeleton btn"></div> }  
            </div>
        </Col>
    );

    const FakeSingleWorkItem = ()=> (  
        <div className="skeleton s-single-worked-post">  
            <div className="media"></div> 
            <div className="title"></div>
            <div className="content"></div>  
            <div className="skeleton btn"></div>  
        </div> 
    );

    const FakeSkilledItemCounter = Array(8).fill();
    const FakeSkilledItem = ()=>  (
        <li className="skeleton s-item">
            <div className="img"></div>
            <span></span>
            { ( auth.lastNotifiedUid === "jZGXrap732aDZLOBoG2SyjOzK252" ) && <div className="skeleton btn"></div> }
        </li>
    );

    if ( type === "fakeSingleWorkItem" ) return <FakeSingleWorkItem />
    if ( type === "fakeWorkItem" ) return FakeWorkedItemCounter.map((fakeData, index) => <FakeWorkedItem key={ index } />)
    if ( type === "fakeSkilledItem" ) return FakeSkilledItemCounter.map((fakeData, index) => <FakeSkilledItem key={ index } />)
} 