import { useEffect, useState } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Home from './components/Home'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

export default function App(){
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')
  useEffect(()=>{
    document.body.classList.toggle('light', theme==='light')
    localStorage.setItem('theme', theme)
  },[theme])

  return (
    <div>
      <nav className="nav">
        <div className="container wrap">
          <div style={{display:'flex',alignItems:'center',gap:12}}>
            <span className="badge">AB</span>
            <span className="kbd">Akash Bisht</span>
          </div>
          <div style={{display:'flex',gap:4,alignItems:'center'}}>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/work">Portfolio</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <button className="btn ghost theme-toggle" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label="Toggle theme">
              {theme==='dark' ? '☀️ Light' : '🌙 Dark'}
            </button>
          </div>
        </div>
      </nav>

      <motion.main
        initial={{ opacity: 0, y: 8}}
        animate={{ opacity: 1, y: 0}}
        transition={{ duration: .4 }}
        className="container"
      >
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </motion.main>

      <footer className="container">
        <hr className="sep"/>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <small>© {new Date().getFullYear()} Akash Bisht. All rights reserved.</small>
          <div style={{display:'flex',gap:8}}>
            <a className="badge" href="mailto:akashakashbisht@gmail.com">Email</a>
            <a className="badge" target="_blank" rel="noreferrer" href="https://github.com/">GitHub</a>
            <a className="badge" target="_blank" rel="noreferrer" href="https://www.linkedin.com/">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
