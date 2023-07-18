import React from 'react'
import Carousel from '../CarouselImages/Carousel'
import "./propiedad.css"

function Propiedad() {
  return (
    <div>
        <div className='d-flex ps-5 py-2 align-items-center gap-2 fw-semibold small'>
            <p className='my-auto'>Inicio</p>
            <span className="material-symbols-outlined" style={{fontSize:"15px"}}>
                arrow_forward_ios
            </span>
            <p className='my-auto'>Tristan Suarez</p>
            <span className="material-symbols-outlined" style={{fontSize:"15px"}}>
                arrow_forward_ios
            </span>
            <p className='my-auto'>Casas en Tristan Suarez</p>
        </div>
        <div className='d-flex justify-content-evenly'>
            <div className='col-7'>
                <Carousel/>
                <div className='py-4 px-2'>
                    <h4 className='border-top border-bottom py-2'>U$D 30.000</h4>
                    <h5>Casa en Tristan Suarez</h5>
                    <p>Barrio Tranquilo, se respira a verde!!  OPORTUNIDAD!!</p>
                    <p>La casa es una construcción de material techo vigueta de características sencilla a la cual le faltan terminaciones  edificación sobre lote 10x30 con rejas al frente con entrada para auto y cercado en todo su perímetro  consta de 2 dormitorios amplios 4x4 mts2  y 3.4x 4 mts.2 baño totalmente equipado 2x1.5 mts.2 living  5 x 3.4 mts2 cocina comedor  3.3x3.4mts.2  y galeria cubierta de 7.6x 1.7 mts.2 en la parte trasera de la casa consta un pequeño galpón -------DOCUMENTACIÓN PERFECTA!!!!!!</p>
                </div>
                <div>
                    <h4>Ubicación</h4>
                    <p>Hernan Cortez 1258, Tristán Suárez</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13133.787837283488!2d-58.51178013022461!3d-34.61814369999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9d1593c9e23%3A0x12bbcca2d4c0246f!2sAv.%20%C3%81lvarez%20Jonte%204543%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1689615880524!5m2!1ses-419!2sar" width="600" height="200" style={{border:0}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className='col-4'>
                <div className='d-flex align-items-center justify-content-center py-3 px-2 gap-2 border rounded'>
                    <img src="https://www.staticbp.com/img/inmobiliarias/saman.png" width="100" alt="" />
                    <p className='my-auto fw-semibold'>Samaniego Propiedades</p>
                </div>
                <form action="" method="post" className='form-propiedad mt-2 px-3 py-2 border rounded'>
                    <p className='fw-semibold'>Contactar a la Inmobiliaria</p>
                    <div>
                        <input type="text" id="nombre" name="nombre" required placeholder='Nombre y Apellido'/>
                    </div>
                    <div>
                        <input type="email" id="email" name="email" required placeholder='Email'/>
                    </div>
                    <div>
                        <input type="tel" id="telefono" name="telefono" required placeholder='Teléfono'/>
                    </div>
                    <div>
                        <textarea id="mensaje" name="mensaje" required placeholder='Hola, me interesa esta propiedad que vi en Magazine Inmobiliario y quisiera que me contacten. Muchas gracias.'></textarea>
                    </div>
                    <button type="submit" className='btn btn-success col-12'>Enviar</button>
                </form>
            </div>
        </div>
        <div className='py-5'>
            <h5 className='px-3'>Propiedades similares</h5>
            <div className='d-flex gap-3 py-2 justify-content-center'>
                <div class="card" style={{width:"15rem"}}>
                    <img src="https://proaimg.s3-sa-east-1.amazonaws.com/propiedad/original/632/632958.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{width:"15rem"}}>
                    <img src="https://proaimg.s3-sa-east-1.amazonaws.com/propiedad/original/632/632958.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{width:"15rem"}}>
                    <img src="https://proaimg.s3-sa-east-1.amazonaws.com/propiedad/original/632/632958.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                <div class="card" style={{width:"15rem"}}>
                    <img src="https://proaimg.s3-sa-east-1.amazonaws.com/propiedad/original/632/632958.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Propiedad