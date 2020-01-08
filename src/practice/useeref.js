import React, { useState } from 'react';
import Button from './button'
import './button.css'
import Selector from './selector'


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
    const [data, updatedata] = useState(animalsData);

    const click = (item) => {
        console.log("click", item)
        updatedata({ ...data, selectedCategory: item })
    }
    return (
        <div>
            <pre>{JSON.stringify(data.selectedCategory, null, 2)}</pre>
            {
                animalList.map((item) =>
                    <Button selected={data.selectedCategory == item} label={item} onClickHandler={() => click(item)}></Button>)
            }
            <Selector list={data.selectedCategory === "All" ? animals :
                animals.filter((item) => item.category === data.selectedCategory)} />

        </div>)
}