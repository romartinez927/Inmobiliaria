import React from 'react'
import "./contacto.css"
import { useState } from 'react';
import ContactForm from '../../components/Contacto/ContactForm';

function Contacto() {

  return (
    <div className='d-flex py-5 gap-5 justify-content-center'>
      <div className='col-4'>
        <h2>Contacto</h2>
        <p>Si tienes alguna pregunta, comentario o sugerencia, por favor no dudes en ponerte en contacto con nosotros a través del formulario que se encuentra a continuación. </p>
        <p>Estaremos encantados de ayudarte en lo que necesites.</p>
        <div className='d-flex gap-2'>
          <span class="material-symbols-outlined">
            call
          </span>
          <p>15-6577-6756</p>
        </div>
        <div className='d-flex gap-2'>
          <span class="material-symbols-outlined">
            mail
          </span>
          <p>contacto@magazineinmobiliario.com.ar</p>   
        </div>
      </div>
      <ContactForm/>
    </div>
  )
}

export default Contacto