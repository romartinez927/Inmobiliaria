import React from 'react'
import { useState } from 'react';
import { servicios } from '../../data.js';
import "./servicios.css"
import Pagination from '../../components/Pagination/Pagination.jsx';
import CardServicios from '../../components/Servicios/Card/CardServicios.jsx';

function Servicios() {
    const [localidadSeleccionada, setLocalidadSeleccionada] = useState('Ingresa ciudades o barrios');
  return (
    <div className='pt-4'>
        <div className='search-box col-md-5 col-sm-12 mx-auto px-4'>
            <form className="d-flex search-form" role="search">
                <input className="form-control me-2 search-text" type="search" placeholder="Search" aria-label="Search" />
                <button className="search-button" type="submit">Buscar</button>
            </form>
        </div>
        <div className="container-fluid">
            <div className='d-flex row gap-3 justify-content-center py-3 mx-1'>
                {
                    servicios.map(({img, title, tag, ciudad}, index) => {
                        return (
                            <CardServicios img={img} title={title} tag={tag} ciudad={ciudad}/>
                        )   
                    })
                } 
            </div>
        </div>
        <Pagination/>
    </div>
  )
}

export default Servicios