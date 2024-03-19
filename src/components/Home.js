import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>C++ General Guide</h1>
            <Link to="/variables">
                <button>Go to Variables</button>
            </Link>
        </div>
    );
}

export default Home;