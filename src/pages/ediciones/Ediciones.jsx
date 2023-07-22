import React from 'react'
import Propiedad from '../../components/Propiedades/Propiedad/Propiedad'

function Ediciones() {
  return (
    <div className='pb-4'>
      <div className='d-flex justify-content-center text-center py-4'>
        <h3 className='border border-3 rounded py-2' style={{width:"300px"}}>Ediciones</h3>
      </div>
      <div className='container-fluid'>
        <div className='row text-center d-flex justify-content-center'>
          <div className="col-md-4 col-sm-12">
            <h4>Última Edición</h4>
            <p>Edición Digital Julio 2023</p>
            <a href="http://magazineinmobiliario.com.ar/revista-online/2023/julio/" target="_blank"> 
              <img src="../src/images/edicion.png" width="200" alt=""/>
            </a>
          </div>
          <div className="col-md-4 col-sm-12">
            <h4>Edición Pasada</h4>
            <p>Edición Junio 2023</p>
            <a href="http://magazineinmobiliario.com.ar/revista-online/2023/julio/" target="_blank">
              <img src="../src/images/edicion.png" width="200" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ediciones