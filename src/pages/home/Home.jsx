import MainHeader from "../../components/MainHeader/MainHeader"
import { cajitas, noticias } from "../../data.js"
import "./home.css"

import React from 'react'

function Home() {
  return (
    <div>
        <MainHeader/>
        <div className="fw-100">
            <div className="d-flex justify-content-center align-items-center gap-3 py-4">
                {
                    cajitas.map(({title}, index) => {
                        return (
                            <button key={index} className="px-3 py-2 btn btn-light">{title}</button>
                        )
                    })
                }
            </div>
        </div>
        <div className="bg-light text-center w-100" style={{paddingBlock:"6em"}}>
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
        
        <div class="accordion-1">
            <div class="area-1">
            </div><div class="area-2">
                <div class="accordion">
                    <h2>Sobre Nosotros</h2>
                    <p>Este año cumplimos 15 años, y los avances tecnológicos nos permitieron lograr cosas impensables hace muy poco tiempo. </p>
                    <p>Se modificaron hábitos y costumbres, desde reencontrarse con amigos a través de Facebook hasta avisar que estás en la puerta enviando un mensaje de Whatsapp.</p>
                    <p>Atentos a estos cambios, comenzamos una transformación que nos permitirá seguir un paso adelante brindando herramientas de comunicación cada vez más efectivas, enfocándonos en más y mejor contenido para estar cerca y ser útiles.</p>
                    <p>Nuestro formato Papel seguirá existiendo para continuar en contacto con el público específico que hace uso de él pero además comenzamos a explotar las posibilidades, alcance y llegada de nuestra web, las redes sociales y el canal de Youtube, que nos permiten multiplicar exponencialmente nuestros resultados transformándonos en un grupo de medios, para adaptarnos a cada usuario y sus necesidades.</p>
                    <p>Estamos evolucionando, para vos.</p>
                </div> 

            </div> 
        </div> 
        
        <div id="projects" className="cards-2 pt-3 bg-light">
            <div className="container-fluid">
                <div className="d-flex flex-column text-center">
                    <h2>Novedades y Tips</h2>
                    <p>Revisa las últimas novedades de nuestro blog.</p>
                </div>
                <div className="row">
                    {
                        noticias.map(({img, title}, index) => {
                            return (
                                <div className="card col-md-5 col-ls-4 bg-light" key={index}>
                                    <img className="img-fluid" src={img} alt="alternative"/>
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">Suffer should if waited common person little ans words are needed oh <a className="blue no-line" href="article.html">...Read more</a></p>
                                    </div>
                                </div>
                            )   
                        })
                    } 
                </div>
            </div> 
        </div> 
    </div>
  )
}

export default Home