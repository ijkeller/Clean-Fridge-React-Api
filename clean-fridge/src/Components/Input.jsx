import React from 'react';
import List from './List';

function Input() {

    const [item, setItem] = useState(ingredients);
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
        console.log('handleChange - value', e.target.value);
        setValue(e.target.value);
    };

    // 3) use handleSubmit on submit button to convert the current value to setItems

    const handleSubmit = (e) => {
        e.preventDefault();
        setItem(value);
        console.log(item);

        // 4) send the new item to the list

        <List
            food={item} // 
        />

        setValue("");
    };



    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ingredient:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );

}

export default Input;