import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


const App = () => {
  const props = {
    title: 'Bienvenidos a la Tienda Virtual',
    props:'2'
  }

  return (
      <div className="App">
        <NavBar />
        <ItemListContainer {...props}/>
      </div>
  );
}

export default App;
