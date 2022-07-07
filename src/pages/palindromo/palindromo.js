import { useState } from "react";
import "./style.modules.css"
export function Palindromo() {
    //state de todos os polindromos
    const [palindromes, setPalindromes] = useState([]);

    //state do formulário
    const [formMinMax, setFormMinMax] = useState({
        min: 0,
        max: 0,
    });

    //função para encontrar os polindromos
    async function isPalindrome(e){
        try{
            e.preventDefault();
        const Palindrome = []
        if(formMinMax.max === 0){
            Palindrome.push("Escolha um valor máximo!");
        }
        for(let i = Number(formMinMax.min); i < Number(formMinMax.max); i++){
            if(i == i.toString().split("").reverse().join("")){
                await Palindrome.push(i);
            }
        };
        await setPalindromes(Palindrome);
        }catch(err){
            console.log(err)
        };
    };

    //função para capturar as mudanças do formulário
    function HandleChange(e){
        setFormMinMax({...formMinMax, [e.target.name]: e.target.value})
    }
    return ( 
        <>
         <form onSubmit={isPalindrome} className="form-palindromo">
            <h1 className="palindromos-h1">Descubra palíndromos</h1>
            <p className="palindromos-p">O que são palíndromos? Palíndromo é um número que permanece igual quando lido de trás para diante. Por extensão, palíndromo é qualquer série de elementos com simetria linear, ou seja, que apresenta a mesma sequência de unidades nos dois sentidos.</p>
            <label htmlFor="min" className="palindromos-p"> Valor mínimo: </label>
            <input
                className="form-palindromo-input"
                name="min"
                placeholder="min"
                type="Number"
                value={formMinMax.min}
                onChange={HandleChange}
            />
            <label htmlFor="max" className="palindromos-p"> Valor máximo: </label>
            <input
                className="form-palindromo-input"
                name="max"
                placeholder="max"
                type="Number"
                value={formMinMax.max}
                onChange={HandleChange}
            />
            <button type="submit" className="procurar-palindromos">Procurar palindromos</button>
         </form> 
         <section className="palindromes-section">
         {palindromes.map((currentPalindrome) =>{
            return (
                <h2>{currentPalindrome}</h2>
            )
         })} 
         </section>
        </>
     );
}
