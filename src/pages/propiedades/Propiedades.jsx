import React from 'react'
import ListadoPropiedades from '../../components/Propiedades/PropiedadesContainer/ListadoPropiedades'
import Filtros from '../../components/Propiedades/Filtros/Filtros'
import Pagination from '../../components/Pagination/Pagination'

function Propiedades() {
  return (
    <div className='pb-3 container-fluid'>
      <Filtros/>
      <ListadoPropiedades/>
      <ListadoPropiedades/>
      <ListadoPropiedades/>
      <div className='pt-3'>
        <Pagination/>
      </div>
    </div>
  )
}

export default Propiedades