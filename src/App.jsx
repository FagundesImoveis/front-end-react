import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StyledGlobal } from './Global';
import { Index } from './pages/home/Index';
import { Houses } from './pages/contents/contentHouse/Houses';
import { About } from './pages/contents/about/About';
import { Loading } from './components/Loading';


function App() {
  return (
    <>
    <StyledGlobal />
    <BrowserRouter>
      <Routes>
        <Route path='/' element= { <Index /> } />
        <Route path='/housessale' element= { <Houses /> } />
        <Route path='/about' element= { <About /> } />
        <Route path='/loading' element= { <Loading /> } />
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
