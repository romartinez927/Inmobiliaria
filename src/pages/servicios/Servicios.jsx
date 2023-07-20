import React from 'react'
import { useState } from 'react';
import { servicios } from '../../data.js';
import "./servicios.css"
import Pagination from '../../components/Pagination/Pagination.jsx';

function Servicios() {
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState('Ingresa ciudades o barrios');
  return (
    <div className='px-5 pt-4'>
        <div className='search-box col-md-5 col-sm-12 mx-auto px-4'>
            <form className="d-flex search-form" role="search">
                <input className="form-control me-2 search-text" type="search" placeholder="Search" aria-label="Search" />
                <button className="search-button" type="submit">Buscar</button>
            </form>
        </div>
        <div className='d-flex row gap-4 justify-content-center py-3'>
            {
                servicios.map(({img, title, tag, ciudad}, index) => {
                    return (
                        <div className="card" style={{width:"18rem"}}>
                            <img src={img} className="card-img-top" alt="..." height="150" style={{objectFit:"cover"}}/>
                            <div className="card-body">
                                <h5 className="card-title fw-semibold">{title}</h5>
                                <p className="card-text">Some quick example text to build on the card title.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">{ciudad}</li>
                            </ul>
                        </div>
                    )   
                })
            } 
        </div>
        <Pagination/>
    </div>
  )
}

export default Servicios