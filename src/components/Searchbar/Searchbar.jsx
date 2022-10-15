import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from "react-icons/fa";
// FaSearch
import { Header, SearchForm, SearchFormBtn, SearchFormInput } from './Searchbar.styled'

export class Searchbar extends React.Component {
	state = {
		searchQuery: "",
	}

	handleChange = e => {
		this.setState({ searchQuery: e.currentTarget.value.toLowerCase() })
	}

	handleSubmit = e => {
		e.preventDefault();

		if (this.state.searchQuery.trim() === '') {
			return;
		}

		this.props.onSubmit(this.state.searchQuery);
		this.setState({ searchQuery: "" });
	}

	render() {
		const { searchQuery } = this.state;

		return <Header>
			<SearchForm onSubmit={this.handleSubmit}>
				<SearchFormBtn type="submit">
					<FaSearch />
				</SearchFormBtn>

				<SearchFormInput
					value={searchQuery}
					onChange={this.handleChange}
					type="text"
					autoComplete="off"
					autoFocus
					placeholder="Search images and photos"
				/>
			</SearchForm>
		</Header>
	}
}

Searchbar.propTypes = {
	onSubmit: PropTypes.func,
}