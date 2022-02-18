import React from 'react'

function RecipeInfo(props){
    return  (
      <div>
        <h1>Recipe: {props.recipe.strMeal}</h1>
        {/* <h2>Year: {props.recipe.Year}</h2>
        <img src={props.recipe.Poster} alt={props.recipe.Title}/>
        <h3>Genre: {props.recipe.Genre}</h3>
        <h4>Plot: {props.recipe.Plot}</h4> */}
      </div>
    )  
}

export default RecipeInfo