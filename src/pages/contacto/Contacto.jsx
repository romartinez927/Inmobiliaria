import React from 'react'
import "./contacto.css"
import { useState } from 'react';
import ContactForm from '../../components/Contacto/ContactForm';

function Contacto() {

  return (
    <div className="container-fluid container-xl pt-4 pb-4">
      <div className='d-flex row gap-5 justify-content-evenly align-items-center'>
        <div className='col-md-4 col-12'>
          <h3 className='mb-0'>Contacto</h3>
          <svg className='mb-2' width="33" height="6" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#FE4F70"></stop><stop offset="100%" stopColor="#FFA387"></stop></linearGradient></defs><path d="M33 1c-3.3 0-3.3 4-6.598 4C23.1 5 23.1 1 19.8 1c-3.3 0-3.3 4-6.599 4-3.3 0-3.3-4-6.6-4S3.303 5 0 5" stroke="url(#gradient)" strokeWidth="2" fill="none"></path></svg>
          <p className='mt-2'>Si tienes alguna pregunta, comentario o sugerencia, por favor no dudes en ponerte en contacto con nosotros a través del formulario que se encuentra a continuación. </p>
          <p>Estaremos encantados de ayudarte en lo que necesites.</p>
          <div className='d-flex gap-2'>
            <p><i className="fa-solid fa-phone pe-2"></i>15-6577-6756</p>
          </div>
          <div className='d-flex gap-2'>
            <p><i className="fa-solid fa-envelope pe-2"></i>contacto@magazineinmobiliario.com.ar</p>   
          </div>
        </div>
        <ContactForm/>
      </div>
    </div>
  )
}

export default Contacto