import React, { useContext } from 'react';
import { Consumer } from './userContext';

export default () => {
    const { cnt } = useContext(Consumer);

    return (
        <div>
            <p>dsfsd {cnt}</p>
        </div>
    )
}