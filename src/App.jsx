import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './pages/menu'
import Catalogo from './pages/catalogo'
import Registro from './pages/registrarse'
import InicioSesion from './pages/iniciodesesion'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Página principal</h1>} />
        <Route path="/menu" element={<menu />} />
        <Route path="/catalogo" element={<catalogo />} />
        <Route path="/registro" element={<registrarse />} />
        <Route path="/iniciodesesion" element={<iniciodesesion />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
