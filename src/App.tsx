import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Bereshit from './pages/Bereshit'
import Coleccion from './pages/Coleccion'
import Biblioteca from './pages/Biblioteca'
import Estudios from './pages/Estudios'
import Recursos from './pages/Recursos'
import Suscripcion from './pages/Suscripcion'
import Sobre from './pages/Sobre'
import Contacto from './pages/Contacto'
import Terminos from './pages/Terminos'
import Privacidad from './pages/Privacidad'
import EnComingSoon from './pages/EnComingSoon'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/libro-bereshit" element={<Layout><Bereshit /></Layout>} />
        <Route path="/coleccion-devocionales" element={<Layout><Coleccion /></Layout>} />
        <Route path="/biblioteca-de-estudio" element={<Layout><Biblioteca /></Layout>} />
        <Route path="/estudios-y-predicas" element={<Layout><Estudios /></Layout>} />
        <Route path="/recursos-gratuitos" element={<Layout><Recursos /></Layout>} />
        <Route path="/suscripcion" element={<Layout><Suscripcion /></Layout>} />
        <Route path="/sobre-asamblea-de-yahweh" element={<Layout><Sobre /></Layout>} />
        <Route path="/contacto" element={<Layout><Contacto /></Layout>} />
        <Route path="/terminos-legales" element={<Layout><Terminos /></Layout>} />
        <Route path="/politica-de-privacidad" element={<Layout><Privacidad /></Layout>} />
        <Route path="/en/coming-soon" element={<EnComingSoon />} />
        <Route path="*" element={<Layout><Home /></Layout>} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
