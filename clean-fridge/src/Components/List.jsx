import React, { useEffect, useState } from 'react';

import Input from './Input';
import Results from './Results';
import IngredientArray from './IngredientArray';

// List code was taken from useState lab on codesandbox and adjusted.

const List = ({setNewItem}) => {

    const [fridgeArray, setFridgeArray] = useState(IngredientArray)
    const [newItem, setNewItem] = useState('')

    // 6) take new item from input and append to ingredients list 
    // 6.5) create a new ID and add that to the ingredient object

    useEffect(() => {
        window.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log('list - newItem ' + newItem)
            const listCopy = [...fridgeArray];
            console.table('List.jsx - addIngredient function - listCopy: ' + listCopy)
            const newFoodItem = { newItem };
            const newArrayObject = { food: newFoodItem };
            listCopy.length === 0 ? newArrayObject.id = 1 : newArrayObject.id = newArrayObject[listCopy.length - 1].id + 1;
            // if (listCopy.length === 0) {
            //     newArrayObject.id = 1;
            // } else {
            //     newArrayObject.id = listCopy[listCopy.length - 1].id + 1;
            // }
            listCopy.push(newItem);
            setFridgeArray(listCopy);
        });
    }, []);


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

        const Iterate = fridgeArray.map((fridgeIngredient, index) => {
            return (
                <li key={index}>{fridgeIngredient.food}</li>);
        });


        return (
            <div className='list'>
                <section class="items-container">
                    <h4 className='list-title'>Fridge Contents</h4>
                    <ul>
                        {Iterate}
                    </ul>
                </section>
                <button>Search</button>
            </div>
        );
    }

export default List;