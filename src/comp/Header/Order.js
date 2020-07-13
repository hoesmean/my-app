import React, {useState }  from 'react'
import axios from 'axios';
import {Button, TextField, InputLabel,
Select, MenuItem, FormControl } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    },
    selectEmpty: {
    marginTop: theme.spacing(2),
    },
}));


export default function Order () {
    const [formData, setformData] = useState({        
        ad:"",
        tel:"",
        date:"",
        
    });
    
    const category = [ 'garden', 'temper'];
    
    const classes = useStyles();
    
    const { ad, date, tel, cakes } = formData;
    
    
    const handleChange = e => 
    setformData({...formData,  [e.target.name]: e.target.value});
    
    

    const onSubmit = e => {
        e.preventDefault();
        console.log(formData);
        axios.post('http://localhost:5000/api/order', formData)
        .then(res=> {
            console.log(res);
        })
    }
    
    return (
            <div>
                <form  className="form" onSubmit={e => onSubmit(e)}>
                    <h3>İletişim Bilgileri</h3>
                <TextField required id="aa" 
                label="Ad Soyad" 
                name="ad"
                value={ad}
                type="text"
                onChange={handleChange}
                />
                <br/>
                <TextField style={{margin: 10}} required id="bb" 
                label="Telefon No" 
                name="tel"
                value={tel}
                type="text"
                onChange={handleChange}
                />
                <br/>
                
                <TextField style={{margin: 10}} required id="cc" 
                label="Pasta Tarihi"
                type="date"
                name="date"
                value={date}
                onChange={handleChange}
                InputLabelProps={{
                    shrink: true,
                }}
                />
                <h3>Pasta Bilgileri</h3>
                <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={cakes}
        onChange={handleChange}
        name="cakectg"
        >
            {category.map(cake =>
            <MenuItem  value={cake} key={cake.toString()} >{category}</MenuItem>
            )}
        </Select>
      </FormControl>
            
      
            
                
                
                <br/>
                <Button type="submit" variant="contained" color="primary">
                Kaydet
                </Button>                
                </form>
            </div>
        )
    }


