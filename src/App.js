import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Middle from './components/MiddleSection/Middle';
import SupportedBy from './components/SupportedBy/SupportedBy';
import Footer from './components/Footer/Footer';
import HoverEffects from './components/HoverEffect/HoverEffects'

function App() {
  return (
    <>
    <div className="App">
      <HoverEffects />
      <Navbar />
      <Home />
      <Middle />
      <SupportedBy />
      <Footer />

    </div>
  </>
  );
}

export default App;
