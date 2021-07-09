import React, { useState } from 'react';

function Counter() {
	const [value, setValue] = useState(0);
	const [inputValue, setInputValue] = useState(1);
	return (
		<div className="App">
			<h2 data-testid="header">My Counter</h2>
			<p data-testid="counter">{value}</p>
			<button
				data-testid="subtractBtn"
				onClick={() => {
					setValue(value - inputValue);
				}}
			>
				-
			</button>

			<input
				onChange={(e) => {
					setInputValue(parseInt(e.target.value));
				}}
				value={inputValue}
				type="number"
				data-testid="input"
			/>
			<button
				onClick={() => {
					setValue(inputValue + value);
				}}
				data-testid="addBtn"
			>
				+
			</button>
		</div>
	);
}

export default Counter;
