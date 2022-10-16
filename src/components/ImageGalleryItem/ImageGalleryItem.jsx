import PropTypes from 'prop-types';
import React from 'react';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled'

export function ImageGalleryItem({ gallery, handleModalcontent, onClick }) {
	const handleClick = e => {
		const targetImg = gallery.find(item => item.id === Number(e.currentTarget.id))

		handleModalcontent(targetImg);
		onClick();
	}

	return gallery.map(item => {
		return <GalleryItem GalleryItem onClick={handleClick} key={item.id} id={item.id} >
			<GalleryImg src={item.webformatURL} alt={item.tags} />
		</GalleryItem>
	})
}

ImageGalleryItem.propTypes = {
	onClick: PropTypes.func.isRequired,
	handleModalcontent: PropTypes.func.isRequired,
	gallery: PropTypes.array.isRequired
}