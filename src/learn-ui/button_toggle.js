import React, { useState } from 'react';
import './_user.css'

const initData = {
    imgList: [
        { name: "onion", id: 1, path: 'https://www.bigbasket.com/media/uploads/p/s/10000148_28-fresho-onion.jpg' },
        { name: "potato", id: 2, path: 'https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg' }
    ],
    selected: ""
}
export default () => {
    const [data, updatedata] = useState(initData);
    const [doctorIn, updateDoctorIn] = useState(true);

    const x = data.imgList.map(
        (item) => <div onClick={() => ClickHandler(item)}>{item.name}</div>);
    const ClickHandler = (a) => {
        console.log("ClickHandler", a.name);

    }
    let flg = doctorIn?'in':'out';
    return (<div>
        {
            <pre>{JSON.stringify(doctorIn,null,3)}</pre>
        }
//

        <div className={`button ${flg}`} onClick={
            () => {

                updateDoctorIn(!doctorIn)
            }
        }>One</div>
    </div>)

}

