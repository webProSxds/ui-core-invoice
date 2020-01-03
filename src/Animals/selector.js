import React from 'react';

export default ({ animalpropsList }) => {
    return animalpropsList.length ? (
        <select>

            {
                animalpropsList.map((item) =>
                    <option>
                        {item.name}
                    </option>)
            }

        </select>
    ) : null
}