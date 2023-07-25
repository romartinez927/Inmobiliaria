import React from 'react'
import "./cardServicios.css"

function CardServicios(props) {
  return (
    <div className="card rounded-3 col-sm-6 px-0" style={{maxWidth: "350px", height: "max-content"}}>
      <a href="/servicios/servicio" className='noticia-link'>
        <div className="img-container">
          <a href="/" className="category-badge">{props.tag}</a>
          <div className='border-top rounded-top'>
            <img src={props.img} className="card-img-top rounded-top" height="230" width="550" alt={props.title}/>
          </div>
        </div>
        <div className="card-body-servicios d-flex flex-column gap-1 border-top">
          <p className='my-1 noticia-autor fw-normal'>{props.ciudad}</p>
          <h4 className="card-title noticia-titulo mt-1 fw-bold efecto-hover">{props.title}</h4>
          <p className="card-text noticia-texto pb-1 fw-medium" style={{fontSize: "1rem"}}>Desde 1970, trabajando con Seriedad, respeto y confianza.</p>
          <div className='border-top d-flex justify-content-between pt-3'>
            <div className='d-flex gap-2 efecto-hover'>
                <i className="fa-regular fa-bookmark mt-1"></i>
                <p className="fs-6">Guardar</p>
            </div>
            <div className='d-flex gap-2 efecto-hover'>
                <i className="fa-solid fa-eye mt-1"></i>
                <p className="fs-6">Visto</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}

export default CardServicios