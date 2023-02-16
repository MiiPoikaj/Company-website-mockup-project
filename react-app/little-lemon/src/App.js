import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <main>
        {/* your main content goes here */}
      </main>
      <footer>
        {/* your footer goes here */}
      </footer>
    </div>
  );
}

export default App;
