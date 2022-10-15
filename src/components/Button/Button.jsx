import PropTypes from 'prop-types';
import { Button } from './Button.styled'

export const LoadMoreBtn = ({ onClick }) => {
	return <Button onClick={onClick}>Load more</Button>
}

LoadMoreBtn.propTypes = {
	onClick: PropTypes.func,
}