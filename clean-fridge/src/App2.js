import React from 'react';
import { Route, Link, Routes, Navigate } from 'react-router-dom';

import List from './Components/List2';

const App = () => {
  return (
    <div className="App">
      <nav className='nav'>

        <Link to='/support'>Support</Link>
        <Link to='/about'>About</Link>

      </nav>
      <Routes>
        <Route path='/support' element={<Navigate to ='/support' />} />
        <Route path='/about' element={<Navigate to ='/about' />} />
      </Routes>

      <List />
    </div>
  );
}
export default App;