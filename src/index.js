import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Add from './add';
import Welcome from './welcome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();



const App = () =>
    <div>
<FontAwesomeIcon icon={faHome} className="mr-3" />

        Welcome hello world {React.version}
        <p>Good well done Ms</p>
        <p>thanks</p>
        <Add asternum1 = {25} num2 = {56}/>
        <Welcome />
    </div>

render(<App />, document.getElementById('root'));
