import React from 'react';

export default ({ animalpropsList }) => {

    return (
        <select>

            {
                animalpropsList.map((item) =>
                    <option>
                        {item.name}
                    </option>)
            }

        </select>
    )
}