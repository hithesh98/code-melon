import React, {Component} from 'react';
import {CardItems} from './CardItems';
import './Cards.css'

class Cards extends Component {

    render() {
        return(
            <section className="card-list">
                {CardItems.map((item, index) => {
                    return(
                        <article className='card'>
                            <header className="card-header">
                                <p key={index}>
                                    {item.date}
                                </p>
                                <h2>{item.header}</h2>
                            </header>
                        </article>
                    )
                })}
            </section>
        )
    }

}

export default Cards;