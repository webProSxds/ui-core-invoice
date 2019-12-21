import React, { useState } from 'react';


const initalData = {
	imagesList: [
		{ name: 'ionon', path: 'https://www.bigbasket.com/media/uploads/p/s/10000148_28-fresho-onion.jpg' },
		{ name: 'potato', path: 'https://www.bigbasket.com/media/uploads/p/s/10000159_25-fresho-potato.jpg' }
	],
	selectedItem:{}
}

const Img = ({path}) => {
	return (
		<img class="img-responsive blur-up"
			src={path.path}
			alt="Image Not Found" />
	)
}

export default () => {
	const [vegData, updateVegData] = useState(initalData);
	const handleItemClick = (item)=>{
		console.log("item",item);
		updateVegData({...vegData,selectedItem:item})
	}
	return (
		<div className="section_B">
			{
				<pre>{JSON.stringify(vegData, null, 2)}</pre>
			}
			{
				vegData.imagesList.map(item => {

					return (<div>
						<span className="veg-item" onClick={()=> handleItemClick(item)}>VegName {item.name}</span>
					</div>)
				})
				
			}

			{
				<Img path = {vegData.selectedItem} />

			}
		</div>
	);
}