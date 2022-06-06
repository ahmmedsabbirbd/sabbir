import copy from "copy-to-clipboard";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";

const EidMubarak = ()=> { 
    document.body.classList.add("is-animation-page");

    const navigate = useNavigate();
    const [ copyed, setCopyed ] = useState(false); 
    const [ copyUrl, setCopyUrl ] = useState(false); 
    const [ eidSmsEdit, setEditSmsEdit ] = useState(false); 
    const [ searchParam, setSearchParam ] = useSearchParams();
    const [ name, setName ] = useState(searchParam.get("name")); 
    const [ description, setDescription ] = useState(searchParam.get("description")); 

    const OnSubmitSms = (e)=> {
        e.preventDefault();
        setSearchParam({name: name, description: description});

        setEditSmsEdit(false);  
        setCopyUrl(true);
    }

    const BackPage =  <>
        <Button disabled variant="" onClick={()=> navigate("/animation") }>Back</Button>
        <Button variant="" onClick={()=> { setEditSmsEdit(true); setCopyUrl(false); setCopyed(false) } }>Create</Button> 
        {copyUrl && <Button variant="" onClick={()=> { copy(window.location.href); setCopyed(true) }  }> {copyed ? "Copyed" : "Copy" }</Button>}
    </>;

    const Back = <>
        <Button variant="" onClick={()=> setEditSmsEdit(false) }>Back</Button>
        <Button variant="" type="submit">Save</Button>
    </>;

    return (
        <section className="eid-mubarak">  
            <h1>Eid Mubarak</h1>
            <p>{description}</p>
            <h2 className="name">{name}</h2>

            { eidSmsEdit && (
                <form className="eid-sms-edit" onSubmit={OnSubmitSms}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" onChange={ (e)=> setName(e.target.value) } placeholder={name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Eid Sms</label>
                        <textarea id="description" cols="30" rows="5" maxLength={300} onChange={ (e)=> setDescription(e.target.value) } value={description}></textarea>

                    </div>
                    {eidSmsEdit && <div className="btn-group">{ Back }</div> }
                </form>
            )}

            { eidSmsEdit ? "" : <div className="btn-group">{BackPage}</div> }  
        </section>
    )
}

export default EidMubarak;