import React from "react";
import Title from "./Title";
import Image from "./image";
import Author from "./Author"

//const author = "Somaan Mirza"

const Book = (props) => {
    console.log(props);
    const {title, subtitle, authors, imageLinks} = props;

    return (
        <article className="book">
            <Image thumbnail={imageLinks.thumbnail} title={title} />
            <Title title={title} subtitle={subtitle} />
            <Author name={authors} />
            </article>
    );
};

export default Book;