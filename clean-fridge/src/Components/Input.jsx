import React from 'react';
import List from './List';

function Input() {

    const addIngredientToList = function (event) {
        event.preventDefault();
        <List
            



        />
    }

    return (
        <div>
            {/* <h2>Input</h2> */}
            <form>
                <label>Ingredients: </label>

                <input type='text' />
                

            </form>
        </div>
    );
}

export default Input;