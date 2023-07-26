import React, { useEffect, useState } from 'react'
import Noticia from '../../components/Blog/Noticia/Noticia'
import { noticiasBlog } from '../../data.js'
import "./blog.css"
import Pagination from '../../components/Pagination/Pagination'
import SidebarNews from '../../components/Blog/SidebarNews/SidebarNews'
import SidebarCategorias from '../../components/Blog/SidebarCategorias/SidebarCategorias'

function blog() {
  return (
    <div className="container-xl post-container pt-4 mt-4 mx-auto">
      <div className="row gy-4">
        <div className="col-lg-8 col-md-8 mx-auto">
          <div className="row gy-4 d-flex justify-content-evenly gap-1">
            {
              noticiasBlog.map(({ title, img, text, category, date }, index) => {
                return (
                  <Noticia key={index} title={title} date={date} img={img} text={text} category={category} />
                )
              })
            }
          </div>
          <Pagination />
        </div>
        <div className="col-lg-4 col-md-4">
          <SidebarNews title="Las más Leídas"/>
          <SidebarNews title="Últimas Noticias"/>
          <SidebarCategorias/>
        </div>
      </div>
    </div>

  )
}

export default blog