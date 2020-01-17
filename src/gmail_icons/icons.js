import React, { useEffect, useState } from 'react';
import fetch from '../utils/fetch_data';
import CheckboxList from './check_cox-list'

const initialState = {
    familyList: []
}
export default () => {

    const [state, updateSate] = useState(initialState);

    useEffect(() => {
        const getData = async () => {
            const datas = await fetch('https://my-json-server.typicode.com/guntupallikoteswararao2016/demo/family');
            const resp = await datas.json();

            console.log("response", resp)

            updateSate({ ...state, familyList: resp })
        }
        getData();

    }, [])
    return (<div>
        {
            <pre>{JSON.stringify(state.familyList, null, 2)}</pre>
        }
        {
            state.familyList.map(item =>
                <CheckboxList label={item} />
            )
        }
    </div>)
}