import React, { useState } from 'react';
import Family from './family/family';
import Apple from './learn-ui/project-apple';
import Familypract from './family_pract/familyPract';


const initData = {
	items: [
		{ name: 'sivas', id: 1 },
		{ name: 'Manasasiva', id: 2 },
		{ name: 'sankar', id: 3 },
	],
	selecteItem: ''
}
export default () => {
	const [data, updateData] = useState(initData);

	const updateHandler = (a) => {
		updateData({ ...data, selecteItem: a })
	}

	const clickCapitaHandler = () => {
		console.log("clickCapitaHandler", data.selecteItem);

		let ns = data.selecteItem.name.toUpperCase();




		//fetch the record from data


		data.items.map(item => {
			if (item.id == data.selecteItem.id) {
				item.name = item.name.toUpperCase();

				return item;
			}
			return item;
		});


		updateData({ ...data, selecteItem: { ...data.selecteItem, name: ns } });


	}



	return (
		<div className="content">
			{/* {
				<pre>{JSON.stringify(data, null, 2)}</pre>
			} */}
			{
				data.items.map(
					(item, id) =>
						<div className="box" onClick={() => updateHandler(item)}>
							{item.name}
						</div>
				)
			}

			{
				<button onClick={() => clickCapitaHandler()}>Capital</button>
			}

			<Apple />
			<Family />
			<Familypract />
		</div>
	);
}