import React, { useState } from 'react';
import './toggle-button-style.css';

export default ({ lable, clickHandler }) => {
    const [toggle, updateToggle] = useState(false);

    const toggleHandler = () => {
        const isToggle = !toggle;
        updateToggle(isToggle);
        clickHandler(isToggle);
    }

    return <div>
        <input
            type="button"
            className={toggle ? 'btn-selected' : 'btn-default'}
            onClick={toggleHandler} value={lable}
        />
    </div>
}