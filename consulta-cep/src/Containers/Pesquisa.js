import {useState, useEffect} from 'react'
import consultarCep from 'cep-promise'
import CEPDados from '../Components/CEPDados';

function translate(cepDados){
  return { 
    "CIDADE": cepDados.city,
    "BAIRRO": cepDados.neighborhood,
    "LOGRADOURO": cepDados.street,
    "ESTADO": cepDados.state
  }
}

function Pesquisa(props){
  const goTo = props.goTo;
  const cepMask = props.cepMask;
  const setResultado = props.setResultado;
  const setErrorMessage = props.setErrorMessage;
  const ticket = props.ticket
  const [cepNumber,setCepNumber] = useState("");
  const [cepFavorito, setCepFavorito] = useState(() => {
    const storedCep = localStorage.getItem("cepFavorito");
    return storedCep || "";
  });
  const [cepDados, setCepDados] = useState({});

  useEffect(() => {
    localStorage.setItem("cepFavorito", cepFavorito);
    consultarCep(cepFavorito)
      .then(resultado => setCepDados(resultado))
      .catch(err => setCepDados({"ERRO": err.message}))
  },[cepFavorito]);

  function handleChange(event){
    const value = event.target.value;
    setCepNumber(cepMask(value));
  }

  function clear(){
    setCepNumber("");
  }

  function handleSearch(){
    ticket.current++;
    const currentTicket = ticket.current;
    goTo("CARREGANDO");
    consultarCep(cepNumber.replace(/[^\d]/g, ''))
      .then(result => currentTicket == ticket.current && handleSuccess(result))
      .catch(err => currentTicket == ticket.current && handleError(err))
  }

  function handleSuccess(cepDados){
    const resultado = translate(cepDados);
    setResultado(resultado);
    goTo("RESULTADOS");
  }

  function handleError(err){
    const errorMessage = err.message;
    setErrorMessage(errorMessage);
    goTo("ERRO");
  }

  function handleAdicionarFavorito(){
    setCepFavorito(cepNumber);
  }

  return <>
    <p>Qual CEP você deseja pesquisar?</p>
    
    <input value={cepMask(cepNumber)} onChange={handleChange} maxLength={9}/>
    <button onClick={handleSearch}>CONSULTAR</button>
    <button onClick={handleAdicionarFavorito}>SALVAR FAVORITO</button>
    <p>Favorito: {cepFavorito}</p>
    <CEPDados cepDados={translate(cepDados)}/>
  </>
}

export default Pesquisa;