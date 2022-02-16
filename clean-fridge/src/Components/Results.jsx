import React, { useState, useEffect } from 'react';

import List from './List';

const Results = () => {


    // 1) on search button, bring array food items from List.js

    // 2) map over array taking food names and ...

    // 3) 

    const [recipesList, setRecipesList] = useState([])


    const baseUrl = 'www.themealdb.com/api/json/v1/1/'
    const ingredientsListUrl = `${baseUrl}list.php?i=list`



    // useEffect(() => {
    //     const ingredientSearchUrl = `${baseUrl}filter.php?i=${}`

    //     fetch(ingredientSearchUrl)
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setRecipesList(data)
    //             console.log(recipesList)
    //         })
    //         .catch(() => console.log("error in returning recipe json data"))

    // })

    





    return (
        <div className='results'>
            <h2>Results</h2>

        </div>
    );
}

export default Results;