import React, { useState } from "react";

function Form(props) {
  const [ingredient, setIngredient] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(ingredient);
    setIngredient("");
  };

  const handleChange = (e) => {
    const ingredient = e.target.value;
    setIngredient(ingredient);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ingredient">Ingredient</label>
        <input
          id="ingredient"
          type="text"
          value={ingredient}
          onChange={handleChange}
        />
        <input type="submit" value="Find Recipes" />
      </form>
    </>
  );
}

export default Form;