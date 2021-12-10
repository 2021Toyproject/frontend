import styled from 'styled-components';

const HeaderSection = styled.div`
  background-color: beige;
  width: 1029px;
  margin: 0 auto 0 auto;
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1440px) {
    width: 1029px;
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
  background-color: rgb(52, 58, 64);
  transition: all 0.125s ease-in 0s;
  color: white;
  font-size: 16px;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const SearchIconWrapper = styled.div`
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

export { HeaderSection, IconBox, LoginButton, SearchIconWrapper };
