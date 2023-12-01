import CartWidget from "./cartWidget"

const Navbar = () => {

    return (
    <nav>
        <ul class="navbar">
            <li class=""><a href="">HOME</a></li>
            <li class=""><a href="">DISCOS</a></li>
            <li class=""><a href="">VINILOS</a></li>
            <li class=""><a href="">NOSOTROS</a></li>
            <li class=""><a href="">CONTACTO</a></li>
            <CartWidget />
        </ul>
    </nav>
    )

}

export default Navbar