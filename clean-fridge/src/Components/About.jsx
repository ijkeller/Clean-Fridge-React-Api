import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router";

import { Link } from 'react-router-dom';

function About() {

    return (
        <div className='routes'>
            <Link to='/' className='home'>Home</Link>
            <h2>About</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis unde porro, atque voluptatibus, corrupti enim iste quibusdam cumque expedita vero consequuntur, explicabo eveniet est nemo voluptas libero veniam! Doloremque, expedita!</p>
        </div>
    );
}

export default About;