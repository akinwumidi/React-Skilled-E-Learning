import './App.css';
import { Header, Slimcards } from './containers'
import { Nav, Footer } from './components'

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
        <Header />
      </header>
      <Slimcards />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
