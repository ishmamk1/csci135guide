import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Variables from './components/Variables';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path='/' Component={<Home/>}></Route>
            <Route path="/variables" Component={<Variables/>}></Route>
          </Routes>
          <br></br>
        </div>
      </div>
    </Router>
  );
}

export default App;
