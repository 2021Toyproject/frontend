import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';

const HomeContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
    </HomeContainer>
  );
};

export default Home;
