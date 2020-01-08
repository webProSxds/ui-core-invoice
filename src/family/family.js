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

export default () => {

    let filterFamilyList;
    const [data, updateData] = useState(state);

    useEffect(() => {

        const init = async () => {
            const datas = await fetch('https://my-json-server.typicode.com/guntupallikoteswararao2016/demo/family');
            const family = await datas.json();

            updateData({ ...data, family });
        }

        init();


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