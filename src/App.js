import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Variables from './components/Variables';
import InputConditional from './components/InputConditional';

function App() {
  return (
    <Router basename="/csci135guide">
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path="/variables" element={<Variables/>}></Route>
            <Route path='/input-and-conditionals' element={<InputConditional/>}></Route>
          </Routes>
          <br></br>
        </div>
      </div>
    </Router>
  );
}

export default App;
