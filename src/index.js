import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Add from './add';
import Welcome from './welcome';


const App = () =>
    <div>
        Welcome hello world {React.version}
        <Add num1 = {25} num2 = {56}/>
        <Welcome />
    </div>

render(<App />, document.getElementById('root'));
