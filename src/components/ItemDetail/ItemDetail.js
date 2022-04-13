import './ItemDetail.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ButtonCount = ({ onConfirm, stock, initial = 0 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        setCount(count + 1)
         if(count >= stock)  setCount(stock)
    }

    const decrement = () => {
        setCount(count - 1)
        if(count <= 0)  setCount(0)   
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantity, setQuantity] = useState(0) 



    const handleAdd = (count) => {
        console.log('Agregar al carrito')
        setQuantity(count)
    }



    return (
        <article className="CardItem">
            <header className="Header">
     
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
    
                {quantity > 0 ? <Link to='/cart'>Ir al carrito</Link> : <ButtonCount onConfirm={handleAdd} stock={stock}/> } 
            </footer>
        </article>
    )
}

export default ItemDetail