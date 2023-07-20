import React from 'react'
import Noticia from '../../components/Noticia/Noticia'
import { noticiasBlog } from '../../data.js'
import "./blog.css"

function blog() {
  return (
    <div className='pt-2'>
      <div className='text-center py-3 border-top border-bottom'>
        <h1>Blog</h1>
      </div>
      <div className='d-flex justify-content-evenly'>
        <div className='col-7 pb-4'>
          {
            noticiasBlog.map(({title, img, text, category, date}, index) => {
              return (
                  <Noticia key={index} title={title} date={date} img={img} text={text} category={category}/>
              )
            })
          }
        </div>
        <div className='col-3'>
          <div className='search-blog-box py-4'>
              <form className="d-flex search-blog-form" role="search-blog">
                  <input className="form-control me-2 search-blog-text" type="search-blog" placeholder="Search" aria-label="Search" />
                  <button className="search-blog-button" type="submit">Buscar</button>
              </form>
          </div>
          <div>
            <h5>Las más leídas</h5>
            <div className='d-flex gap-3'>
              <p className="border rounded-circle px-3 py-2 my-auto">1</p>
              <div className='d-flex flex-column justify-content-center align-items-start'>
                <p className='my-0'>Las casas más antiguas</p>
                <p className='my-0'>10 agosto, 2022</p>
              </div>
            </div>
            <div className='d-flex gap-3 pt-3'>
              <p className="border rounded-circle px-3 py-2 my-auto">2</p>
              <div className='d-flex flex-column justify-content-center align-items-start'>
                <p className='my-0'>Las casas más antiguas</p>
                <p className='my-0'>10 agosto, 2022</p>
              </div>
            </div>
            <div className='d-flex gap-3 pt-3'>
              <p className="border rounded-circle px-3 py-2 my-auto">3</p>
              <div className='d-flex flex-column justify-content-center align-items-start'>
                <p className='my-0'>Las casas más antiguas</p>
                <p className='my-0'>10 agosto, 2022</p>
              </div>
            </div>
          </div>

          <div className='pt-5'>
            <h5>Últimas noticias</h5>
            <div className='d-flex gap-3'>
              <p className="border rounded-circle px-3 py-2 my-auto">1</p>
              <div className='d-flex flex-column justify-content-center align-items-start'>
                <p className='my-0'>Las casas más antiguas</p>
                <p className='my-0'>10 agosto, 2022</p>
              </div>
            </div>
            <div className='d-flex gap-3 pt-3'>
              <p className="border rounded-circle px-3 py-2 my-auto">2</p>
              <div className='d-flex flex-column justify-content-center align-items-start'>
                <p className='my-0'>Las casas más antiguas</p>
                <p className='my-0'>10 agosto, 2022</p>
              </div>
            </div>
            <div className='d-flex gap-3 pt-3'>
              <p className="border rounded-circle px-3 py-2 my-auto">3</p>
              <div className='d-flex flex-column justify-content-center align-items-start'>
                <p className='my-0'>Las casas más antiguas</p>
                <p className='my-0'>10 agosto, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default blog