import React from "react";

const MenuCategories = ({ categories, filterAuthor }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => {
                return (
                    <button
                    className="menu-btn"
                    key={category}
                    onClick={() => {
                        filterAuthor(category);
                    }}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
};

export default MenuCategories;