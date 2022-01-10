import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
    <div>
      <button onClick={props.onClose}>X</button>
      <div>
        <h1>{props.name}</h1>
        <div>
          <div>
            <h2>Min</h2>
            <h2>{props.min}</h2>
          </div>
          <div>
            <h2>Max</h2>
            <h2>{props.max}</h2>
          </div>
          {/* Cuando en un atributo se colocan llaves ya no es necesario colocar las comillas */}
          <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="Imagen de clima"/>
        </div>
      </div>
    </div>
    )
};