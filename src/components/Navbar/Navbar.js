import React, { Component } from "react";
import {MenuItems} from './MenuItems.js'

class Navbar extends Component {
    render(){
        return(
            <nav className='navbar-items'>
                <h1 className='navbar-title'>Byo</h1>
                <div className='navbar-log'>

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