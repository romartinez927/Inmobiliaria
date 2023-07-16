import React from 'react'
import { useState } from 'react';
import { ciudades, noticias } from '../../data.js';

function Servicios() {
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState('Ingresa ciudades o barrios');
  return (
    <div>
        <div className='pt-3 col-3 mx-5'>
            <select id="localidad" className="custom-select" value={localidadSeleccionada} onChange={e => setLocalidadSeleccionada(e.target.value)}>
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
        <div className='d-flex gap-4 justify-content-center mx-3 pt-4'>
            {
                noticias.map(({img, title}, index) => {
                    return (
                        <div key={index} className="card" style={{width:"18rem"}}>
                            <img src={img} alt={title} className="card-img-top" height="190"/>
                            <div className="card-body lh-sm p-0">
                                <p className="card-title fw-semibold px-2 pt-2">{title}</p>
                                <p className="card-text px-2">Inmobiliarias.</p>
                                <p className='border-top p-2 my-auto'>Villa Ballester</p>
                            </div>
                        </div>
                    )   
                })
            } 
        </div>
    </div>
  )
}

export default Servicios