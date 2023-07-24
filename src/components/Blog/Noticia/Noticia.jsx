import React from 'react'
import "./noticia.css"

function Noticia(props) {
  return (
    <div className="card rounded-3 col-sm-6 px-0" style={{maxWidth: "350px"}}>
      <a href="/blog/nota" className='noticia-link'>
        <div className="img-container">
          <a href="/" className="category-badge">{props.category}</a>
          <div className='border-top rounded-top'>
            <img src={props.img} className="card-img-top rounded-top" height="230" width="550" alt={props.title}/>
          </div>
        </div>
        <div className="card-body d-flex flex-column gap-1">
          <div className='d-flex justify-content-start gap-3'>
          <p className='my-1 noticia-autor fw-normal'>Katen Doe</p>
          <i className="fa-solid fa-circle my-auto" style={{fontSize:"4px"}}></i>
          <p className='my-1 noticia-autor fw-normal'>{props.date}</p>
          </div>
          <h5 className="card-title noticia-titulo mt-1 efecto-hover">{props.title}</h5>
          <p className="card-text noticia-texto pb-1 fw-medium" style={{fontSize: "1rem"}}>{props.text}</p>
          <div className='border-top d-flex justify-content-between pt-3'>
            <i className="fa-solid fa-share-nodes fs-5"></i>
            <i className="fa-solid fa-ellipsis fs-5"></i>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Noticia