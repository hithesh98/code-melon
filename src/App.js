import './App.css';
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}

export default App;
