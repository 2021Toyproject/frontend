import styled from 'styled-components';

export const BodySection = styled.div`
  margin: 0 auto;
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
    width: 96%;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -1rem;
  margin-top: 1rem;
`;
