import React, { useState } from 'react';

import List from './List';
import IngredientArray from './IngredientArray';

const Input = () => {

    const [item, setItem] = useState('');
    const [value, setValue] = useState("");

    // 1) create text input and submit button in return

    // in return
    // <form onSubmit={handleSubmit}>
    //     <label>
    //         Ingredient:
    //         <input type="text" value={value} onChange={handleChange} />
    //     </label>
    //     <input type="submit" value="Submit" />
    // </form>

    // 2) use handleChange on text input to setValue

    const handleChange = (e) => {
        e.preventDefault();
        // console.log('Input.jsx - handleChange - value', e.target.value);
        setValue(e.target.value);
    };

    // 3) use handleSubmit on submit button to convert the current value to setItems

    const addIngredient = () => {

        const listCopy = [...IngredientArray]; 
        const foodItem = { food };
        const newItem = { food: foodItem };
        // array.length === 0 ? newItem.id=1 : newItem.id = array[array.length - 1].id + 1;
        if (array.length === 0) {
            newItem.id = 1;
        } else {
            newItem.id = array[array.length - 1].id + 1;
        }
        listCopy.push(newItem);
        setArray(listCopy);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem(value);
        // console.log('input.js - handleSubmit, item:' + item);

        // 4) send the new item to the list
        
        addIngredient();


        <List
            food={item} // 
        />

        setValue("");
    };

    return (
        <div className='input'>
            <h3>Input</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Ingredient:
                    <input type="text" value={value} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Input;