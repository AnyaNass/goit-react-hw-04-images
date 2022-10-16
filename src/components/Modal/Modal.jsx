import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Backdrop, ModalWindow } from './Modal.styled'

const modalRoot = document.querySelector('#modal-root')

export function Modal({ children, onClose }) {
	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	});

	const handleKeyDown = e => {
		if (e.code === "Escape") {
			onClose();
		}
	}

	const backdropClick = e => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}

	return createPortal(
		<Backdrop onClick={backdropClick}>
			<ModalWindow>{children}</ModalWindow>
		</Backdrop>,
		modalRoot
	)
}

Modal.propTypes = {
	onClose: PropTypes.func,
	children: PropTypes.node,
}