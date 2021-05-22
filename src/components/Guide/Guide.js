import React, {Component} from 'react';
import './Guide.css'

class Guide extends Component {
    render() {
        return(
            <div>
                <ul className='guide'>
                    <li>
                        <div className='guide-list-wrap'>
                            <div className='guide-number'>1</div>
                            <h2 className='guide-title'>Pick a project</h2>
                            <p className='guide-description'></p>
                        </div>
                    </li>
                    <li>
                        <div className='guide-list-wrap'>
                            <div className='guide-number'>2</div>
                            <h2 className='guide-title'>Build and learn</h2>
                            <p className='guide-description'></p>
                        </div>
                    </li>
                    <li>
                        <div className='guide-list-wrap'>
                            <div className='guide-number'>3</div>
                            <h2 className='guide-title'>Complete more complex projects</h2>
                            <p className='guide-description'></p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Guide;