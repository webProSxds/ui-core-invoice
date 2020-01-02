import React, { useState, useRef, useEffect } from 'react';

const state = {
	todoList: []
}

let nextTodoId = 0

export default () => {

	const [list, updateList] = useState(state);
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	}, [inputRef])

	return (
		<div>
			{
				// <pre>{JSON.stringify(list, null, 2)}</pre>

			}
			<form onSubmit={
				(event) => {
					event.preventDefault();
					const { value } = inputRef.current;
					console.log("submit", inputRef.current.value);
					updateList({
						...list,
						todoList: [...list.todoList, { value, id: nextTodoId++ }]
					});
					inputRef.current.value = '';
				}
			}>
				<input type="text" ref={inputRef} />
			</form>
			{
				list.todoList.map(({ value }) => <p>{value}</p>)
			}
		</div>
	);
}