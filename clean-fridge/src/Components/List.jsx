import React, { useState } from 'react';

import Input from './Input';

// List code was taken from useState lab on codesandbox and adjusted.

function List() {

    // 5) create initial ingredients list

    const ingredients = [{
        id: 1,
        food: "love"
    },
    {
        id: 2,
        food: "butter"
    },
    {
        id: 3,
        food: "milk"
    }
    ];

    // 6) take new item from input and append to ingredients list 
    // 6.5) create a new ID and add that to the ingredient object

    const addIngredient = (props) => {
        const itemsCopy = [...items]; // not sure why this is here
        const foodItem = props.food;
        const newItem = { food: foodItem };
        if (items.length === 0) {
            newItem.id = 1;
        } else {
            newItem.id = items[items.length - 1].id + 1;
        }
        itemsCopy.push(newItem);
        setItems(itemsCopy);
    };


    // 7) worry about being able to remove the list items later.

    // const FridgeItem = (props) => {
    //         return <li onClick={() => props.removeItem()}>{props.food}</li>;
    //     };

    // const removeItem = (id) => {
    //     const itemsCopy = [...items];
    //     const filteredItems = itemsCopy.filter((item) => item.id !== id);
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




    


    return (
        <div className='list'>
            <section class="items-container">
                <h4 className='list-title'>Fridge Contents</h4>
                <ul>
                    { }
                </ul>
            </section>
            <button >Search</button>
        </div>
    );
}

export default List;