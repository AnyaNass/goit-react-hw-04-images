import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Modal } from './Modal/Modal';
import * as API from './services/api'
import { ErrorMessage } from './ErrorMessage/ErrorMessage'
import { ThreeDots } from 'react-loader-spinner'
import { LoadMoreBtn } from './Button/Button'
import { DefaultAlert } from './DefaultAlert/DefaultAlert'

export function App() {
	const [searchQuery, setSearchQuery] = useState('');
	const [gallery, setGallery] = useState([]);
	const [page, setPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);
	const [loadMoreBtn, setLoadMoreBtn] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalImg, setModalImg] = useState('');
	const [tags, setTags] = useState('');

	useEffect(() => {
		if (page === 1) {
			return;
		}

		API.getImages(searchQuery, page).then(resp => setGallery(prevGallery => [...prevGallery, ...resp.hits]));

		setError(false);
		setLoading(false);
		setLoadMoreBtn(true);

	}, [page, searchQuery])

	useEffect(() => {
		if (showModal) {
			document.querySelector("body").style.overflow = 'hidden';
		} else {
			document.querySelector("body").style.overflow = 'auto';
		}
	}, [showModal])

	const loadMore = () => {
		setPage(prevPage => prevPage + 1);
		setLoading(true);
		setLoadMoreBtn(false);
	}

	const handleFormSubmit = async searchQuery => {
		setSearchQuery(searchQuery)
		setLoading(true);
		setError(false);
		setPage(1);

		try {
			const gallery = await API.getImages(searchQuery, 1);

			if (gallery.total === 0) {
				throw new Error();
			}
			setGallery(gallery.hits);
			setLoading(false);
			setLoadMoreBtn(true);
			setTotalPages(Math.ceil(gallery.totalHits / gallery.hits.length));
			window.scrollTo(0, 0);
		}
		catch (error) {
			setError(true);
			setGallery([]);
			setLoading(false);
			setLoadMoreBtn(false);
		}
	}

	const toggleModal = () => {
		setShowModal(!showModal);
	}

	const handleModalcontent = data => {
		setModalImg(data.largeImageURL);
		setTags(data.tags);
	}

	return (<>
		<Searchbar onSubmit={handleFormSubmit} />
		{showModal && (<Modal onClose={toggleModal} >
			<img src={modalImg} alt={tags} />
		</Modal>)}
		{error && <ErrorMessage message={`We haven't found anything for your search "${searchQuery}"`} />}
		{gallery.length !== 0 && <ImageGallery gallery={gallery} onClick={toggleModal} handleModalcontent={handleModalcontent} />}
		{loading && <ThreeDots color="black" wrapperStyle={{ justifyContent: "center" }} />}
		{loadMoreBtn && page !== totalPages && <LoadMoreBtn onClick={loadMore}></LoadMoreBtn>}
		{page === totalPages && !error && <DefaultAlert text="That is all" />}
	</>
	)
}


