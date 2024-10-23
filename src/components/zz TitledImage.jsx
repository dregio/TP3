import React from 'react'
import PropTypes from 'prop-types'

function TitledImage({title, imageURL, imageAlt}) {
  return (
		<div>
			<h2>{title}</h2>
			<img
				id="img-portada"
				alt={imageAlt}
				src={imageURL}
			></img>
		</div>
	);
}
TitledImage.propTypes = {
	title:      PropTypes.string.isRequired,
	imageURL:   PropTypes.string.isRequired,
	imageAlt:   PropTypes.string,
};

export default TitledImage