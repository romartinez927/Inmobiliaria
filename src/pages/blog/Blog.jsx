import React, { useEffect, useState } from 'react'
import Noticia from '../../components/Blog/Noticia/Noticia'
import { noticiasBlog } from '../../data.js'
import "./blog.css"
import Pagination from '../../components/Pagination/Pagination'
import SidebarNews from '../../components/Blog/SidebarNews/SidebarNews'
import SidebarCategorias from '../../components/Blog/SidebarCategorias/SidebarCategorias'

function blog() {
  return (
    <div className="grid-container pt-4">
      <div className="item">
        <div className="row gap-3 d-flex justify-content-center pb-3">
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
      <div className="item">
        <SidebarNews title="Las más Leídas"/>
        <SidebarNews title="Últimas Noticias"/>
        <SidebarCategorias/>
      </div>
    </div>

  )
}

export default blog