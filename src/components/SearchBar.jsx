import React from 'react';

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
  <div>
    <input type="text" placeholder='Ciudad...' id='inputSearch'/>
    <button onClick={onSearchWithValue}>Agregar</button>
  </div>
  )
};