import {useState} from "react";
import Book from "./Book.jsx";
import { data } from "../books/data.js";
import MenuTitle from '../../components/MenuTitle.jsx';
import MenuCategories from "../../components/MenuCategories.jsx";

const { items } = data;
const menuTitle = "Books Menu";

const tempAuthors = items.map((item) => {
    return item.volumeInfo.authors;
});
//console.log(tempAuthors.flat());
//removes repeated BookList authors in console *important*
const tempSet = new Set(tempAuthors.flat()); 
console.log(tempSet);
const allAuthors = ["All", ...tempSet];

const BookList = () => {
    const [authors, setAuthors] = useState(allAuthors);
    const [author, setAuthor] = useState("All"); // Initialize as array with "All"

    const filterAuthor = (author) => {
        const newItems = allAuthors.filter((item) => {
            return item === author;
        });
        console.log(newItems);
        setAuthor(newItems);
    };

    return (
        <section>
            <MenuTitle title={menuTitle} />
            <MenuCategories categories={authors} filterAuthor={filterAuthor} />


            <div className="booklist">
                {items.map((item) => {
                    const { volumeInfo } = item;


                    if (author[0].length == 1 || author[0] === "All") {
                        const { title, subtitle, authors, imageLinks } = volumeInfo;
                        return (
                            <Book
                                title={title}
                                subtitle={subtitle}
                                authors={authors} 
                                imageLinks={imageLinks}
                                key={item.id}
                            />
                        );
                    } else {
                        if (volumeInfo.authors && volumeInfo.authors.includes(author[0])) {
                            const { title, subtitle, authors, imageLinks } = volumeInfo;
                            return (
                                <Book
                                    title={title}
                                    subtitle={subtitle}
                                    authors={authors} 
                                    imageLinks={imageLinks}
                                    key={item.id}
                                />
                            );
                        }
                    }
                })}
            </div>
        </section>
    );
};

export default BookList;