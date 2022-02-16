import React, { useState } from 'react';

import Input from './Input';
import Results from './Results';

// List code was taken from useState lab on codesandbox and adjusted.

const List = (food) => {

    // 5) create initial ingredients list

    const ingredients = [{
        id: 1,
        fridgeIngredient: "love"
    },
    {
        id: 2,
        fridgeIngredient: "butter"
    },
    {
        id: 3,
        fridgeIngredient: "milk"
    }
    ];

    // console.log(ingredients);
    // console.log(food);

    const [array, setArray] = useState(ingredients)

    // 6) take new item from input and append to ingredients list 
    // 6.5) create a new ID and add that to the ingredient object

    // const addIngredient = () => {

    //     const listCopy = [...array]; // do we need to make a copy or could we just append the list directly?
    //     const foodItem = { food };
    //     const newItem = { food: foodItem };
    //     array.length === 0 ? newItem.id=1 : newItem.id = array[array.length - 1].id + 1;
    //     // if (array.length === 0) {
    //     //     newItem.id = 1;
    //     // } else {
    //     //     newItem.id = array[array.length - 1].id + 1;
    //     // }
    //     listCopy.push(newItem);
    //     setArray(listCopy);
    // };


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

    const Iterate = array.map((fridgeIngredient, index) => {


        return (

            <li>{fridgeIngredient}</li>

        )
    })


    return (
        <div className='list'>
            <h3>List</h3>
            <section class="items-container">
                <h4 className='list-title'>Fridge Contents</h4>
                <ul>
                    {Iterate}
                </ul>
            </section>
            <button >Search</button>
        </div>
    );
}

export default List;