import React from 'react';
const Option = (props) => {
    return (
        <div>
            Options: {props.OptionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.OptionText);
                }}
            >
                Remove
            </button>
        </div>
    );
};

export { Option as default } 