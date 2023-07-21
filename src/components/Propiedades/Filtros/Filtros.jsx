import React from 'react'
import { useState } from 'react';
import { ciudades, tiposPropiedad } from '../../../data.js';
import "./filtros.css"

function Filtros() {
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState('Ingresa ciudades o barrios');
    const [tipoSeleccionado, setTipoSeleccionado] = useState('Propiedad');

  return (
    <div className='d-flex px-3 pt-3 pb-2 gap-2'>
       <div>
        <select id="localidad" className="custom-select pe-5" value={localidadSeleccionada} onChange={e => setLocalidadSeleccionada(e.target.value)}>
          <option value="Ingresa ciudades o barrios" disabled hidden>Ingresa ciudades o barrios</option>
          {
            ciudades.map(ciudad => (
                <option key={ciudad} value={ciudad}>
                    {ciudad}
                </option>
            ))
          }
        </select>
      </div>
      <div>
        <select id="tipo" className="custom-select pe-4" value={tipoSeleccionado} onChange={e => setTipoSeleccionado(e.target.value)}>
            <option value="Propiedad" disabled hidden>Propiedad</option>
            {
              tiposPropiedad.map(tipo => (
                  <option key={tipo} value={tipo}>
                      {tipo}
                  </option>
              ))
            } 
        </select>
      </div>
    </div>
  )
}

export default Filtros