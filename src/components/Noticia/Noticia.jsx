import React from 'react'

function Noticia(props) {
  return (
    <div className="container pt-3">
        <div className="card d-flex flex-row">
            <img src={props.img} className="card-img-top" style={{maxWidth: "270px", maxHeight: "270px"}} alt="Imagen"/>
            <div className="card-body lh-sm">
                <p className='my-1'>{props.category}</p>
                <h4 className="card-title">{props.title}</h4>
                <p className='my-1'>{props.date}</p>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    </div>
    
  )
}

export default Noticia