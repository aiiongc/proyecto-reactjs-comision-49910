import logo from '../assets/img/logo.png'
import Navbar from './navbar'
const Header = () => {

    return (
        <header>
            <img className='logo' src={logo} alt="logo" />
            <Navbar />
            
        </header>
    )

}
export default Header