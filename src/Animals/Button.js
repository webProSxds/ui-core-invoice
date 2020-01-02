import React, { useState } from 'react';

export default ({ selected, label, onClickHandler }) =>
    <input className={selected ? "ms" : "ns"} type="button" value={label} onClick={onClickHandler} />
