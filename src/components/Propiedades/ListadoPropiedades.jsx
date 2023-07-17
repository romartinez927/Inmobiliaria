import React from 'react'

function ListadoPropiedades() {
  return (
    <div className='d-flex px-4 pt-3' style={{fontSize:".9rem",lineHeight:"20px"}}>
        <div className='d-flex justify-content-between gap-2 border rounded' style={{maxHeight:"210px"}}>
          <img width="280" className="rounded" src="https://www.zonaprop.com.ar/noticias/wp-content/uploads/2016/08/depto.jpg" alt="" />
          <div className='p-2'>
            <div className='d-flex gap-5'>
              <p className='fw-medium'>USD 500.000</p>
              <div className='d-flex flex-column border-start px-2' style={{lineHeight:"10px"}}>
                <p className='pt-2'>Av. Libertador al 5000</p>
                <p className='fw-medium'>Belgrano, Capital Federal</p>
              </div> 
            </div>
            <div className='d-flex gap-3 pt-2' style={{fontSize:".7rem",lineHeight:"1px"}}>
              <p>192 m2</p>
              <p>1 baño</p>
            </div>
            <p className='fw-medium m-0' style={{fontSize:".8rem"}}>Venta Local 192 m2 en Dome Business Plaza Belgrano Cochera Opcional</p>
            <p style={{fontSize:".8rem"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium rem dolorum, possimus quaerat deleniti quos eligendi soluta perferendis sunt libero neque incidunt. Perferendis, adipisci excepturi repellat voluptates iusto similique.</p>
            <div className='d-flex justify-content-end px-2 m-0 py-2'>
              <button className='btn btn-success fw-medium' style={{fontSize:".8rem"}}>Contactar</button>
            </div>        
          </div>
        </div>
    </div>
  )
}

export default ListadoPropiedades