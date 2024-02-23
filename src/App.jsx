import './App.css'
import Blog from './pages/blog/blog'
import Contacto from './pages/contacto/contacto'
import NotFound from './pages/notFound/notFound'
import Propiedades from './pages/propiedades/Propiedades'
import Navbar from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
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
          <Route path="/" element={<Home/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/blog/nota" element={<Nota/>}/>
          <Route path="/propiedades" element={<Propiedades/>}/>
          <Route path="/propiedades/propiedad" element={<Propiedad/>}/>
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/servicios/servicio" element={<Servicio/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
