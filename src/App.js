import './App.scss';
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
      <Footer />
    </div>
  );
}

export default App;
