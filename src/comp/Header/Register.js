import React, {useState} from 'react';

export default function Register() {
    const [formData, setformData] = useState({        
        email:"",        
        sifre:""    
    });

    const { email, sifre } = formData;

    const onChange = e => setformData({...formData, [e.target.name]: e.target.value});
    
    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <div className="register">
            <form className="form" onSubmit={e => onSubmit(e)}> 
            <label htmlFor="">E Mail</label>              
            <input 
            type="email" 
            name="email" 
            id="email" 
            value={email}
            onChange={e => onChange(e)}
            required/>
            <br/>
            <label htmlFor="sifre">Şifre</label>            
            <input 
            type="password" 
            name="sifre" 
            id="sifre" 
            value={sifre}
            onChange={e => onChange(e)}
            required/>
            <br/>
            <input type="submit" value="Gönder" />
            </form>
        </div>
    )
}