import React from 'react'
import { useState, useEffect } from 'react';
import "./listadoPropiedades.css"

function ListadoPropiedades() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Función para determinar qué componente renderizar
  const renderComponent = () => {
    if (windowWidth >= 800) {
      return (
      <div className='d-flex px-4 pt-3' style={{fontSize:".9rem",lineHeight:"20px"}}>
        <a href="/propiedades/propiedad" className='propiedad-link'>
          <div className='d-flex justify-content-between gap-2 border propiedad-listado' style={{height:"280px"}}>
            <div className='image-container'>
              <img src="https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" className='responsive-image' alt="" />
            </div>
            <div className='d-flex flex-column p-1 justify-content-between'>
              <div className='d-flex gap-5 pt-1'>
                <p className='fw-medium fs-5 pt-1'>$ 100.000</p>
                <div className='d-flex flex-column border-start px-2' style={{lineHeight:"10px"}}>
                  <p className='pt-2 mb-3 fw-medium'>Av. Libertador al 1234</p>
                  <p>Palermo, Capital Federal</p>
                </div> 
              </div>
              <div className='d-flex gap-3 pt-4' style={{fontSize:".7rem",lineHeight:"1px"}}>
                <p>182 m2</p>
                <p>1 baño</p>
              </div>
              <p className='fw-medium mt-1 mb-2' style={{fontSize:"1.2rem"}}>Venta Local 182 m2 en Dome Business Plaza Italia</p>
              <p style={{fontSize:"1rem"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium rem dolorum, possimus quaerat deleniti quos eligendi soluta perferendis sunt libero neque incidunt. </p>
              <div className='d-flex justify-content-end btn-container'>
                <button className='btn btn-success fw-medium px-3 py-2'>Contactar</button>
              </div>
            </div>
          </div>
        </a>
      </div>
      );
    } else {
      return (
        <div className="card mx-4 my-2" style={{width: "auto"}}>
          <img src="https://www.zonaprop.com.ar/noticias/wp-content/uploads/2016/08/depto.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
          <div className='d-flex gap-5 pt-1'>
                <div className='d-flex flex-column' style={{lineHeight:"10px"}}>
                  <p className='fw-medium fs-5 pt-1' style={{fontSize:"1rem"}}>$ 163.700</p>
                  <p className='pt-2 mb-3 fw-medium' style={{fontSize:"1rem"}}>Av. Libertador al 5000</p>
                  <p style={{fontSize:"1rem"}}>Belgrano, Capital Federal</p>
                </div> 
              </div>
              <div className='d-flex gap-3 pt-3' style={{fontSize:".7rem",lineHeight:"1px"}}>
                <p>192 m2</p>
                <p>1 baño</p>
              </div>
              <p className='fw-medium mt-1 mb-2' style={{fontSize:"1rem"}}>Venta Local 192 m2 en Dome Business Plaza Belgrano Cochera Opcional</p>
              <p style={{fontSize:".9rem"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium rem dolorum, possimus quaerat deleniti quos eligendi soluta perferendis sunt libero neque incidunt. </p>
              <div className='d-flex justify-content-end btn-container'>
                <button className='btn btn-success fw-medium px-3 py-2'>Contactar</button>
              </div>
          </div>
        </div>
      )
    }

  };
  return (
    <div>
      {renderComponent()}
    </div>
  );
}

export default ListadoPropiedades