import PropTypes from 'prop-types';
import { Alert } from './DefaultAlert.styled'

export const DefaultAlert = ({ text }) => {
	return <Alert>{text}</Alert>
}

DefaultAlert.propTypes = {
	text: PropTypes.string,
}