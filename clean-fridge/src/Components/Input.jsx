import React, { useState } from 'react';

import List from './List';
import ingredientArray from './IngredientArray';

const Input = (props) => {

    // const [newItem, setNewItem] = useState('');
    const [textValue, setTextValue] = useState("");

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
        setTextValue(e.target.value);
    };

    // 3) use handleSubmit on submit button to convert the current value to setItems

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addItem(textValue);
        console.log(textValue)
        setTextValue("");
    };

    return (
        <div className='input'>
            <form onSubmit={handleSubmit}>
                <label>
                    Ingredient:
                    <input type="text" value={textValue} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Input;