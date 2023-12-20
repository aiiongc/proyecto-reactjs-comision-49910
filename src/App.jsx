import './App.css'
import Header from './components/Header'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>

      <Header />
      
      <Routes>
      
        <Route path='/' element={ <ItemListContainer />} />
        <Route path='/tienda' element={ <ItemListContainer />} />
        <Route path='/tienda/:categoria' element={ <ItemListContainer />} />
        <Route path="*" element={ <Navigate to={"/"} />} />
      
      </Routes>

      </BrowserRouter>
  )
}

export default App
