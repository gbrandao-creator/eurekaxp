import './App.css';
import {useState, useRef} from 'react';
import Pesquisa from './Containers/Pesquisa'
import Carregando from './Containers/Carregando'
import Resultados from './Containers/Resultados'
import Erro from './Containers/Erro'

function App() {

  const [nomeTela, setNomeTela] = useState("PESQUISA");
  const [resultado, setResultado] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const ticket = useRef(1);

  function goTo(nomeTela){
    setNomeTela(nomeTela);
  }

  function cepMask(str){
    str = str.replace(/[^\d]/g, '');
    str = str.replace(/(\d{5})(\d)/g, '$1-$2');
    return str;
  }

  return <div>
    <div className="App">
      <header className="App-header">
        {nomeTela == "PESQUISA" ? <Pesquisa goTo={goTo} setResultado={setResultado} setErrorMessage={setErrorMessage} cepMask={cepMask} ticket={ticket}/> : null} 
        {nomeTela == "RESULTADOS" ? <Resultados goTo={goTo} result={resultado} cepMask={cepMask}/> : null} 
        {nomeTela == "ERRO" ? <Erro goTo={goTo} errorMessage={errorMessage}/> : null}
        {nomeTela == "CARREGANDO" ? <Carregando goTo={goTo} ticket={ticket}/> : null}  
      </header>
    </div>
  </div>;
}

export default App;