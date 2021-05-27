import React, {Component} from 'react';
import './Guide.css'

class Guide extends Component {
    render() {
        return(
            <div>
                <h1 className='guide-heading'> How It Works 👨‍💻 </h1>
                <ul className='guide'>
                    <li>
                        <div className='guide-list-wrap'>
                            <div className='guide-number'>1</div>
                            <h2 className='guide-title'>Pick A Project</h2>
                            <p className='guide-description'> Dive straight into building software projects by selecting one from below. There are guided projects at different levels of difficulty, so there is something for everyone.</p>
                        </div>
                    </li>
                    <li>
                        <div className='guide-list-wrap'>
                            <div className='guide-number'>2</div>
                            <h2 className='guide-title'>Build & Learn</h2>
                            <p className='guide-description'> Building a project can be an excellent way to learn. Learning to build can teach you much more about the technology at hand. Plus, it's fun.</p>
                        </div>
                    </li>
                    <li>
                        <div className='guide-list-wrap'>
                            <div className='guide-number'>3</div>
                            <h2 className='guide-title'>Challenge Yourself</h2>
                            <p className='guide-description'> Take on more advanced projects as you gain experience building projects.</p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Guide;