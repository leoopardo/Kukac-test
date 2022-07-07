import "./styles.modules.css"
import logo from "../../img/logo.png"
import { Link } from "react-router-dom"
export function NavBar() {
    return ( 
        <nav className="nav-bar">
            <Link to="/"><img src={logo} alt="logo-kukac" className="logo-kukac"/></Link>
        </nav>
     );
}
