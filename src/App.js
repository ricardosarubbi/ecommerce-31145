import React from 'react'
import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';


const App = () => {
  const props = {
    title: 'Bienvenidos a la Tienda Virtual',
    props:'2'
  }

  const [show, setShow] = useState(true)

  const handleOnAdd = (quantity) => {
    console.log(`se agregaron ${quantity} productos`)
  }

  return (
      <div className="App">
        <NavBar />
        <ItemListContainer {...props} />

        { show ? <Counter initial={0} stock={10} onAdd={handleOnAdd}/> : null }
      </div>
  );
}

export default App;
