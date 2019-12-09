import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Add from './add';
import Welcome from './welcome';


const App = () =>
    <div>
        Welcome hello world {React.version}
        <p>Good well done Ms</p>
        <p>thanks</p>
        <Add asternum1 = {25} num2 = {56}/>
        <Welcome />
    </div>

render(<App />, document.getElementById('root'));
