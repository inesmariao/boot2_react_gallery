import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Covenas1 } from './components/Covenas1';
import { Covenas2 } from './components/Covenas2';
import { Covenas3 } from './components/Covenas3';
import { Covenas4 } from './components/Covenas4';
import { Covenas5 } from './components/Covenas5';
import { Covenas6 } from './components/Covenas6';
import { Navigation } from './components/Navigation';

function App() {


  return (
    <>
      <BrowserRouter>
        <div>
          <h1 id="title" className='text-center my-3'>Proyecto Galería</h1>
        </div>
        <Routes>
          <Route path="/covenas1" element={<Covenas1 className='image-size'/>} />
          <Route path="/covenas2" element={<Covenas2 className='image-size'/>} />
          <Route path="/covenas3" element={<Covenas3 className='image-size'/>} />
          <Route path="/covenas4" element={<Covenas4 className='image-size'/>} />
          <Route path="/covenas5" element={<Covenas5 className='image-size'/>} />
          <Route path="/covenas6" element={<Covenas6 className='image-size'/>} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  )
}

export default App
