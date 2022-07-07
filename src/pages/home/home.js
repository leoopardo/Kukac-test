import { Link } from "react-router-dom"
import "./styles.modules.css"
export function Home() {
    return ( 
        <section class="page">
           <Link to="/solucao-1"><button className="solucao">Solução 1</button></Link> 
           <Link to="/solucao-2"><button className="solucao">Solução 2</button></Link> 
           <Link to="/solucao-3"><button className="solucao">Solução 3</button></Link> 
           <Link to="/solucao-4"><button className="solucao">Solução 4</button></Link> 
        </section>
     );
}
