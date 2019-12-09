import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Add from './add';


const App = () =>
    <div>
        Welcome hello world
        <Add num1 = {25} num2 = {56}/>
    </div>

render(<App />, document.getElementById('root'));
