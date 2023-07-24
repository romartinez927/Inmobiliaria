import Noticia from "../../components/Blog/Noticia/Noticia"
import Newsletter from "../../components/Home/Newsletter/Newsletter"
import MainHeader from "../../components/Home/MainHeader/MainHeader"
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
        <Newsletter />
        <div id="projects" className="cards-2 py-5">
            <div className="container-fluid">
                <div className="d-flex flex-column text-center">
                    <h2>Novedades y Tips</h2>
                    <p>Revisa las últimas novedades de nuestro blog.</p>
                </div>
                <div className="d-flex row gap-3 justify-content-center py-3 mx-1">
                    {
                        noticias.map(({img, title, date, text, category}, index) => {
                            return (
                                <Noticia key={index} img={img} title={title} date={date} text={text} category={category}/>
                            )   
                        })
                    } 
                </div>
            </div> 
        </div>

        <div className="accordion-1 container-xl">
            <div className="area-1"></div>
            <div className="area-2 bg-light ">
                <div className="accordion">
                    <h3>Sobre Nosotros</h3>
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