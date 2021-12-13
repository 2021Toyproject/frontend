import React from 'react';
import styled from 'styled-components';
import Header from '../../Components/Header';
import MainBody from '../../Components/MainBody';
import ScrollHeader from '../../Components/ScrollHeader';

const HomeContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f8f9fa;

  a {
    color: black;
    text-decoration: none;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <ScrollHeader />
      <Header />
      <MainBody />
    </HomeContainer>
  );
};

export default Home;
