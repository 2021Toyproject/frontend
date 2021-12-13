import React from 'react';
import { SearchBarSection, StyledInput } from './style';

const SearchBar = () => {
  return (
    <SearchBarSection>
      <StyledInput placeholder="검색어를 입력하세요" />
    </SearchBarSection>
  );
};

export default SearchBar;
