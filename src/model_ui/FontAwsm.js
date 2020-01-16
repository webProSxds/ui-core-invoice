import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../user-notifications/app.scss';

export default ({ label, handler }) => {

    return (<div className="AddIconDiv">

        <FontAwesomeIcon icon={label} onClick={handler} />

    </div>)
}
