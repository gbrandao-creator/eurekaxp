import {useState} from 'react'
import consultarCep from 'cep-promise'



function Pesquisa(props){
    const goTo = props.goTo;
    const cepMask = props.cepMask;
    const setResultado = props.setResultado;
    const  [cepNumber,setCepNumber] = useState("");
    


    function handleChange(event){
      const value = event.target.value;
      setCepNumber(cepMask(value));
    }

    function clear(){
      setCepNumber("");
    }

    function handleSearch(){
      consultarCep(cepNumber.replace(/[^\d]/g, ''))
        .then(handleSuccess)
        .catch(handleError)
    }
    function handleSuccess(dadosCep){
      setResultado(dadosCep);
      goTo("RESULTADOS")
    }
    function handleError(err){
      console.log("erro)")
    }

    return <>
      <p>Qual CEP você deseja pesquisar?</p>
      <p>Estado atual: {cepNumber}</p>
      <input value={cepMask(cepNumber)} onChange={handleChange} maxLength={9}/>
      <button onClick={clear}>LIMPAR STATE</button>
      <button onClick={handleSearch}>CONSULTAR</button>
    </>
}

export default Pesquisa;