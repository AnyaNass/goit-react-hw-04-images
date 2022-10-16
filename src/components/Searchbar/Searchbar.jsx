import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from "react-icons/fa";
import { Header, SearchForm, SearchFormBtn, SearchFormInput } from './Searchbar.styled'

export function Searchbar({ onSubmit }) {
	const [searchQuery, setSearchQuery] = useState('');

	const handleChange = e => {
		setSearchQuery(e.currentTarget.value.toLowerCase())
	}

	const handleSubmit = e => {
		e.preventDefault();

		if (searchQuery.trim() === '') {
			return;
		}

		onSubmit(searchQuery);
		setSearchQuery("");
	}

	return <Header>
		<SearchForm onSubmit={handleSubmit}>
			<SearchFormBtn type="submit">
				<FaSearch />
			</SearchFormBtn>

			<SearchFormInput
				value={searchQuery}
				onChange={handleChange}
				type="text"
				autoComplete="off"
				autoFocus
				placeholder="Search images and photos"
			/>
		</SearchForm>
	</Header>
}

Searchbar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
}