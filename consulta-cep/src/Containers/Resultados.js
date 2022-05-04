import CEPDados from "../Components/CEPDados";

function Resultados(props){
  const goTo = props.goTo;
  //const cepMask = props.cepMask;
  const result = props.result;
  return <>
    <p>Resultados para o CEP {result.cep}</p>
    <CEPDados cepDados ={result}/>
    <button onClick={() => goTo("PESQUISA")}>NOVA CONSULTA</button>
  </>
} 

export default Resultados;