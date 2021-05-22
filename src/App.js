import './App.css';
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import Guide from './components/Guide/Guide'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Guide />
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}

export default App;
