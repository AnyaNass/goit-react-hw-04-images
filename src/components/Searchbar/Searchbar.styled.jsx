import styled from 'styled-components';

export const Header = styled.header`
	top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding: 24px 0;
  color: #fff;
  background-color: #100d0d;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`

export const SearchForm = styled.form`
	display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border-radius: 3px;
  
  :focus {
	outline: 2px solid red;
  }
`

export const SearchFormBtn = styled.button`
	display: inline-block;
  width: 48px;
  height: 48px;
  font-size: 24px;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
 background-color: #000;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  opacity: 1;

  :focus, :hover{
	opacity: 0.5;
  }
`
export const SearchFormInput = styled.input`
	display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder{
	font: inherit;
  font-size: 18px;
  }
`