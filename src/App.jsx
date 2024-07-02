import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Covenas1 } from './components/Covenas1';
import { Covenas2 } from './components/Covenas2';
import { Covenas3 } from './components/Covenas3';
import { Covenas4 } from './components/Covenas4';
import { Covenas5 } from './components/Covenas5';
import { Covenas6 } from './components/Covenas6';

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/covenas1" element={<Covenas1 />} />
          <Route path="/covenas2" element={<Covenas2 />} />
          <Route path="/covenas3" element={<Covenas3 />} />
          <Route path="/covenas4" element={<Covenas4 />} />
          <Route path="/covenas5" element={<Covenas5 />} />
          <Route path="/covenas6" element={<Covenas6 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
