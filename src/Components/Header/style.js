import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderSection = styled.div`
  width: 1029px;
  margin: 0 auto 0 auto;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Logo {
    @media (min-width: 1025px) {
      width: 28px;
      height: 28px;
    }
  }

  @media (min-width: 1920px) {
    width: 1728px;
  }
  @media (max-width: 1919px) {
    width: 1376px;
  }

  @media (max-width: 1440px) {
    width: 1024px;
  }

  @media (max-width: 1057px) {
    width: 97%;
  }
`;

const IconBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const LoginButton = styled.button`
  width: 80px;
  height: 32px;
  border-radius: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.black};
  transition: all 0.125s ease-in 0s;
  color: white;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const SearchIconWrapper = styled(Link)`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  margin-right: 0.75rem;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.043);
  }
`;

const UserWrapper = styled.div`
  width: 4rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:hover {
    img {
      filter: none;
    }
  }

  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .down {
    width: 22px;
    height: 22px;
    filter: invert(61%) sepia(10%) saturate(280%) hue-rotate(169deg)
      brightness(89%) contrast(93%);
  }
`;

const UserMenuList = styled.div`
  z-index: 1;
  display: none;
  width: 12rem;
  list-style: none;
  position: absolute;
  top: 3.2rem;
  right: 0;
  margin: 0;
  padding-left: 0;
  background-color: white;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.08);

  ${({ isOpen }) =>
    isOpen &&
    `
      display: block;
    `}

  a {
    display: block;
    text-decoration: none;
    color: black;
    height: 3rem;
    line-height: 3rem;
    padding-left: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.hover};
    }
  }
`;

const WriteButton = styled(LoginButton)`
  width: 6.5rem;
  border: 1px solid ${({ theme }) => theme.black};
  margin-right: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.black};
  background-color: white;

  &:hover {
    opacity: 1;
    color: white;
    background-color: ${({ theme }) => theme.black};
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export {
  HeaderSection,
  IconBox,
  LoginButton,
  SearchIconWrapper,
  UserWrapper,
  UserMenuList,
  WriteButton,
};
