import React from 'react';
import styles from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  // acá va tu código
    // Esta no es buena practica de desarrollo con react
  function onSearchWithValue(){
    if(typeof onSearch === "function"){
      const input = document.getElementById("inputSearch");
      onSearch(input.value);
    }
  }
  return (
  <div className={styles.contenedor}>
    <input className={styles.input} type="text" placeholder='Ciudad...' id='inputSearch'/>
    {/* tambien se podria hacer onClick = {() => onSearch(argumento)} */}
    <button className={styles.btn} onClick={onSearchWithValue}>Agregar</button>
  </div>
  )
};