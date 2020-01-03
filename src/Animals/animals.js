import React, { useState, useEffect } from 'react';
import Button from './Button';
import Selector from './selector';
import fetch from '../utils/fetch_data'
import AnimalPract from '../practice.js/animalPract'
import './button.css'

const state = {
    selectedCategory: '',
    animals: [],
    animalList: []
}


const basePath = 'https://my-json-server.typicode.com/guntupallikoteswararao2016/demo/'

export default () => {
    const [data, updatedataa] = useState(state);


    const clickHandler = (animalItem) => {

        updatedataa({ ...data, selectedCategory: animalItem });

    }

    useEffect(async () => {

        const data = await fetch(`${basePath}/animalList`),
            animalList = await data.json();

        const dataAnimals = await fetch(`${basePath}/animals`),
            animals = await dataAnimals.json();

        updatedataa({
            ...data,
            animalList,
            animals,
            selectedCategory: 'wild'
        })

    }, [])

    return (<div>
        {/* {<pre>{JSON.stringify(data.selectedCategory, null, 2)}</pre>} */}
        {/* {
            data.animalList.map((item) =>
                <Button
                    selected={data.selectedCategory === item}
                    label={item}
                    onClickHandler={() => { clickHandler(item) }}>
                </Button>

            )
        }

        <Selector
            animalpropsList={data.selectedCategory === "All" ? data.animals :
                data.animals.filter((item) => item.category == data.selectedCategory)}

        /> */}
        <AnimalPract />

    </div>)
}