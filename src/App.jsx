import './App.css'
import DetailPortfolio from './pages/DetailPortofolio'
import Home from './pages/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NotFound404 from './pages/NotFound404'
import Experience from './pages/Experience'

function App() {

  return (
    
      <BrowserRouter>
         <Routes>

            <Route path='/' element={<Home />}/>
            <Route path='/portfolio/:id' element={<DetailPortfolio />} />    
            <Route path='/page-NotFound404' element={<NotFound404 />} />
            <Route path='/experience' element={<Experience />} />
            <Route path='*' element={<NotFound404 />} />
            
         </Routes>
      </BrowserRouter>
    
  )


}

export default App