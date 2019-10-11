import React from 'react';
const Option = (props) => (
    <div>
        Options: {props.OptionText}
        <button
            className="button button--link"
            onClick={(e) => {
                props.handleDeleteOption(props.OptionText);
            }}
        >
            Remove
            </button>
    </div>
);


export { Option as default } 