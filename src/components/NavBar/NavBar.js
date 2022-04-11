import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getCategories } from '../../asyncmock'

const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then(categories => {
      setCategories(categories)
    })
  }, [])

  return (
      <nav className="NavBar" >
        <Link to='/'>
            <h3>Richard's MarketPlace</h3>
        </Link>
        <div className="Categories">
          {/* <button className='Option'>Celular</button>
          <button className='Option'>Tablet</button>
          <button className='Option'>Notebook</button> */}
          {/* <Link to='/list' className='Option'>List</Link>
          <Link to='/detail' className='Option'>Detail</Link> */}
          {/* <NavLink to='/list' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>List</NavLink>
          <NavLink to='/detail' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Detail</NavLink>
          <NavLink to='/nosedonde' className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>OTRO</NavLink> */}
          { categories.map(cat => <NavLink key={cat.id} to={`/category/${cat.id}`}
            className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}
          >{cat.description}</NavLink>)}
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar