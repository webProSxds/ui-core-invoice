import React, { useState } from 'react';
import '../user-notifications/app.scss'
import { faVolumeMute, faBookmark, faCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const composeClass = (isOpacity) => {

    return isOpacity ? 'child icon-selected' : 'child';
}
const initialState = {
    iconList: [
        { icon: faCircle, isSlected: false },
        { icon: faVolumeMute, isSlected: false },
        { icon: faBookmark, isSlected: false }
    ],
};
export default () => {

    const [data, updateData] = useState(initialState);

    const clickCircle = (iconItem) => {


        const iconList = data.iconList.map(item => {
            if (item === iconItem) {
                item.isSlected = !item.isSlected;
                return item;
            }
            return item;
        })

        updateData({ ...data, iconList });

    }

    return (
        <div className="app">

            {
                data.iconList.map(
                    item =>
                        <div className={`${composeClass(item.isSlected)}`}
                            onClick={() => clickCircle(item)}><FontAwesomeIcon icon={item.icon} />
                        </div>

                )
            }

        </div>)
}