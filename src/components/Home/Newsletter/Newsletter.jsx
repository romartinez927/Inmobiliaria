import React from 'react'
import "./newsletter.css"

function Newsletter() {
  return (
    <div className='newsletter py-5'>
        <div className='container-xl text-center pb-4'>
            <h3>¡No te pierdas ninguna de nuestras novedades!</h3>
            <p>Suscríbete ahora y recibe todas las actualizaciones directamente en tu bandeja de entrada.</p>
            <form action="" className='form-newsletter d-flex justify-content-center gap-1'>
                <input type="email" name="EMAIL" placeholder="Email" required=""/>
                <button type="submit" className="btn-form-comentarios" value="Sign up">Enviar</button>
            </form>
        </div>
    </div>
  )
}

export default Newsletter