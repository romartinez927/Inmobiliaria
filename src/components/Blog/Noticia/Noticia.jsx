import React from 'react'
import "./noticia.css"

function Noticia(props) {
  return (
    <div className="card my-2 col-sm-5 col-md-5 px-0">
      <a href="/blog/nota" className='noticia-link'>
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body">
          <div className='d-flex justify-content-between'>
          <p className='my-1 fs-6'>{props.category}</p>
          <p className='my-1 fs-6'>{props.date}</p>
          </div>
          <h4 className="card-title fs-5">{props.title}</h4>
          <p className="card-text" style={{fontSize: "1rem"}}>{props.text}</p>
        </div>
      </a>
    </div>
  )
}

export default Noticia