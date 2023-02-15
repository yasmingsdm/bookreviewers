import React from "react";

import AddComment from "./AddComment";
import "./Book.module.css";
import ShowComments from "./ShowComments";

const Book = (props)=>{
const {book} = props;

return <article >
    <h1 className="center">{book.name}</h1>
    <img src={book.image} alt="cover of the book" /> 
    <p>{book.description}</p>
    <section className="center">
        <ShowComments />
        <AddComment />
    </section>
</article>
};

export default Book;