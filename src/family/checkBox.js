import React, { useState } from 'react';

export default ({ label, onChangeHandler }) => {
    const [data, updateData] = useState(false);

    const selected = () => {
        updateData(!data)
        onChangeHandler(!data)
    }

    return (<div>
        <input type="checkBox" onChange={selected} />{label}
    </div>)
}