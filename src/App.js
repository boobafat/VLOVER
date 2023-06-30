import React from 'react'
import './App.scss'
import './styles/text.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/home'
import { HeaderPage } from './pages/header' 
import Footer from './pages/footer/footer'
import Catalog from './pages/catalog'
import Collection from './pages/collection'
import Help from './pages/help'
import Magazini from './pages/magazini'
import Contacti from './pages/contacti'
import Assec from './pages/assec'
import Sale from './pages/sale'
import Vozvrat from './pages/vozvrat'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderPage />
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/catalog'} element={<Catalog />} />
          <Route path={'/collection'} element={<Collection />} />
          <Route path={'/help'} element={<Help />} />
          <Route path={'/contacti'} element={<Contacti />} />
          <Route path={'/magazini'} element={<Magazini />} />
          <Route path={'/assec'} element={<Assec />} />
          <Route path={'/sale'} element={<Sale />} />
          <Route path={'/vozvrat'} element={<Vozvrat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
