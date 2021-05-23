import './App.css';
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Guide from './components/Guide/Guide'
import {Beginner} from './components/Cards/Beginner'
import {Intermediate} from './components/Cards/Intermediate'
import {Advanced} from './components/Cards/Advanced'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Guide />
      <Cards datalist={Beginner} />
      <Cards datalist={Intermediate}/>
      <Cards datalist={Advanced}/>
    </div>
  );
}

export default App;
