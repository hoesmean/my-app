import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to="/">
                <h3>LOGO</h3>
                </Link>
                
                <ul className="nav-links"> 
                <Link to='/'>
                <li>Home</li>
                </Link>
                
                <Link to='/Login'>
                <li>Login</li>
                </Link>
                
                <Link to='/Register'>
                <li>Register</li>
                </Link>

                <Link to='/CakeOrder'>
                <li>Cake Order</li>
                </Link>

                <Link to='/Order'>
                <li>Order</li>
                </Link>
                </ul>
                

            </nav>
        )
    }
}




