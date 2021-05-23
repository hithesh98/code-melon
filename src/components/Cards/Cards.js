import React, {Component} from 'react';
import './Cards.css'

class Cards extends Component {

    render() {
        return(
            <section className="card-list">
                {this.props.datalist.map((item, index) => {
                    return(
                        <article className='card'>
                            <header className="card-header">
                                <h2>{item.title}</h2>
                            </header>
                                <div className='card-image'>
                                    <img src={item.imageurl}></img>
                                </div>
                                <ul className='card-techstack'>
                                    {item.techstack.map((tech) => {
                                        return (
                                            <li className='card-tech'>{tech}</li>
                                        )
                                    })}
                                </ul>
                        </article>
                    )
                })}
            </section>
        )
    }

}

export default Cards;