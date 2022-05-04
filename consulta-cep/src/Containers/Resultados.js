function Resultados(props){
  const goTo = props.goTo;
  const cepMask = props.cepMask;
  const result = props.result;
  const keys = Object.keys(result);
  const elements = keys.map(key => (
    <span key={key}><b>{key}: </b>{result[key]}</span>
  ))
  return <>
    <p>Resultados para o CEP {cepMask(result.cep)}</p>
    {elements}
    <button onClick={() => goTo("PESQUISA")}>NOVA CONSULTA</button>
  </>
}

/*
<span><b>RUA: </b> Rua José Clemente</span>
<span><b>CIDADE: </b> Maringá</span>
*/
  

export default Resultados;