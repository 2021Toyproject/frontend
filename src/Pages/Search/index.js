import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import ScrollHeader from '../../Components/ScrollHeader';
import SearchBar from '../../Components/SearchBar';

const SearchContainer = styled.div`
  box-sizing: border-box;
  a {
    text-decoration: none;
  }
`;

const Search = () => {
  return (
    <SearchContainer>
      <ScrollHeader />
      <Header />
      <SearchBar />
    </SearchContainer>
  );
};

export default Search;
