import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import Cards from './components/Cards';


function App() {
  return (
    <div className='bg-[#F4EEFF]'>
      <Navbar/>
      <Home/>
      <Cards />
      <Contact/>
    </div>
  );
}

export default App;
