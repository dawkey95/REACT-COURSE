import React from 'react';

const Book = (props) => {
	//attr, eventHandler
	//onClick, onMouseOver
	const clickHandler = () => {
		alert('Hello World');
	};

	const complexExample = (author) => {
		console.log(author);
	};

	const { image, title, author } = props; //Object destructuring

	return (
		<article
			className="book"
			onMouseOver={() => {
				console.log(title);
			}}
		>
			<img src={image} alt="" />
			<h1 onClick={() => console.log(title)}>{title}</h1>
			<h4>{author}</h4>
			<button type="buton" onClick={clickHandler}>
				Click Me!
			</button>
			<button type="button" onClick={() => complexExample(author)}>
				More Complex!
			</button>
		</article>
	);
};

export default Book;
