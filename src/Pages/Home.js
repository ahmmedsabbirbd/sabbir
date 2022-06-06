import { getAuth } from "firebase/auth";
import { NavLink } from "react-router-dom"; 
import { useEffect, useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap"; 
import { getDatabase, onValue, query, ref, set } from "firebase/database";
import { motion } from "../../node_modules/framer-motion/dist/framer-motion.js";

const Home = ()=> {
    const auth = getAuth();
    const db = getDatabase();
    const [ error, setError ] = useState(false);
    const [ loading, setLoading ] = useState(true);
    const [ bannerTitle, setBannerTitle ] = useState(""); 
    const [ bannerContent, setBannerContent ] = useState(""); 
    const [ bannerBtn, setBannerBtn ] = useState(""); 
    const [ bannerImg, setBannerImg ] = useState(""); 
    const [ addBannerShow, setAddBannerShow ] = useState(false);

    useEffect(() => {  
        //Update Content  
        try { 
            onValue(query( ref(db, `/Banner`) ), snapshot => { 
                const data =  snapshot.val(); 
                setBannerBtn(data.btn); 
                setBannerImg(data.img);
                setBannerTitle(data.title);
                setBannerContent(data.content);
                setLoading(false); 
            });
        } catch (err) { 
            console.log(err);
            setLoading(false);
            setError("Some Problem");
        }
        
    }, [ db ]);

    const writeToBanner = (e)=> {
        e.preventDefault();
        setLoading(true);
        setError(false); 
        
        try {
            const db = getDatabase();

            set(ref(db, `Banner/`), { 
                title : bannerTitle,
                content: bannerContent,
                btn: bannerBtn,
                img: bannerImg,
            }); 

            setAddBannerShow(false);
            setLoading(false);
        } catch (err) {
            console.log(err); 
            setLoading(false);
            setError("Banner not updated");
        }

        setAddBannerShow(!addBannerShow);
    }
 
    addBannerShow ? document.body.classList.add("fake-overly") : document.body.classList.remove("fake-overly");

    return (
        <motion.section 
            className="banner"
            intial= {
                {width: 0} 
            }
            animate= {
                {width: "100%"} 
            }
            exit= { 
                {x: window.innerWidth, transition: { duration: 0.3 }} 
            } 
        > 
            <Container> 
                    <Row className="align-items-center">
                        <Col md="8">
                            <div className="banner__content">
                                { loading ? <div className="skeleton title"></div> : <h1 className="title">{ bannerTitle }</h1>}
                                { loading ? <div className="skeleton content"></div> : <div dangerouslySetInnerHTML={ {__html: bannerContent} } ></div>}

                                { loading ? <div className="skeleton btn-group"></div> : <div className="btn-group">
                                    <NavLink to="/about" className="btn">{ bannerBtn }</NavLink>
                                    { ( auth.lastNotifiedUid === "jZGXrap732aDZLOBoG2SyjOzK252" ) && !addBannerShow && <Button onClick={()=> setAddBannerShow(!addBannerShow) } variant="" >Update Content</Button> }
                                </div> }

                                {addBannerShow && <>
                                    <form className="update-content" onSubmit={writeToBanner}>
                                        <input type="text" value={ bannerTitle } onChange={(e) => setBannerTitle(e.target.value)} />  
                                        <textarea type="text" value={ bannerContent } onChange={(e) => setBannerContent(e.target.value)} /> 
                                        <input type="text" value={ bannerBtn } onChange={(e) => setBannerBtn(e.target.value)} />  
                                        <input type="text" value={ bannerImg } onChange={(e) => setBannerImg(e.target.value)} />  

                                        {error && <p className="errror">{error}</p>}
                                        <div className="btn-group">
                                            <Button disabled={ loading } type="submit" variant="" >Update Content</Button> 
                                            <Button onClick={()=> setAddBannerShow(false) } variant="" >Cancel</Button>
                                        </div>
                                    </form> 
                                </>}
                            </div>
                        </Col>

                        <Col md="4">
                            { loading ? <div className="skeleton banner__media"></div> :  <div className="banner__media">
                                    <Image src={ bannerImg } alt={ bannerTitle } fluid /> 
                                </div> 
                            }
                        </Col>
                    </Row> 
            </Container> 
        </motion.section>
    )
}

export default Home;