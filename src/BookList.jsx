import Book from "./Book";
import {data} from "./data.js";

const {items} = data;

const BookList = () => {
    return (
        <section>
            <h2>BookList</h2>
            <div className="booklist">
                {items.map((item) => {
                    const {volumeInfo} = item;
                    return <Book {...volumeInfo} key={item.id} />;
                })}
                </div>
            </section>
    );
};

export default BookList;