import { useState, useEffect} from "react";
import axios from "axios";
import "./styles.modules.css"
export function CEP() {
    // state do formulario
    const [cepForm, setCepForm] = useState({
        cep1: "",
        cep2: "",
        cep3: "",
        cep4: "",
        cep5: ""
    });
    //state do formulario em array
    const [formArr, setFormArr] = useState([]);

    //state dos endereços consumidos da API
    const [endereco, setEndereco] = useState([]);

    //atualiza a array do formulario toda vez que ele é alterado
    useEffect(() =>{
        setFormArr(Object.entries(cepForm));
    }, [cepForm])

    //função para capturar mudanças do formulario
    function HandleChange(e){
        setCepForm({...cepForm, [e.target.name]: e.target.value})
    };

    //função que consome a API 
    async function searchCep(e){
        try{
            e.preventDefault();
            const enderecosArr = [];
            for(let i = 0; i < formArr.length; i++){
                if(formArr[i][1] === ""){
                    continue
                }
                const response = await axios.get(`https://viacep.com.br/ws/${formArr[i][1]}/json/`);
                enderecosArr.push(response.data);
            };
            setEndereco(enderecosArr);
            console.log(endereco);
        } catch(err){
            e.preventDefault();
            console.log(err)
        }

    }
    return ( 
        <section className="solucao-4">
        <h1 className="palindromos-h1">Pesquisa CEP</h1>
        <p className="palindromos-p">Faça uma pesquisa de até 5 CEPs simultaneamente e consulte endereços de todo o Brasil.</p>
        <form className="cep-form" onSubmit={searchCep}>
            <label htmlFor="cep1" className="palindromos-p"> CEP 1</label>
            <input
                className="cep-input"
                name="cep1"
                placeholder="CEP"
                type="Number"
                value={cepForm.cep1}
                onChange={HandleChange}
            />
            <label htmlFor="cep2" className="palindromos-p"> CEP 2</label>
            <input
               className="cep-input"
                name="cep2"
                placeholder="CEP"
                type="Number"
                value={cepForm.cep2}
                onChange={HandleChange}
            />
            <label htmlFor="cep3" className="palindromos-p"> CEP 3</label>
            <input
                className="cep-input"
                name="cep3"
                placeholder="CEP"
                type="Number"
                value={cepForm.cep3}
                onChange={HandleChange}
            />
            <label htmlFor="cep4" className="palindromos-p"> CEP 4</label>
            <input
                className="cep-input"
                name="cep4"
                placeholder="CEP"
                type="Number"
                value={cepForm.cep4}
                onChange={HandleChange}
            />
            <label htmlFor="cep5" className="palindromos-p"> CEP 5</label>
            <input
                className="cep-input"
                name="cep5"
                placeholder="CEP"
                type="Number"
                value={cepForm.cep5}
                onChange={HandleChange}
            />  
            <button type="submit" onClick={searchCep} className="procurar">search</button> 
        </form>
            <section className="endereco">
                {endereco.map((currentEndereco) =>{
                    return (
                        
                            <div className="card-endereco">
                                <small>{currentEndereco.cep}</small>
                                <h2>{currentEndereco.localidade} - {currentEndereco.uf}</h2>
                                <h3>{currentEndereco.bairro} / {currentEndereco.logradouro}</h3>
                            </div>  
                    );
                })}
            </section>
        </section> 
    );
}

