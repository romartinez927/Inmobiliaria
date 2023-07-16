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
        <div className="py-4 text-center">
            <h4 className="text-center">Novedades & Tips</h4>
            <p>Revisa Las Últimas Noticias Y Artículos De Nuestro Blog.</p>
            <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center text-center mx-3">
            {
                noticias.map(({img, title}, index) => {
                    return (
                        <div key={index}>
                            <img src={img} alt={title} height="150" width="250" className="rounded" />
                            <p>{title}</p>
                        </div>
                    )   
                })
            } 
            </div>
    </div>
    <div className="bg-secondary py-4 text-center">
            <h3>¡No te pierdas ninguna de nuestras novedades!</h3>
            <p>Suscríbete ahora y recibe todas las actualizaciones directamente en tu bandeja de entrada.</p>
            <form action="" className="row d-flex flex-column justify-content-center align-items-center gap-1">
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