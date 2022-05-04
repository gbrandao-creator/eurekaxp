import './App.css';
import {useState} from 'react';
import Pesquisa from './Containers/Pesquisa'
import Carregando from './Containers/Carregando'
import Resultados from './Containers/Resultados'
import Erro from './Containers/Erro'

function App() {

  const [numeroTela, setNumeroTela] = useState(0);

  function handleClick(){
    setNumeroTela((numeroTela + 1) % 4) 
  }
  return <div>
    <button onClick={handleClick} >Próxima tela</button>
    {numeroTela == 0 ? <Pesquisa/> : null} 
    {numeroTela == 1 ? <Resultados result={{"RUA": "José Clemente"}}/> : null} 
    {numeroTela == 2 ? <Erro errorMessage={"CEP não encontrado"}/> : null}
    {numeroTela == 3 ? <Carregando/> : null}  
  </div>;
}

export default App;