import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';

function App() {
  //theme change light & dark
  
  return (
    <>
    <Header></Header>

    <main className='main'>
      <Home />
    </main>
    </>
  );
}

export default App;
