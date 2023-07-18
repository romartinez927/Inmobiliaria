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
        <div className="bg-light py-4 text-center w-100">
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
        <div className="d-flex px-5 py-3">
            <p>Este año cumplimos 15 años, durante este tiempo pasó de todo, cambió el mundo, los avances de la tecnología nos han permitido lograr cosas que hubieran sido impensadas hace muy poco tiempo.
Junto con ella, se modificaron lo hábitos y las costumbres de la gente, desde reencontrarte con amigos a través de Facebook hasta avisar que estás en la puerta enviando un mensaje de whatsapp.</p>
            <img src="" alt="" />
        </div>
        <div className="d-flex px-5 py-3">
            <img src="" alt="" />
            <p>Hoy nuestro mundo es tan real como virtual y atentos a estos cambios y deseosos de seguir ayudando a nuestros clientes hemos comenzado una transformación que nos permitirá seguir un paso adelante brindando herramientas de comunicación cada vez más efectivas, enfocándonos en más y mejor contenido para estar cerca y ser útiles.</p>
        </div>
        <div className="d-flex px-5 py-3">
            <div>
                <p>Nuestro formato Papel seguirá existiendo para continuar en contacto con el público específico que hace uso de él pero además comenzamos a explotar las posibilidades, alcance y llegada de nuestra web, las redes sociales y el canal de Youtube, que nos permiten multiplicar exponencialmente nuestros resultados transformándonos en un grupo de medios, para adaptarnos a cada usuario y sus necesidades.</p>
                <p>Estamos evolucionando, para vos.</p>
            </div>
            <img src="" alt="" />
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
        
    </div>
  )
}

export default Home