import React from 'react';
import "./CustomButton.css";
function Button({ content, ...otherProps }) {
    return (
        
        <div class="container">
            <button {...otherProps} className="special-button">{content}</button>
        </div>
    );
}

export default Button;