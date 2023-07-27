import React from 'react'
import { useState } from 'react';
import { ciudades, tiposPropiedad } from '../../../data.js';
import "./filtros.css"

function Filtros() {
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState('Ingrese ciudad o barrio');
    const [tipoSeleccionado, setTipoSeleccionado] = useState('Propiedad');

  return (
    <div className='d-flex row justify-content-center gy-2 pt-3 pb-2'>
      <div class="dropdown d-flex justify-content-md-end justify-content-center col-md-4 col-sm-10">
        <button class="dropdown-toggle filtros-propiedades" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {localidadSeleccionada}
        </button>
        <ul class="dropdown-menu">
          {
              ciudades.map(ciudad => (
                <li key={ciudad} >
                  <button class="dropdown-item" type="button">{ciudad}</button>
                </li>   
              ))
          }
        </ul>
      </div>
      <div class="dropdown d-flex justify-content-md-start justify-content-center col-md-3 col-sm-10">
        <button class="dropdown-toggle filtros-propiedades" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {tipoSeleccionado}
        </button>
        <ul class="dropdown-menu">
          {
              tiposPropiedad.map(tipo => (
                <li key={tipo} >
                  <button class="dropdown-item" type="button">{tipo}</button>
                </li>  
              ))
            } 
        </ul>
      </div>
    </div>
  )
}

export default Filtros