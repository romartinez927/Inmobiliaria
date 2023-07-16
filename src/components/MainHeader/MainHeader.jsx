import "./mainHeader.css"

function MainHeader() {
  return (
    <div className="row header d-flex mx-auto">
      <div className="d-flex flex-column justify-content-center align-items-center text-light bg-rgba">
        <h2 className="pb-2">Todo lo que necesitas para tu hogar</h2>
        <div className="bg-light rounded p-2">
          <form action="" className="d-flex gap-2 p-1">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Ej, seguridad, alquiler, reparación"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Tu barrio..."
              />
            </div>
            <button className="btn btn-success">Buscar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MainHeader