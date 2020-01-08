import React from 'react';

export default ({ label, onClickHandler, selected }) => {

    return (<input className={selected ? 'ms' : 'ns'} type="button" value={label} onClick={onClickHandler} />)
}