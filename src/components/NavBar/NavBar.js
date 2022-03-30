import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return(
        <nav className="NavBar">
            <div>
                <h3>Richard's Apparels</h3>
            </div>
            <div>
                <button style={{ borderRadius: '10%',backgroundColor: 'darkblue',color: '#FFFFFF', marginRight: 15}}>Zapatillas</button>
                <button style={{ borderRadius: '10%',backgroundColor: 'darkblue',color: '#FFFFFF', marginRight: 15}}>Pantalones</button>
                <button style={{ borderRadius: '10%',backgroundColor: 'darkblue',color: '#FFFFFF', marginRight: 15}}>Camisas</button>
                <button style={{ borderRadius: '10%',backgroundColor: 'darkblue',color: '#FFFFFF', marginRight: 15}}>Remeras</button>
                <button style={{ borderRadius: '10%',backgroundColor: 'darkblue',color: '#FFFFFF', marginRight: 15}}>Vestidos</button>
                <button style={{ borderRadius: '10%',backgroundColor: 'darkblue',color: '#FFFFFF', marginRight: 15}}>Mallas</button>
            </div>
            <div>
                <CartWidget />
            </div>
            
        </nav>
    )
}

export default NavBar