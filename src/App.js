import './App.css';
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Guide from './components/Guide/Guide'
import {Beginner} from './components/Cards/Beginner'
import {Intermediate} from './components/Cards/Intermediate'
import {Advanced} from './components/Cards/Advanced'
import React, { Component } from 'react';
import Join from './components/Join/Join'

class App extends Component {
  state = {isJoin:false}

  onRouteChange = (routevalue) => {
    (routevalue == 'join') 
    ? this.setState({isJoin:true})
    : this.setState({isJoin: false})
  }

  render(){
    return (
      <div className="App">
        <Navbar isJoin={this.state.isJoin} onRouteChange={this.onRouteChange}/>
        {this.state.isJoin 
        ? <Join /> 
        : <div>        
            <Guide />
            <h1 className='projects-heading'> Projects 💡 </h1>
            <Cards datalist={Beginner} />
            <Cards datalist={Intermediate}/>
            <Cards datalist={Advanced}/>
          </div>
        }
      </div>
    );
  }
}

export default App;
