import "./navBar.css"
import {Link, NavLink} from "react-router-dom"
import Logo from "../../images/logo.png"
import { links } from "../../data.js"
import { FaBars } from "react-icons/fa"

function NavBar() {
  return (
    <nav className="w-100 navbar navbar-expand-lg py-0">
        <div className="nav-container d-flex px-2">
            <Link className="navbar-brand" to="/">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0n4ODoAIA--3sUNXFOtz78IfoaPwViociyQ&usqp=CAU" alt="logo" width="70"/>
            </Link>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body my-auto">
                    <ul className="navbar-nav">
                            {
                                links.map(({name, path}, index) => {
                                    return (
                                        <li className="nav-item" key={index}>
                                            <NavLink className="nav-link" to={path}>{name}</NavLink>
                                        </li>
                                        
                                    )
                                })
                            }
                    </ul>
                </div>
            </div> 
            <button className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <FaBars/>
            </button>
        </div>
    </nav>
  )
}

export default NavBar