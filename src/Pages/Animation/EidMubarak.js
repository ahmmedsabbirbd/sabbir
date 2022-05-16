import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';  
import { useNavigate, useSearchParams } from 'react-router-dom';

const EidMubarak = ()=> { 
    document.body.classList.add('is-animation-page')
    const [ searchParam, setSearchParam ] = useSearchParams();
    const navigate = useNavigate();
    const [ name, setName ] = useState(searchParam.get('name')); 
    const [ description, setDescription ] = useState(searchParam.get('description')); 
    const [ eidSmsEdit, setEditSmsEdit ] = useState(false); 
 
    const OnHandleBackPage = ()=> {
        document.body.classList.remove('is-animation-page')
        navigate('/animation');
    }

    const OnSubmitSms = (e)=> {
        e.preventDefault();
        setSearchParam({name: name, description: description});
        setEditSmsEdit(false);
    }

    const BackPage =  <><button onClick={OnHandleBackPage}>back</button> <button onClick={()=> setEditSmsEdit(true) }>+</button></>;
    const Back = <><button onClick={()=> setEditSmsEdit(false) }>back</button> <button type='submit'>Save</button></>;

    return (
        <section className='blog'> 
            <Container >
                <Row >
                    <Col>
                        <h2>Eid Mubarak</h2>
                        <p>{description}</p>
                        <h1>{name}</h1>

                        { eidSmsEdit && (
                            <form className='eid-sms-edit' onSubmit={OnSubmitSms}>
                                <div className='form-group'>
                                    <label htmlFor='name'>Name</label>
                                    <input type='text' className='form-control' id='name' onChange={ (e)=> setName(e.target.value) } placeholder={name} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='description'>Eid Sms</label>
                                    <input type='text' className='form-control' id='description' onChange={ (e)=> setDescription(e.target.value) } placeholder={description} />
                                </div>
                                {eidSmsEdit && Back }
                            </form>
                        )}

                        { eidSmsEdit ? '' : BackPage } 
                    </Col> 
                </Row>
            </Container>  
        </section>
    )
}

export default EidMubarak;