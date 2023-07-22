import React from 'react'
import "./nota.css"
import FormComentarios from '../FormComentarios/FormComentarios'

function Nota() {
  return (
    <div className='pt-4'>
        <div className='container'>
            <div className="row">
                <div className="col-md-7">
                    <p className='fs-6'>Magazine Inmobiliario / Culture / Feel Like A Pro With The Help Of These 7 Tips</p>
                    <h2>Feel Like A Pro With The Help Of These 7 Tips</h2>
                    <p>August 23, 2022</p>
                    <div style={{width: "auto"}} className='pb-2'>
                        <img src="https://images.unsplash.com/photo-1687027053771-76a0460d1c68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80" style={{width:"100%"}} alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum perspiciatis sequi itaque reiciendis earum doloribus distinctio corporis quae, cum voluptatem deleniti adipisci molestias nobis sapiente, praesentium voluptatum voluptas cupiditate!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi quod rem modi eum sint. Iusto voluptate delectus, sapiente, facilis recusandae repellendus qui provident, harum cumque quae a excepturi distinctio.</p>
                    <h5>Lorem Ipsum</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum perspiciatis sequi itaque reiciendis earum doloribus distinctio corporis quae, cum voluptatem deleniti adipisci molestias nobis sapiente, praesentium voluptatum voluptas cupiditate!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nisi quod rem modi eum sint. Iusto voluptate delectus, sapiente, facilis recusandae repellendus qui provident, harum cumque quae a excepturi distinctio.</p>
                    <div>
                        <p> #comunidad magazine #decoracion #hogar #magazine inmobiliario #pintar #pintura #Pinturerías San Andrés</p>
                        <p>Compartir</p>
                    </div>
                    <div>
                        <button>Anterior</button>
                        <button>Siguiente</button>
                    </div>
                    <div>
                        <h4>Deja un comentario</h4>
                        <FormComentarios/>
                    </div>
                </div>
                <div className="col-md-5 pt-5">
                    <div className='d-flex flex-column justify-content-center border rounded-3 py-4 gap-2'>
                        <h5 className='text-center'>Las más leídas</h5>
                        <div className='d-flex gap-3 ps-3'>
                        <p className="border rounded-circle px-3 py-2 my-auto">1</p>
                        <div className='d-flex flex-column justify-content-center align-items-start'>
                            <a href="/blog/nota" className='noticia-link'>
                            <p className='my-0'>Las casas más antiguas</p>
                            <p className='my-0'>10 agosto, 2022</p>
                            </a>
                        </div>
                        </div>
                        <div className='d-flex gap-3 pt-3 ps-3'>
                        <p className="border rounded-circle px-3 py-2 my-auto">2</p>
                        <div className='d-flex flex-column justify-content-center align-items-start'>
                            <a href="/blog/nota" className='noticia-link'>
                            <p className='my-0'>Las casas más antiguas</p>
                            <p className='my-0'>10 agosto, 2022</p>
                            </a>
                        </div>
                        </div>
                        <div className='d-flex gap-3 pt-3 ps-3'>
                        <p className="border rounded-circle px-3 py-2 my-auto">3</p>
                        <div className='d-flex flex-column justify-content-center align-items-start'>
                            <a href="/blog/nota" className='noticia-link'>
                            <p className='my-0'>Las casas más antiguas</p>
                            <p className='my-0'>10 agosto, 2022</p>
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className='mt-3 border rounded'>
                        <div>
                            <h5>Categorías</h5>
                        </div>
                        <ul>
                            <li>Casas</li>
                            <li>Decoración</li>
                            <li>Estilo de Vida</li>
                            <li>Higiene</li>
                            <li>Inmobiliarias</li>
                            <li>Restaurada</li>
                            <li>Sin categoría</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nota