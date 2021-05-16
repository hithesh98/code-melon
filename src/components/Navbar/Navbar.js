import React, { Component } from "react";
import {MenuItems} from './MenuItems.js';
import './Navbar.css'

class Navbar extends Component {
    state = {closebar:false}

    handleMenuClick = () => {
        this.setState({closebar: !this.state.closebar})
    }

    render(){
        return(
            <nav className='navbar-items'>
                <h1 className='navbar-title'>Byo</h1>
                <div className='navbar-logo'>

                </div>
                <div className='menu-icon' onClick={this.handleMenuClick}>
                    <i class= {this.state.closebar ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className={item.cName} href= {item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        );
    }
}

export default Navbar;  