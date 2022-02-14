import React from 'react';

function Input() {

    const addIngredientToList = function (event) {
        event.preventDefault();

    }

    return (
        <div>
            {/* <h2>Input</h2> */}
            <form>
                <label>Ingredients</label>
                <input type='text' />
                <input className='submit' type='submit' value='submit form' />

            </form>
        </div>
    );
}

export default Input;