import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Certificate from './Pages/Certificate';
import Contact from './Pages/Contact';
import Resume from './Pages/Resume';
import Work from './Pages/Work';
import { useState } from 'react';

function App() {
  //theme change light & dark
  
  return (
    <div className="container">
      <BrowserRouter>
      <div className="App">
        <div className='topNav'></div>
        <div className='mian'>
          <div className='left'></div>
          <div className='center'>
            <Routes>
              <Route path='/' element={<About/>}></Route>
              <Route path='/resume' element={<Resume/>}></Route>
              <Route path='/work' element={<Work/>}></Route>
              <Route path='/certificate' element={<Certificate/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
          </div>
          <div className='right'></div>
        </div>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
