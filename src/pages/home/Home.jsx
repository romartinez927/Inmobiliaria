import MainHeader from "../../components/MainHeader/MainHeader"
import { cajitas, noticias } from "../../data.js"
import "./home.css"

import React from 'react'

function Home() {
  return (
    <div>
        <MainHeader/>
        <div className="container">
            <div className="row">
                <div className="d-flex flex-wrap justify-content-center gap-3 py-4">
                    {
                        cajitas.map(({title}, index) => {
                            return (
                                <a key={index} className="px-3 py-2 btn btn-light" href="/servicios">{title}</a>
                            )
                        })
                    }
                </div>
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
                <button type="submit" className="btn btn-success col-1">Enviar</button>

            </form>
        </div>
        
        <div id="projects" className="cards-2 py-5">
            <div className="container-fluid">
                <div className="d-flex flex-column text-center">
                    <h2>Novedades y Tips</h2>
                    <p>Revisa las últimas novedades de nuestro blog.</p>
                </div>
                <div className="d-flex row gap-3 justify-content-center py-3 mx-1">
                    {
                        noticias.map(({img, title}, index) => {
                            return (
                                <div key={index} className="card rounded col-md-5 col-ls-4 px-0 text-center card-noticia">
                                    <a href="/blog/nota" className='noticia-link'>
                                        <img src={img} className="card-img-top" height="230" alt={title} style={{objectFit: "cover"}}/>
                                        <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        </div>
                                    </a>
                                </div>
                            )   
                        })
                    } 
                </div>
            </div> 
        </div>

        <div className="accordion-1">
            <div className="area-1"></div>
            <div className="area-2 bg-light">
                <div className="accordion">
                    <h2 className="fs-5">Sobre Nosotros</h2>
                    <p>Este año cumplimos 15 años, durante este tiempo pasó de todo, cambió el mundo, los avances de la tecnología nos han permitido lograr cosas que hubieran sido impensadas hace muy poco tiempo. </p>
                    <p>Junto con ella, se modificaron lo hábitos y las costumbres de la gente, desde reencontrarte con amigos a través de Facebook hasta avisar que estás en la puerta enviando un mensaje de whatsapp.</p>
                    <p>Hoy nuestro mundo es tan real como virtual y atentos a estos cambios y deseosos de seguir ayudando a nuestros clientes hemos comenzado una transformación que nos permitirá seguir un paso adelante brindando herramientas de comunicación cada vez más efectivas, enfocándonos en más y mejor contenido para estar cerca y ser útiles.</p>
                    <p>Nuestro formato Papel seguirá existiendo para continuar en contacto con el público específico que hace uso de él pero además comenzamos a explotar las posibilidades, alcance y llegada de nuestra web, las redes sociales y el canal de Youtube, que nos permiten multiplicar exponencialmente nuestros resultados transformándonos en un grupo de medios, para adaptarnos a cada usuario y sus necesidades.</p>
                    <p>Estamos evolucionando, para vos.</p>
                </div> 
            </div> 
        </div>  
    </div>
  )
}

export default Home