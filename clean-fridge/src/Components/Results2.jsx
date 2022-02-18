import React, { useState, useEffect } from 'react';

const Results = (props) => {

    // 1) on search button, bring array food items from List.js

    // 2) map over array taking food names and ...

    // 3) 

    const [recipesList, setRecipesList] = useState([])
    // const [ingredientName, setIngredientName] = useState([])

    const baseUrl = 'https://www.themealdb.com/api/json/v1/1/'
    const ingredientEndUrl = 'Chicken'

    const ingredientSearchUrl = `${baseUrl}filter.php?i=${ingredientEndUrl}`

    const makeApiCall = () => {
    fetch(ingredientSearchUrl)
        .then(res => res.json())
        .then(json => setRecipesList(json))

        .catch(() =>
            console.error("error in returning recipe json data"))
    }

    useEffect(() => {
        
        makeApiCall()
    }, []);

    console.log(recipesList)

    return (
        <div className='results'>
            <h2>Results</h2>
            {recipesList.meals ? recipesList.meals[0].strMeal : 'loading'}
            
        </div>
    );
}
export default Results;