import React from "react";

const Image = ({ thumbnail, title }) => {
    return <img src={thumbnail} alt={title} />;
        
};

export default Image;
