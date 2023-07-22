import React from 'react'
import "./contacto.css"
import { useState } from 'react';
import ContactForm from '../../components/Contacto/ContactForm';

function Contacto() {

  return (
    <div className="container-fluid py-4">
      <div className='d-flex row py-5 gap-5 justify-content-evenly'>
        <div className='col-md-4 col-12'>
          <h2>Contacto</h2>
          <p>Si tienes alguna pregunta, comentario o sugerencia, por favor no dudes en ponerte en contacto con nosotros a través del formulario que se encuentra a continuación. </p>
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