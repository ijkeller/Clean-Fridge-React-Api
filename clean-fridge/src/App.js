import React, { useState, useEffect } from 'react';
import { Route, Link, Routes, Navigate } from 'react-router-dom';

import Home from './Components/Home';
import Form from './Components/Form';
import RecipeInfo from './Components/RecipeInfo';
import Support from './Components/Support';
import About from './Components/About';

const App = () => {

    const [recipeData, setRecipeData] = useState([])
    const [ingredient, setIngredient] = useState('Chicken')

    useEffect(() => {
        const recipeUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        const makeApiCall = () => {
            fetch(recipeUrl)
                .then(res => res.json())
                .then(json => setRecipeData(json.meals))

                .catch(() =>
                    console.error("error in returning recipe json data"))
        }
        makeApiCall()
    }, [ingredient])

    const handleSubmit = foodItem => {
        setIngredient(foodItem)
    }


    return (
        <div className="App">
            <nav className='nav'>

                <Link to='/support'>Support</Link>
                <Link to='/about'>About</Link>

            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/support' element={<Support />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Form handleSubmit={handleSubmit} />
            {recipeData.map( recipe => <RecipeInfo recipe={recipe} />)}
        </div>
    );
}
export default App;