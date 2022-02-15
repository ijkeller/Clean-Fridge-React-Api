import React, { useState } from 'react';

// List code was taken from useState lab on codesandbox and adjusted.

function List() {

    const ingredients = []

    // const [ingredient, setIngredient] = useState('')

    


    return (
        <div className='list'>
            <section class="items-container">
                <h4 className='list-title'>Fridge Contents</h4>
                <ul>
                    {}
                </ul>
            </section>
            <button >Search</button>
        </div>
    );
}

export default List;