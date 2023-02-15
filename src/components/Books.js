import React from "react";

import Book from "./Book";
import "./Books.module.css"

const Books =(props)=>{
 const {books} = props;
    
 const booksInfo = books.map(book=> <Book key={book.id} book={book}/>);
    return <section>
        {booksInfo}
    </section>
}

export default Books;