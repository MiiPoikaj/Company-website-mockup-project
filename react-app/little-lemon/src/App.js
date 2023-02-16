import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Promotion from './components/Promotion';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Promotion />
      <Card />
    </div>
  );
}

export default App;
