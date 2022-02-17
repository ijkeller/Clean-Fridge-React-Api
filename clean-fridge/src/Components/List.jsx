import React, { useEffect, useState } from 'react';

import Input from './Input';
import Results from './Results';
import IngredientArray from './IngredientArray';
import Button from './Button';

const List = () => {

    const [fridgeArray, setFridgeArray] = useState(IngredientArray)

    // 6) take new item from input and append to ingredients list 
    // 6.5) create a new ID and add that to the ingredient object

    const addItem = (textValue) => {
        const listCopy = [...fridgeArray];
        const newArrayObject = { food: textValue };
        fridgeArray.length === 0 ? newArrayObject.id = 1 : newArrayObject.id = fridgeArray[fridgeArray.length - 1].id + 1;
        listCopy.push(newArrayObject);
        setFridgeArray(listCopy);
    };

    // 7) worry about being able to remove the list items later.

    // const FridgeItem = (props) => {
    //         return <li onClick={() => props.removeItem()}>{props.food}</li>;
    //     };

    // const removeItem = (id) => {
    //     const listCopy = [...items];
    //     const filteredItems = listCopy.filter((item) => item.id !== id);
    //     setItems(filteredItems);
    // };

    // I don't remember what this is for
    // const listItems = items.map((item) => {
    //     return (
    //         <FridgeItem
    //             removeItem={() => removeItem(item.id)}
    //             key={item.id}
    //             food={item.food}
    //         />
    //     );
    // });

    // 8) return list to App.js

    const Iterate = fridgeArray.map((fridgeIngredient) => {
        return (
            <li key={fridgeIngredient.id} > -
                {fridgeIngredient.food}
            </li>
        );
    });


    return (
        <>
            <Input addItem={addItem} />
            <div className='list'>
                <section className="items-container">
                    <h4 className='list-title'>Fridge Contents</h4>
                    <ul>{Iterate}</ul>
                </section>
                < Button text={'Search'} />
            </div>
            <Results fridgeArray={fridgeArray} />
        </>
    );
}

export default List;