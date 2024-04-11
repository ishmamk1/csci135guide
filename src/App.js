import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./components/Home"
import Variables from './components/Variables';
import InputConditional from './components/InputConditional';
import StringArray from './components/StringArray';
import Loops from './components/Loops';
import Functions from './components/Functions';
import Pointers from './components/Pointers';
import ClassesObjects from './components/ClassesObjects';
import Inheritance from './components/Inheritance';
import Recursion from './components/Recursion';

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
            <Route path='/string-and-array' element={<StringArray/>}></Route>
            <Route path='/loops' element={<Loops/>}></Route>
            <Route path='/functions' element={<Functions/>}></Route>
            <Route path='/pointers' element={<Pointers/>}></Route>
            <Route path='/classes-objects' element={<ClassesObjects/>}></Route>
            <Route path='/inheritance' element={<Inheritance/>}></Route>
            <Route path='/recursion' element={<Recursion/>}></Route>
          </Routes>
          <br></br>
        </div>
      </div>
    </Router>
  );
}

export default App;
