import React from 'react';

export default ({ list }) => {

    return (
        <select>
            {
                list.map((item) => <option>{item.name}</option>)

            }
        </select>
    )
}