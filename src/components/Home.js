import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>C++ General Guide</h1>
            <Link to="/variables" className='variable-button'>
                <a style={{ color: 'white', fontWeight: 'bold' }}>Variables and Arithmetic</a>
            </Link>
            <Link to="/input-and-conditionals" className='variable-button'>
            <a style={{ color: 'white', fontWeight: 'bold' }}>Input/Output and Conditionals</a>
            </Link>
            <Link to="/string-and-array" className='variable-button'>
            <a style={{ color: 'white', fontWeight: 'bold' }}>Strings and Arrays</a>
            </Link>
            <Link to="/loops" className='variable-button'>
            <a style={{ color: 'white', fontWeight: 'bold' }}>For/While Loops</a>
            </Link>
            <Link to="/functions" className='variable-button'>
            <a style={{ color: 'white', fontWeight: 'bold' }}>Functions</a>
            </Link>
            <Link to="/pointers" className='variable-button'>
            <a style={{ color: 'white', fontWeight: 'bold' }}>Pointers and Dynamic Memory Allocation</a>
            </Link>
            <Link to="/classes-objects" className='variable-button'>
            <a style={{ color: 'white', fontWeight: 'bold' }}>Classes and Objects</a>
            </Link>
            <Link to="/inheritance" className='variable-button'>
            <a style={{ color: 'white', fontWeight: 'bold' }}>Inheritance</a>
            </Link>
            <Link to="/recursion" className='variable-button'>
            <a style={{ color: 'white', fontWeight: 'bold' }}>Recursion</a>
            </Link>
        </div>
    );
}

export default Home;