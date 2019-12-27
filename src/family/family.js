import React, { useState } from 'react';
import CheckBox from './checkBox';
import './style.css';

const checkBoxList = [
    "myFamily", "parents", "in_laws", "sister", "friends"
]
const familyData = {
    myFamily: [
        { name: "siva", age: 36, parent: "myFamily" },
        { name: "manasa", age: 27, parent: "myFamily" },
        { name: "Rohith", age: 2, parent: "myFamily" },
        { name: "pranavi", age: 6, parent: "myFamily" },
    ],
    parents: [
        { name: "kumari", age: 50, parent: "parents" },
        { name: "srinu", age: 57, parent: "parents" },
    ],
    in_laws: [
        { name: "koteswarao", age: 67, parent: "in_laws" },
        { name: "kalyani", age: 57, parent: "in_laws" },
    ],
    sister: [
        { name: "sankar", age: 45, parent: "sister" },
        { name: "madhuri", age: 30, parent: "sister" },
        { name: "revathi", age: 11, parent: "sister" },
        { name: "karthik", age: 5, parent: "sister" },
    ],
    friends: [
        { name: "durga", age: 45 }

    ],
    selected_checkBox: [],
    seletedItems: {}


}

export default () => {
    const [data, updateData] = useState(familyData);
    let ms;
    const changeHandler = (item, isSelect) => {
        //console.log("changeHandler", a, isSelect);
        if (isSelect) {
            updateData(
                {
                    ...data,
                    selected_checkBox: [...data.selected_checkBox, item],
                    seletedItems: { ...data.seletedItems, [item]: data[item] }
                })
        }
        else {
            ms = data.selected_checkBox.filter((a) => a != item);

            const cpy = { ...data.seletedItems }
            delete cpy[item];

            updateData({ ...data, selected_checkBox: ms, seletedItems: cpy })
        }
    }
    return (<div>
        {
            // <pre>{JSON.stringify(data, null, 2)}</pre>
        }
        {
            checkBoxList.map((item) =>
                <CheckBox label={item} onChangeHandler={(isSelect) => changeHandler(item, isSelect)} />

            )
        }

        {
            Object.entries(data.seletedItems).map(([a, b]) =>
                <div className="one">
                    <h1>{a}</h1>
                    {
                        b.map(item =>
                            <div>{item.name}</div>
                        )
                    }

                </div>)
        }

    </div>)
}