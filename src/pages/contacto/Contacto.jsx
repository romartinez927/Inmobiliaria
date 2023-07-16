import React from 'react'
import "./contacto.css"
import { useState } from 'react';
import ContactForm from '../../components/Contacto/ContactForm';

function Contacto() {

  return (
    <div className='d-flex mx-5 mt-5 gap-5 justify-content-center'>
      <div className='col-4'>
        <h4>Contacto</h4>
        <p>Si tienes alguna pregunta, comentario o sugerencia, por favor no dudes en ponerte en contacto con nosotros a través del formulario que se encuentra a continuación. Estaremos encantados de ayudarte en lo que necesites.</p>
        <p>15-6577-6756</p>
        <p>contacto@magazineinmobiliario.com.ar</p>
        <p>Iconos</p>      
      </div>
      <ContactForm/>
    </div>
  )
}

export default Contacto