import { useState } from "react";
import "./style.modules.css"
export function Troco() {
    //state de todos os polindromos
    const [trocoEmNotas, setTrocoEmNotas] = useState({
        SemValor: "Escolha o valor da compra e do pagamento!",
        ValorTotal: 0,
        Cem: 0,
        Dez: 0,
        Um: 0
});

    //state do formulário
    const [compraPagamento, setCompraPagamento] = useState({
        valorCompra: 0,
        valorPagamento: 0,
    });

    //função para encontrar os polindromos
    async function CalcularNotas(e){
        try{
            e.preventDefault()
            let TrocoTotal = (compraPagamento.valorPagamento - compraPagamento.valorCompra);
            const notas = [100, 10, 1];
            let troco ={
            "100": 0,
            "10": 0,
            "1": 0
        } 
            for(const nota of notas){
                while(TrocoTotal >= nota){
                    troco[nota] += 1
                    TrocoTotal -= nota
                }
            
            }
            console.log(trocoEmNotas)
            setTrocoEmNotas({
                ValorTotal: (compraPagamento.valorPagamento - compraPagamento.valorCompra),
                Cem: troco[100],
                Dez: troco[10],
                Um: troco[1]

            })
            e.preventDefault();
            
            
        }catch(err){
            console.log(err)
        };
    };

    //função para capturar as mudanças do formulário
    function HandleChange(e){
        setCompraPagamento({...compraPagamento, [e.target.name]: e.target.value})
    }
    return ( 
        <>
         <form onSubmit={CalcularNotas} className="form-palindromo">
            <h1 className="palindromos-h1">Calcule as notas do seu troco</h1>
            <p className="palindromos-p">No caixa da loja só tem notas de: R$: 1; 10 e 100. Calcule quantas notas de cada é necessária para compor o seu troco!!</p>
            <label htmlFor="min" className="palindromos-p"> Valor da compra: </label>
            <input
                className="form-palindromo-input"
                name="valorCompra"
                placeholder="Valor do pagamento"
                type="Number"
                value={compraPagamento.valorCompra}
                onChange={HandleChange}
            />
            <label htmlFor="max" className="palindromos-p"> Valor do pagamento: </label>
            <input
                className="form-palindromo-input"
                name="valorPagamento"
                placeholder="Valor do pagamento"
                type="Number"
                value={compraPagamento.valorPagamento}
                onChange={HandleChange}
            />
            <button type="submit" className="procurar-palindromos">Calcular</button>
         </form> 
         <section className="palindromes-section">
            <h1>{trocoEmNotas.SemValor}</h1>
            <h1>Troco total: R${trocoEmNotas.ValorTotal}</h1>
            <h1>Notas de R$100: {trocoEmNotas.Cem}</h1>
            <h1>Notas de R$10: {trocoEmNotas.Dez}</h1>
            <h1>Notas de R$1: {trocoEmNotas.Um}</h1>
         </section>
        </>
     );
}