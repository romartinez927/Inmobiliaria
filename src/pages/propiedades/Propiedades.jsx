import React from 'react'
import ListadoPropiedades from '../../components/Propiedades/ListadoPropiedades'
import Filtros from '../../components/Propiedades/Filtros'

function Propiedades() {
  return (
    <>
      <Filtros/>
      <ListadoPropiedades/>
      <ListadoPropiedades/>
    </>
  )
}

export default Propiedades