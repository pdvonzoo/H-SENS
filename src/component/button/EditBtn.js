import React from 'react';
import styled from 'styled-components';
import changeUserInfo from '../changeUserInfo';

export default const CustomButton = styled.button`
  color: #95bfb4;
  margin-right: 3rem;
  border: 0;
  outline: none;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bold;
  background-color: transparent;
  &:hover {
    border-bottom: 1px solid #95bfb4;
  }
`;