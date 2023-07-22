import React from 'react'
import Noticia from '../../components/Blog/Noticia/Noticia'
import { noticiasBlog } from '../../data.js'
import "./blog.css"
import Pagination from '../../components/Pagination/Pagination'

function blog() {
  return (
    <div className='container pt-2'>
      <div className='d-flex row justify-content-center'>
        <div className='col-md-8 col-sm-12 pb-4'>
          <div className='container-fluid'>
            <div className="row gap-3 pt-3 d-flex justify-content-center">
              {
                noticiasBlog.map(({title, img, text, category, date}, index) => {
                  return (
                      <Noticia key={index} title={title} date={date} img={img} text={text} category={category}/>
                  )
                })
              }
            </div>
            <Pagination/>
          </div>
        </div>
        <div className='col-md-4 col-sm-12'>
          <div className='search-blog-box py-4'>
              <form className="d-flex search-blog-form" role="search-blog">
                  <input className="form-control me-2 search-blog-text" type="search-blog" placeholder="Search" aria-label="Search" />
                  <button className="search-blog-button" type="submit">Buscar</button>
              </form>
          </div>
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
          <div className='d-flex flex-column justify-content-center border rounded-3 py-4 gap-2 mt-3'>
            <h5 className='text-center'>Últimas Noticias</h5>
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
  )
}

export default blog