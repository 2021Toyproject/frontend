import styled from 'styled-components';
import { Ico_Search } from '../Assets';

export const SearchBarSection = styled.div`
  width: 100%;
`;

export const StyledInput = styled.input`
  display: block;
  width: 690px;
  height: 60px;
  margin: 3.5rem auto 0 auto;
  padding-left: 70px;
  font-size: 24px;
  border: 1px solid #adb5bd;
  outline: none;
  transition: all 0.2s ease;
  background-image: url(${Ico_Search});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 23px;

  &:focus {
    border: 1px solid ${({ theme }) => theme.black};
  }
`;
