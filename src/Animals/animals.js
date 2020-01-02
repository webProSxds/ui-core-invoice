import React, { useState, useEffect } from 'react';
import Button from './Button';
import Selector from './selector';
import './button.css'

const animalList = ["All", "wild", "pet", "water"];
const animals = [{ name: "tiger", category: "wild" },
{ name: "lion", category: "wild" },
{ name: "dog", category: "pet" },
{ name: "cat", category: "pet" },
{ name: "fish", category: "water" },
{ name: "snake", category: "water" }]
const animalsData = {
    selectedCategory: "All",
    animals
}

export default () => {
    const [data, updatedataa] = useState(animalsData);


    const clickHandler = (animalItem) => {
        //console.log("clickHandler", animalItem, iss);
        updatedataa({ ...data, selectedCategory: animalItem })
    }

    return (<div>
        {<pre>{JSON.stringify(data.selectedCategory, null, 2)}</pre>}
        {
            animalList.map((item) =>
                <Button
                    selected={data.selectedCategory === item}
                    label={item}
                    onClickHandler={() => { clickHandler(item) }}>
                </Button>

            )
        }
        <Selector
            animalpropsList={data.selectedCategory === "All" ? animals : animals.filter((item) => item.category == data.selectedCategory)}

        />
    </div>)
}