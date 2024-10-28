import React from 'react'
import PropTypes from 'prop-types';

function ThumbsGrid({
	gridClass="thumbs-grid",
	thumbs,
}) {
  return (
	<div className={gridClass}>
		{thumbs.map((thumb, index) => (
			<div className={thumb.Class} key={index}>
				<div className={thumb.ImgBoxClass}>
					<img src={thumb.ImgSrc} alt={thumb.ImgAlt}></img>
				</div>
				<h6>{thumb.Title}</h6>
			</div>
		))}
	</div>
  )
}

ThumbsGrid.propTypes = {
    gridClass:			PropTypes.string,
	thumbs:	PropTypes.arrayOf(
		PropTypes.shape({
			ImgSrc:		PropTypes.string.isRequired,
			ImgAlt:		PropTypes.string,
			Title:		PropTypes.string.isRequired,
			Class:		PropTypes.string,
			ImgBoxClass:PropTypes.string,
	}))
};
	
// thumbImgAlt="",
// thumbClass="thumb",
// thumbImgBoxClass="cl-img-box",


export default ThumbsGrid;