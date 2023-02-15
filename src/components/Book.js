import React from "react";

import "./Book.module.css";

const Book = (props)=>{
const {book} = props;

return <article >
    <h1 className="center">{book.name}</h1>
    <img src={book.image} alt="cover of the book" /> 
    <p>{book.description}</p>
</article>
};

export default Book;