import React, { useState } from 'react';

const UseStateObject = () => {
	const [person, setPerson] = useState({
		name: 'Peter',
		age: 24,
		message: 'Hi, I am Peter!',
	});

	const changeMessage = () => {
		if (person.message === 'Hi, I am Peter!') {
			setPerson({ ...person, message: 'Message has changed' });
		} else {
			setPerson({ ...person, message: 'Hi, I am Peter!' });
		}
	};

	return (
		<>
			<h3>{person.name}</h3>
			<h3>{person.age}</h3>
			<h3>{person.message}</h3>
			<button className="btn" onClick={changeMessage}>
				Change Message
			</button>
		</>
	);
};

export default UseStateObject;
