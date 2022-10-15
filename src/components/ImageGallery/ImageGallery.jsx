import PropTypes from 'prop-types';
import { GalleryList } from './ImageGallery.styled'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({ gallery, ...otherProps }) => {
	return <GalleryList><ImageGalleryItem gallery={gallery} {...otherProps} /></GalleryList>
}

ImageGallery.propTypes = {
	gallery: PropTypes.arrayOf(PropTypes.object),
}