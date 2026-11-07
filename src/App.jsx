import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import Home from './pages/Home.jsx'
import Aulas from './pages/Aulas.jsx'
import Pesquisa from './pages/Pesquisa.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900 antialiased">
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
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