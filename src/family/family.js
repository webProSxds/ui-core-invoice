import React, { useState, useEffect } from 'react';
import CheckBox from './checkBox';
import fetch from '../utils/fetch_data'
import './style.css';

const state = {
    family: [],
    familyData: [],
    selected_checkBox: [],
    seletedItems: {}

}

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

    let filterFamilyList;
    const [data, updateData] = useState(state);

    useEffect(async () => {

        const datas = await fetch('https://my-json-server.typicode.com/guntupallikoteswararao2016/demo/family');
        const family = await datas.json();

        updateData({ ...data, family });

    }, [])


    const changeHandler = async (item, isSelect) => {

        const query = 'familyData'

        if (isSelect) {

            const familyDataList = await fetch(`https://my-json-server.typicode.com/manusankar9/demo/${query}`)

            const dataList = await familyDataList.json();

            dataList[item] && updateData(
                {
                    ...data,
                    selected_checkBox: [...data.selected_checkBox, item],
                    seletedItems: { ...data.seletedItems, [item]: dataList[item] }
                })
        }
        else {

            filterFamilyList = data.selected_checkBox.filter((a) => a != item);

            const cpy = { ...data.seletedItems }

            delete cpy[item];

            updateData({ ...data, selected_checkBox: filterFamilyList, seletedItems: cpy })
        }
    }

    return (<div>
        {
            // <pre>{JSON.stringify(data.seletedItems, null, 2)}</pre>
        }
        {
            data.family.map((item) =>
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