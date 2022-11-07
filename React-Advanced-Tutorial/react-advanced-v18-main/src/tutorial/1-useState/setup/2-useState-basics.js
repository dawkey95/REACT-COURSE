import React, { useState } from 'react';

const UseStateBasics = () => {
	// console.log(useState('Hello'));
	// const value = useState(1)[0];
	// const handler = useState(1)[1];
	// console.log(value, handler);

	const [text, setText] = useState('A Random Title');

	const handleClick = () => {
		if (text === 'A Random Title') {
			setText('Hello World');
		} else {
			setText('A Random Title');
		}
	};

	return (
		<React.Fragment>
			<h1>{text}</h1>
			<button type="button" className="btn" onClick={handleClick}>
				Change Title
			</button>
		</React.Fragment>
	);
};

export default UseStateBasics;
