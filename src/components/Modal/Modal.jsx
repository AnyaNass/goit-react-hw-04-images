import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalWindow } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root')

export class Modal extends React.Component {
	componentDidMount() {
		window.addEventListener('keydown', this.handleKeyDown)
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleKeyDown)
	}

	handleKeyDown = e => {
		if (e.code === "Escape") {
			this.props.onClose();
		}
	}

	backdropClick = e => {
		if (e.target === e.currentTarget) {
			this.props.onClose();
		}
	}

	render() {
		return createPortal(
			<Backdrop onClick={this.backdropClick}>
				<ModalWindow>{this.props.children}</ModalWindow>
			</Backdrop>,
			modalRoot
		)
	}
}

Modal.propTypes = {
	onClose: PropTypes.func,
}