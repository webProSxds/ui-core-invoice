import React, { useState } from 'react';
import '../user-notifications/app.scss'
import { faVolumeMute, faBookmark, faCircle, faAddressBook, faVolumeUp, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const initialState = {
    iconList: [
        { icon_default: faCircle, icon_selected: faAddressBook, isSlected: false },
        { icon_default: faVolumeMute, icon_selected: faVolumeUp, isSlected: false },
        { icon_default: faBookmark, icon_selected: faHamburger, isSlected: false }
    ]
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
                        <div className="child"
                            onClick={() => clickCircle(item)}>
                            <FontAwesomeIcon icon={item.isSlected ? item.icon_selected : item.icon_default} />
                        </div>

                )
            }

        </div>)
}