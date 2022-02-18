import React from 'react'

function RecipeInfo(props){
    return  (
      <div className='recipe-info'>
        <img src={props.recipe.strMealThumb} alt={props.recipe.strMeal}/>
        <h4 id={props.recipe.idMeal}>Recipe: {props.recipe.strMeal}</h4>

      </div>
    )  
}

export default RecipeInfo