import React from "react";

function MenuTitle({ title }) {
    return (
        <div>
            <h2>{title || "Books Menu"}</h2>
        </div>
    );
};

export default MenuTitle;