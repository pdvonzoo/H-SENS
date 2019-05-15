import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import SelectBox from './SelectBox';
import SearchBtn from './SearchBtn';
import { MainContext } from '../../../context/main/mainContext';

const SearchWrapper = styled.div`
  width: 60%;
  height: 60%;
`;
const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: auto;
  align-items: center;
`;
const SearchInputer = styled.input`
  padding: 0;
  border: 0;
  color: #011627;
  background-color: #efffe9;
  border-bottom: 1px solid #011627;
  outline: none;
  width: 65%;
  height: 100%;
  font-size: 1.6rem;
`;
const Line = styled.div`
  border-right: 1px solid #011627;
  height: 65%;
`;

export default function Search() {
  const { handleInputChange } = useContext(MainContext);
  const [curData, setCurData] = useState('');

  const handleSearchRequest = () => {
    const searchedData = fetchSearched(state.searchFilter, state.searchValue);
    searchedData.then(res => {
      setCurData(res);
    });
  };
  return (
    <SearchWrapper>
      <SearchContainer>
        <SearchInputer placeholder="which? who?" onChange={handleInputChange} />
        <SearchBtn onClick={handleSearchRequest} curData={curData} />
        <Line />
        <SelectBox />
      </SearchContainer>
    </SearchWrapper>
  );
}
