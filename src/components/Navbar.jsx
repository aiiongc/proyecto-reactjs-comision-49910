import CartWidget from "./cartWidget"
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
    <nav>
        <ul className="navbar">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/tienda/discos">DISCOS</Link></li>
            <li><Link to="/tienda/vinilos">VINILOS</Link></li>
            <li><Link to="/nosotros">NOSOTROS</Link></li>
            <li><Link to="/contacto">CONTACTO</Link></li>
            <CartWidget />
        </ul>
    </nav>
    )

}

export default Navbar