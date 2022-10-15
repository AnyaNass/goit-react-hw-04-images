export const getImages = async (value, page) => {
	const response = await fetch(`https://pixabay.com/api/?q=${value}&page=${page}&key=29841815-11a861cc71d343152543274bc&image_type=photo&orientation=horizontal&per_page=12`);
	const gallery = await response.json();
	return gallery;
}