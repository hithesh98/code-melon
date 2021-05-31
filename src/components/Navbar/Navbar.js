import React, { Component } from "react";
import {MenuItems} from './MenuItems.js';
import './Navbar.css'
import {Button} from '../Button/Button'
import logo from './watermelon.png'

class Navbar extends Component {
    state = {closebar:false}

    handleMenuClick = () => {
        this.setState({closebar: !this.state.closebar})
    }

    render(){
        const {onRouteChange} = this.props
        return(
            <nav className='navbar-items'>
                <div className='navbar-logo'>
                    <a href='#'>
                        <img src={logo} alt='logo'/>
                    </a>
                </div>
                <h1 className='navbar-title'>Code Melon</h1>
                <div className='menu-icon' onClick={this.handleMenuClick}>
                    <i class= {this.state.closebar ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.closebar ? 'nav-menu active' : 'nav-menu'}>
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
                <Button onClick={() => onRouteChange(true)} > Join Pro 🔒</Button>
            </nav>
        );
    }
}

export default Navbar;  