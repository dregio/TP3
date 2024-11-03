import React from "react";
import PropTypes from "prop-types";

function TextArea({ 
        name,
        label="",
		rows=3,
		placeHolder="",
		isRequired=false,
		className=""
    }) {
    return (
		<>
			<label htmlFor={name}>{label}</label>
			<textarea id={name} name={name} rows={rows}  placeholder={placeHolder} required={isRequired} className={className}></textarea>
		</>
	);
}

TextArea.propTypes = {
	name		: PropTypes.string.isRequired,
	label		: PropTypes.string,
	rows		: PropTypes.number,
	placeHolder	: PropTypes.string,
	isRequired	: PropTypes.bool,
	className	: PropTypes.string,
};

export default TextArea;
