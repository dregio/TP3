import React from "react";
import PropTypes from "prop-types";

function InputField({ 
        name,
        label="",
        type="string",
        placeHolder="",
        className="con-control"
    }) {
    return (
        <>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeHolder}
                className={className}
            />
        </>
    );
}

InputField.propTypes = {
    name        : PropTypes.string.isRequired,
    label       : PropTypes.string,
    type        : PropTypes.string,
    placeHolder : PropTypes.string,
    className   : PropTypes.string,
};

export default InputField;
