import React from 'react';
import { render } from 'react-dom';
import './style.css';


const App = () => <div>Welcome hello world {React.version}</div>


render(<App />, document.getElementById('root'));
