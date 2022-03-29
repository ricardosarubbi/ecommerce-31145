import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div>
                <h3>Comercio Electrónico</h3>
            </div>
            <div>
                <button>Zapatillas</button>
                <button>Pantalones</button>
                <button>Camisas</button>
                <button>Remeras</button>
            </div>
            <div>
                <CartWidget />
            </div>
            
        </nav>
    )
}

export default NavBar