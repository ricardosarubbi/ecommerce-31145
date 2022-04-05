import { useState, useEffect } from 'react'

const Counter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)
 
    useEffect(() => {
        let isActive = true

        setTimeout(() => {
            if(isActive) {
                setCount(0)       
            }
        }, 3000)

        return (() => {
            isActive = false
        })
    })

    useEffect(() => {

    }, [count])


    const decrement = () => {
        setCount(count - 1)
        if (count <= 0) setCount(0);
    }

    const increment = () => {
        setCount(count + 1)
        if (count >= 10) setCount(10);
    }

    return(
        <div>
            <button onClick={decrement}>-</button> 
            <p>{count}</p>
            <button onClick={increment}>+</button>
            <p>Agregar a la compra</p>
        </div>
    )
} 

export default Counter