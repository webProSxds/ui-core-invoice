import React from 'react';
import Charger from './charger';
import Battery from './battery';
import './style.css'

export default () => <React.Fragment>
    <Charger>

        {
            [
                { name: "AAA" },
                { name: "BBB" },
                { name: "CCC" }
            ].map(({ name }) => <Battery name={name} />)
        }
    </Charger>
</React.Fragment>