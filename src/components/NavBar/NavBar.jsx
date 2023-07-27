import "./navbar.css"
import {Link, NavLink} from "react-router-dom"
import { links } from "../../data.js"
import { FaBars } from "react-icons/fa"
import { useEffect, useState } from "react"
import logo from "../../assets/logo.png"

function NavBar() {
    const [visible, setVisible] = useState(false);
    
    const toggleDiv = () => {
      setVisible(!visible);
    }

  return (
    <nav id="nav-menu" className='container-fluid bg-white' >
        <div className="row nav-height">
            <div className="d-none col-3 d-md-flex justify-content-center ">
                <a href="/" className="fw-700 my-auto logo" >
                    <img src={logo} alt="Magazine Inmobiliario" width="140" />
                </a>
            </div>
            <ul className="d-none col-9 d-md-flex justify-content-end my-auto">
                <li className="nav-item p-3">
                    <NavLink className="nav-link" to="/Inmobiliaria/">Home</NavLink>
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link" to="/Inmobiliaria/blog">Blog</NavLink>
                </li>
                <li className="dropdownn p-3 nav-item">
                    <a className="pruebaa nav-link">Ediciones</a>
                    <div className="dropdown-menuu">
                        <li className="pt-2 pb-1">
                            <a className="dropdown-item" href="http://magazineinmobiliario.com.ar/revista-online/2023/julio/" target="_blank">Edición Julio 2023</a>
                        </li>
                        <li className="py-1 border-top">
                            <a className="dropdown-item" href="http://magazineinmobiliario.com.ar/revista-online/2023/junio/" target="_blank">Edición Junio 2023</a>
                        </li>
                    </div>
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link" to="/Inmobiliaria/servicios">Servicios</NavLink>
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link" to="/Inmobiliaria/propiedades">Propiedades</NavLink>
                </li>
                <li className="nav-item p-3">
                    <NavLink className="nav-link" to="/Inmobiliaria/contacto">Contacto</NavLink>
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
                <img src={logo} width="180" alt="logo" />
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body container pt-5">
                <div className="row">
                    <ul className="d-flex flex-column canvas-menu">
                        <li className="canvas-li">
                            <a className="nav-link" href="/Inmobiliaria/">Home</a>
                        </li>
                        <li className="canvas-li">
                            <a className="nav-link" href="/Inmobiliaria/blog">Blog</a>
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
                            <a className="nav-link" href="/Inmobiliaria/propiedades">Propiedades</a>
                        </li>
                        <li className="canvas-li">
                            <a className="nav-link" href="/Inmobiliaria/servicios">Servicios</a>
                        </li>
                        <li className="canvas-li">
                            <a className="nav-link" href="/Inmobiliaria/contacto">Contacto</a>
                        </li>
                    </ul> 
                </div>
            </div>

        </div>
    </nav>
  )
}

export default NavBar