import "./navbar.css"
import {Link, NavLink} from "react-router-dom"
import { links } from "../../data.js"
import { FaBars } from "react-icons/fa"
import { useEffect, useState } from "react"

function NavBar() {

  return (
    <nav id="nav-menu" className='container-fluid bg-menu'>
        <div className="row">
            <div className="d-none col-2 d-md-flex justify-content-center ">
                <a href="#" className="fw-700 my-auto fs-2 logo">MI</a>
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
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobile-nav">
        <div className="offcanvas-header">
            <h5 className="mobile-nav-title" id="mobile-nav-label">MI</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body container pt-3">
            <div className="row">
                <ul className="d-flex flex-column text-center">
                    {
                        links.map(({name, path}, index) =>{
                            return(
                                <li className="py-3" key={index}>
                                    <a className="nav-link" href={path}>{name}</a>
                                </li>
                            )
                        })
                    }
                </ul> 
            </div>
        </div>

    </div>
    </nav>
  )
}

export default NavBar