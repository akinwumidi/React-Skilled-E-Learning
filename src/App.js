import './App.css';
import { Header, Slimcards } from './containers'
import { Nav, Footer } from './components'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Slimcards />
      <Footer />
    </div>
  );
}

export default App;
