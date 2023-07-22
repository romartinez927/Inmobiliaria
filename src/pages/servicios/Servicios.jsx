import React from 'react'
import { useState } from 'react';
import { servicios } from '../../data.js';
import "./servicios.css"
import Pagination from '../../components/Pagination/Pagination.jsx';

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
                            <div key={index} className="card rounded card-servicios col-md-3 mx-2 px-0 my-2">
                                <a href="/" className='noticia-link'>
                                    <img src={img} className="card-img-top" height="200" alt={title} style={{objectFit: "cover"}}/>
                                    <div className="card-body">
                                        <p>{tag}</p>
                                        <p className='fw-medium mt-1 mb-2' style={{fontSize:"1rem"}}>{title}</p>
                                        <p style={{fontSize:".9rem"}}>{ciudad}</p>
                                    </div>
                                </a>
                            </div>
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