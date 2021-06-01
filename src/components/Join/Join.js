import React, {Component} from 'react';
import './Join.css';

class Join extends Component {

    render(){
        return(
            <div className='join-section'>
                <div className='join-card'>
                    <h2 className='join-title'>Pro Member Benefits</h2>
                    <img src='https://hithesh98.github.io/image-api/buildyourown/128/god.png'></img>
                    <ul className='join-lists'>
                        <li> 🚀 Keep track of your progress </li>
                        <li> 💻 Integrated Development Environment </li>
                        <li> 🔒 Members only content</li>
                        <li> 📚 Discord learning group</li>
                        <li> 👨‍🎓 Career tracks</li>
                    </ul>
                </div>
                <div className='join-email'>
                    <h3 className='join-email-title'> Reserve your place to be Pro member</h3>
                    <input className='join-input' placeholder='Enter a valid email...'></input>
                    {/* <button>Join</button> */}
                </div>
            </div>
        )
    }

}

export default Join