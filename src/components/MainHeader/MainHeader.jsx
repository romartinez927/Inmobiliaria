import NavBar from "../NavBar/NavBar"
import "./mainHeader.css"

function MainHeader() {
  return (
    <div className="header d-flex mx-auto">
      <div className="d-flex bg-rgba flex-column justify-content-center align-items-center text-light text-center" >
        <h1 className="pb-3 title">Todo lo que necesitas para tu hogar</h1>
        <div className="rounded-4 container-fluid p-2 mb-3" style={{maxWidth:"800px", backgroundColor: "rgba(234, 234, 234, 0.6)",}}>
          <form action="" className="d-flex row justify-content-evenly px-4 py-3">
            <div className="form-group col-sm-12 col-md-6">
              <input
                type="text"
                className="form-control py-3"
                placeholder="Ej, seguridad, alquiler, reparación"
              />
            </div>
            <div className="form-group col-sm-14 col-md-4">
              <input
                type="text"
                className="form-control py-3"
                placeholder="Tu barrio..."
              />
            </div>
            <button className="btn btn-success col-md-2 col-sm-4 fw-semibold rounded-4">Buscar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MainHeader