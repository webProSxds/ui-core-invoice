import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Welcome from './welcome';


const App = () =>
    <div>
        Welcome hello world {React.version}
        <Welcome />
    </div>


render(<App />, document.getElementById('root'));
