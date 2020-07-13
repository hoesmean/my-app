import React, {useState} from 'react'

export default function Login() {
    const [formData, setformData] = useState({        
        email:"",        
        sifre:""    
    });

    const { email, sifre } = formData;

    const onChange = e => setformData({ ...formData, [e.target.name]: e.target.value });
    
    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className="Login">
            <form className="form" onSubmit={e => onSubmit(e)}>            
            <label htmlFor="email">E Mail</label>              
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
            minLength="6"
            onChange={e => onChange(e)}
            required/>
            <br/>
            <input type="submit" value="Gönder" />
            </form>
        </div>
    )
}