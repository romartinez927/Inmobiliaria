import MainHeader from "../../components/MainHeader/MainHeader"
import { cajitas, noticias } from "../../data.js"
import "./home.css"

import React from 'react'

function Home() {
  return (
    <div>
        <MainHeader/>
        <div className="d-flex justify-content-center align-items-center gap-3 py-4">
            {
                cajitas.map(({title}, index) => {
                    return (
                        <div key={index} className="d-flex align-items-center justify-content-center px-3 py-2 rounded btn btn-light">
                            <p className="my-auto">{title}</p>
                        </div>
                    )
                })
            }
        </div>
        <div className="bg-light py-3 text-center px-5">
            <h3>¡Encontrá las mejores propiedades en venta y alquiler!</h3>
            <p className="px-3">Magazine Inmobiliario es el portal inmobiliario líder en búsqueda de propiedades e inmuebles en Argentina.
Si lo que querés es alquilar o comprar un departamento, casa, local, oficina o terreno, este es el sitio para vos.</p>
            <div className="d-flex">
                <div style={{width:"230px"}}>
                    <p className="fw-semibold">Variedad de anunciantes</p>
                    <p>Inmobiliarias y dueños directos de todo el país ofrecen las mejores opciones de propiedades para vos.</p>
                </div>
                <div style={{width:"230px"}}>
                    <p className="fw-semibold">Es simple, es rápido</p>
                    <p>Utilizá nuestros filtros y buscá las propiedades que más se ajusten a tus necesidades y preferencias.</p>
                </div>
                <div style={{width:"230px"}}>
                    <p className="fw-semibold">Buscá con tranquilidad</p>
                    <p>Comprá o alquilá de manera segura y confiable. </p>
                </div>
                <div style={{width:"230px"}}>
                    <p className="fw-semibold">Somos Magazine Inmobiliario</p>
                    <p>15 años en el mercado y miles de avisos publicados nos respaldan en la búsqueda de tu hogar.</p>
                </div>
            </div>
        </div>
        <div className="py-4 text-center">
            <h4 className="text-center">Novedades y Tips</h4>
            <p>Revisa Las Últimas Noticias y Artículos De Nuestro Blog.</p>
            <div className="d-flex gap-5 justify-content-center text-center">
            {
                noticias.map(({img, title}, index) => {
                    return (
                        <div key={index}>
                            <img src={img} alt={title} height="130" width="220" className="rounded" />
                            <p>{title}</p>
                        </div>
                    )   
                })
            } 
            </div>
        </div>
        <div className="bg-light py-4 text-center">
            <h3>¡No te pierdas ninguna de nuestras novedades!</h3>
            <p>Suscríbete ahora y recibe todas las actualizaciones directamente en tu bandeja de entrada.</p>
            <form action="" className="d-flex flex-column justify-content-center align-items-center gap-1">
                <div className="form-group col-4">
                    <input type="text" className="form-control" placeholder="Nombre y Apellido" />
                </div>
                <div className="form-group col-4">
                    <input type="email" className="form-control" placeholder="E-mail" />
                </div>
                <button type="submit" className="btn btn-primary col-1">Enviar</button>

            </form>
        </div>
    </div>
  )
}

export default Home