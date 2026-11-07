import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import Aulas from './pages/Aulas.jsx'
import Pesquisa from './pages/Pesquisa.jsx'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/aulas/:aulaId" element={<Aulas />} />
          <Route path="/pesquisa" element={<Pesquisa />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}