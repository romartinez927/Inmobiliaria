import "./navbar.css"
import {Link, NavLink} from "react-router-dom"
import { links } from "../../data.js"
import { FaBars } from "react-icons/fa"
import { useEffect, useState } from "react"

function NavBar() {
    const [visible, setVisible] = useState(false);
    const [visibleNav, setVisibleNav] = useState(false);

    const toggleDivNav = () => {
      setVisibleNav(!visibleNav);
    }
    
    const toggleDiv = () => {
      setVisible(!visible);
    }

  return (
    <nav id="nav-menu" className='container-fluid'>
        <div className="row">
            <div className="d-none col-3 d-md-flex justify-content-center ">
                <a href="#" className="fw-700 my-auto logo" >
                    <img src="src\images\logo.png" alt="Magazine Inmobiliario" width="130" />
                </a>
            </div>
            <ul className="d-none col-9 d-md-flex justify-content-end my-auto">
                <li className="nav-item p-3">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link" to="/blog">Blog</NavLink>
                </li>
                <li className="nav-item p-3" onClick={toggleDivNav}>
                    <p className="nav-link mb-0" >Ediciones<i className="fa-solid fa-angle-down ms-2 my-auto"></i></p>
                    {
                        visibleNav && (
                            <div>
                                <p>Hola</p>
                            </div>
                        )
                    }
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link" to="/servicios">Servicios</NavLink>
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link" to="/propiedades">Propiedades</NavLink>
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                </li>
            </ul>
        </div>
        <div className="mobile-toggler d-md-none text-end" >
            <a className="d-md-none" data-bs-toggle="offcanvas" href="#mobile-nav" role="button" aria-controls="mobile-nav">
                <i id="mobile-toggler-icon" className="fa-solid fa-bars fs-2 p-3 text-black" ></i>
            </a>
        </div>
        <div className="offcanvas offcanvas-end canvas" tabIndex="-1" id="mobile-nav" style={{boxShadow: "-4px 0px 20px rgba(32,54,86,.1)"}}>
            <div className="offcanvas-header">
                <img src="src/images/logo.png" width="118" alt="logo" />
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body container pt-5">
                <div className="row">
                    <ul className="d-flex flex-column canvas-menu">
                        <li className="canvas-li">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="canvas-li">
                            <a className="nav-link" href="/blog">Blog</a>
                        </li>
                        <li className="canvas-li">
                            <div className="d-flex justify-content-between me-3">
                                <a className="nav-link" href="/">Ediciones</a>
                                <i className="fa-solid fa-angle-down switch" onClick={toggleDiv}></i>
                            </div>
                            {
                                visible && (
                                    <ul className="sub-menu d-flex flex-column gap-1">
                                        <li className="menu-item pt-2 pb-1">
                                            <a href="http://magazineinmobiliario.com.ar/revista-online/2023/julio/">Edición Julio 2023</a>
                                        </li>
                                        <li className="menu-item py-1">
                                            <a href="http://magazineinmobiliario.com.ar/revista-online/2023/junio/">Edición Junio 2023</a>
                                        </li>
                                    </ul>
                                )
                                
                            }
                        </li>
                        <li className="canvas-li">
                            <a className="nav-link" href="/propiedades">Propiedades</a>
                        </li>
                        <li className="canvas-li">
                            <a className="nav-link" href="/servicios">Servicios</a>
                        </li>
                        <li className="canvas-li">
                            <a className="nav-link" href="/contacto">Contacto</a>
                        </li>
                    </ul> 
                </div>
            </div>

        </div>
    </nav>
  )
}

export default NavBar