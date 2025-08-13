
import './App.css';
import Cartao from './components/Cartao';
import Header from './components/Header';
import Footer  from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Cartao nome="Fulano" prof="Médico" desc="Olá, Sou o fulano" foto = "https://placehold.co/150"/>
      <Footer />
    </div>
  );
}

export default App;
