import React from 'react';
import ReactDom from 'react-dom';

import {books} from './books'
import Book from './Book'

//CSS
import './index.css'; //import css file


function BookList() {
	return (
		<section className="booklist">
			{books.map((book) => {
				return <Book key={book.id} {...book}></Book>;
			})}
		</section>
	);
}

//React Render
ReactDom.render(<BookList />, document.getElementById('root'));
