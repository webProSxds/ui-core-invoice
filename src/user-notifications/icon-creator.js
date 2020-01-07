import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const composeClass = (isOpacity) => {

    return isOpacity ? 'child icon-selected' : 'child';
}

export default (item, clickCircle) => <div className={`${composeClass(item.isSlected)}`}
    onClick={() => clickCircle(item)}><FontAwesomeIcon icon={item.icon} />
</div>