import "./navBar.css"
import {Link, NavLink} from "react-router-dom"
import Logo from "../../images/logo.png"
import { links } from "../../data.js"
import { FaBars } from "react-icons/fa"
import { useEffect, useState } from "react"

function NavBar() {
    const [elementClass, setElementClass] = useState('default-class');

    // Función que cambia el nombre de la clase del elemento
    const changeClassBasedOnView = () => {
      // Lógica para determinar en qué vista te encuentras
      const isInHomeView = location.pathname === '/'/* Lógica para determinar si estás en la vista de inicio */;
      const isInAboutView = !isInHomeView/* Lógica para determinar si estás en la vista "Acerca de" */;
      
      // Cambiar la clase del elemento en función de la vista actual
      if (isInHomeView) {
        setElementClass('container-fluid fixed-top');
      } else if (isInAboutView) {
        setElementClass('container-fluid bg-rgba');
      } else {
        setElementClass('default-class'); // Clase predeterminada si no está en ninguna vista específica
      }
    };
  
    // Llamar a la función para cambiar la clase en el ciclo de vida del componente
    useEffect(() => {
      changeClassBasedOnView();
    }, []); // Solo se ejecutará una vez al montar el componente, puedes agregar dependencias si necesitas actualizarla en respuesta a cambios
  
  return (
    <nav id="nav-menu" className={elementClass}>
        <div className="row">
            <div className="d-none col-2 d-md-flex justify-content-center p-2">
                <a href="#" className="fw-700 text-light my-auto fs-2 logo">MB</a>
            </div>
            <ul className="d-none col-10 d-md-flex justify-content-end my-auto">
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li className="nav-item p-3 fs-5" key={index}>
                            <NavLink className="nav-link" to={path}>{name}</NavLink>
                            </li>
                        
                        )
                    })
                }   
            </ul>
        </div>
        <div className="mobile-toggler d-md-none">
            <a className="d-md-none" data-bs-toggle="offcanvas" href="#mobile-nav" role="button" aria-controls="mobile-nav">
                <i id="mobile-toggler-icon" className="fa-solid fa-bars fs-2 p-3 text-black" ></i>
            </a>
        </div>
        <div className="offcanvas offcanvas-start" tabindex="-1" id="mobile-nav" aria-labelldby="mobile-nav-label">
        <div className="offcanvas-header">
            <h5 className="mobile-nav-title" id="mobile-nav-label">Ro <i className="fa-regular fa-heart fs-5"></i></h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body container pt-3">
            <div className="row">
                <ul className="d-flex flex-column text-center">
                    <li className="py-3">
                        <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="py-3">
                        <a className="nav-link" href="#about">Sobre mí</a>
                    </li>
                    <li className="py-3">
                        <a className="nav-link" href="#services">Servicios</a>
                    </li>
                    <li className="py-3">
                        <a className="nav-link" href="#portofolio">Portafolio</a>
                    </li>
                    <li className="py-3">
                        <a className="nav-link" href="#contact">Contacto</a>
                    </li>
                </ul> 
            </div>
            <div className="redes-sociales row">
                <ul className="d-flex justify-content-center">
                    <li className="p-2">
                        <a href="https://github.com/romartinez927" card-portafolio="_blank" className="mx-auto nav-link"><i className="fa-brands fa-github fs-3"></i></a>
                    </li>
                    <li className="p-2">
                        <a href="https://www.linkedin.com/in/rosario-martinez-dev/" card-portafolio="_blank" className="mx-auto nav-link"><i className="fa-brands fa-linkedin-in fs-3"></i></a>
                    </li>
                </ul>
            </div>
        </div>

    </div>
    </nav>
  )
}

export default NavBar