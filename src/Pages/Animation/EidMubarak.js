import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';  
import { useNavigate, useSearchParams } from 'react-router-dom';
import copy from 'copy-to-clipboard';

const EidMubarak = ()=> { 
    document.body.classList.add('is-animation-page')
    const [ searchParam, setSearchParam ] = useSearchParams();
    const navigate = useNavigate();
    const [ copyed, setCopyed ] = useState(false); 
    const [ copyUrl, setCopyUrl ] = useState(false); 
    const [ name, setName ] = useState(searchParam.get('name')); 
    const [ description, setDescription ] = useState(searchParam.get('description')); 
    const [ eidSmsEdit, setEditSmsEdit ] = useState(false); 

    const OnSubmitSms = (e)=> {
        e.preventDefault();
        setSearchParam({name: name, description: description});
        setEditSmsEdit(false);  
        setCopyUrl(true);
    }

    const BackPage =  <>
        <button className='btn' onClick={()=> navigate('/animation') }>Back</button>
        <button className='btn' onClick={()=> { setEditSmsEdit(true); setCopyUrl(false); setCopyed(false) } }>Create</button> 
        {copyUrl && <button className='btn' onClick={()=> { copy(window.location.href); setCopyed(true) }  }> {copyed ? 'Copyed' : 'Copy' }</button>}
        </>;

    const Back = <>
        <button className='btn' onClick={()=> setEditSmsEdit(false) }>Back</button>
        <button className='btn' type='submit'>Save</button>
        </>;

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
                                    <input type='text' id='name' onChange={ (e)=> setName(e.target.value) } placeholder={name} />
                                </div>
                                <div className='form-group'>
                                    <label htmlFor='description'>Eid Sms</label>
                                    <textarea id="description" cols="30" rows="5" maxLength={300} onChange={ (e)=> setDescription(e.target.value) } value={description}></textarea>

                                </div>
                                {eidSmsEdit && <div className='btn-group'>{ Back }</div> }
                            </form>
                        )}

                        { eidSmsEdit ? '' : <div className='btn-group'>{BackPage}</div> } 
                    </Col> 
                </Row>
            </Container>  
        </section>
    )
}

export default EidMubarak;