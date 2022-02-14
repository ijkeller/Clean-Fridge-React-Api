import React, { useState, } from 'react';
import { Route, Link, Routes, Navigate } from 'react-router-dom';

import List from './Components/List';
import Cards from './Components/Cards'
import Results from './Components/Results';



function App() {



    return (
        <div>
            <List />
            <Cards />
            <Results />
        </div>
    )
}

export default App;
