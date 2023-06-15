import logo from './logo.svg';
import './App.css';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import TovBar from "./TovBar";
import HomeLayout from './Home';
import About from './about';
import Services from './services';
import Contact from './contact';
import  Portfolio from "./portfolio"
import { useState } from 'react';
function App() {
 const [isOver, setIsOver] = useState(true);
 const [isLoad, setIsLoad] = useState(true);


  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      
      <Route path='/' element={<TovBar />} >
<Route index element={<HomeLayout setIsOver={setIsOver} isOver={isOver}/>}  />
<Route path='/Int' element={<div className='int'>KaungKhant's Portfolio</div>} />
<Route path='/about' element={<About />}  />
<Route path='/services' element={<Services/>}  />
<Route path='/portfolio'  element={<Portfolio />}  />
<Route path='/contact'  element={<Contact />}  />
      </Route>
      <Route path="*" element={<h1 className='error'>Sorry Can't find the Page</h1>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
