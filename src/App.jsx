import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Blog from './pages/blog/blog'
import Ediciones from './pages/ediciones/ediciones'
import Contacto from './pages/contacto/contacto'
import NotFound from './pages/notFound/notFound'
import Propiedades from './pages/propiedades/Propiedades'
import Navbar from './components/NavBar/NavBar'
import { BrowserRouter, Router, Route, Routes, useLocation } from 'react-router-dom'
import Servicios from './pages/servicios/Servicios'
import Home from './pages/home/home'
import Footer from './components/Footer/Footer'
import Nota from './components/Blog/Nota/Nota'
import Propiedad from './components/Propiedades/Propiedad/Propiedad'
import Servicio from './components/Servicios/Servicio/Servicio'

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="https://romartinez927.github.io/Inmobiliaria/" element={<Home/>}/>
          <Route path="/Inmobiliaria/contacto" element={<Contacto/>}/>
          <Route path="/Inmobiliaria/blog" element={<Blog/>}/>
          <Route path="/Inmobiliaria/blog/nota" element={<Nota/>}/>
          <Route path="/Inmobiliaria/propiedades" element={<Propiedades/>}/>
          <Route path="/Inmobiliaria/propiedades/propiedad" element={<Propiedad/>}/>
          <Route path="/Inmobiliaria/servicios" element={<Servicios/>}/>
          <Route path="/Inmobiliaria/servicios/servicio" element={<Servicio/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
