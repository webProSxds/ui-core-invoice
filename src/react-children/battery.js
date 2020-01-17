import React from 'react';

export default ({ name, handler, active }) => <div className={active ? 'sel' : 'de-sel'} onClick={handler}>{name}</div>
