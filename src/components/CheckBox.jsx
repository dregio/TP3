import React from "react";
import PropTypes from "prop-types";

function CheckBox({ 
        name,
        label="",
		isChecked=false,
    }) {
    return (
        <div>
			<input type="checkbox" id={name} name={name} checked={isChecked} />
			<label htmlFor={name} >{label}</label>
        </div>
    );
}

CheckBox.propTypes = {
    name		: PropTypes.string.isRequired,
    label		: PropTypes.string,
    isChecked	: PropTypes.bool,
};

export default CheckBox;
