import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Middle from './components/MiddleSection/Middle';
import SupportedBy from './components/SupportedBy/SupportedBy';
import Cards from './components/Cards/Cards';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Home />
      <Middle />
              <Cards />

      <SupportedBy />
    </div>
  </>
  );
}

export default App;
