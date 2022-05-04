import './App.css';
import {useState} from 'react';
import Pesquisa from './Containers/Pesquisa'
import Carregando from './Containers/Carregando'
import Resultados from './Containers/Resultados'
import Erro from './Containers/Erro'

function App() {

  const [nomeTela, setNomeTela] = useState("PESQUISA");
  const [resultado, setResultado] = useState({});
  function goTo(nomeTela){
    console.log('Navegando para a tela ${nomeTela}');
    setNomeTela(nomeTela);
  }

  function cepMask(str){
    return str.replace(/^(\d{5})(\d)/g, '$1-$2')
  }

  return <div>
    <div className="App">
      <header className="App-header">
        {nomeTela == "PESQUISA" ? <Pesquisa goTo={goTo} setResultado={setResultado} cepMask={cepMask}/> : null} 
        {nomeTela == "RESULTADOS" ? <Resultados goTo={goTo} result={resultado} cepMask={cepMask}/> : null} 
        {nomeTela == "ERRO" ? <Erro goTo={goTo} errorMessage={"CEP não encontrado"}/> : null}
        {nomeTela == "CARREGANDO" ? <Carregando goTo={goTo}/> : null}  
      </header>
    </div>
  </div>;
}

export default App;