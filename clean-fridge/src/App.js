import React, { useState, } from 'react';
import { Route, Link, Routes, Navigate } from 'react-router-dom';

import Main from './Components/Main';
import About from './Components/About';
import List from './Components/List';
import Results from './Components/Results';
import Cards from './Components/Cards/Cards';
import Input from './Components/Input';


function App() {



  return (
    <div className="App">

      <div className='commented'>
        {/* <nav className='nav'>

          <Link to='/Main'>Main</Link>

          <Link to='/About'>About</Link>

        </nav>
        <Routes>
          <Route path='/Main' element={<Main />} />
          <Route path='/About' element={<About />} />
        </Routes> */}
      </div>

    </div>
  );
}

export default App;
