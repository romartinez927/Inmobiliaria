import "./mainHeader.css"

function MainHeader() {
  return (
    <div className="header d-flex mx-auto">
      <div className="d-flex bg-rgba flex-column justify-content-center align-items-center text-light text-center" >
        <h1 className="pb-2 title-header">Todo lo que necesitas para tu hogar</h1>
        <div className="container-fluid " >
          <form action="" className="row rounded pb-2 pe-2 mb-3 mx-auto d-flex justify-content-center gy-2" style={{backgroundColor: "rgba(234, 234, 234, 0.6)",}}>
            <div className="form-group col-md-6">
              <input
                type="text"
                className="form-control ps-4"
                style={{paddingBlock: "12px", borderRadius: "8px"}}
                placeholder="Ej, seguridad, alquiler, reparación"
              />
            </div>
            <div className="form-group col-md-4">
              <input
                type="text"
                className="form-control ps-4"
                style={{paddingBlock: "12px", borderRadius: "8px"}}
                placeholder="Tu barrio..."
              />
            </div>
            <button className="btn btn-red fw-semibold rounded col-md-2" style={{paddingBlock: "10px", maxWidth: "150px"}}>Buscar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MainHeader