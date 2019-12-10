import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Counter from './counter'


const App = () =>
    <div>
        <Counter />
        
    </div>

render(<App />, document.getElementById('root'));
