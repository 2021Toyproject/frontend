import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardWrapper = styled.div`
  width: 20rem;
  height: 23.5rem;
  margin: 1rem;
  border-radius: 3px;
  box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  transition: transform 0.25s ease-in, box-shadow 0.25s ease-in;

  &:hover {
    transform: translateY(-2%);
    box-shadow: 3px 6px 20px 0 rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 1056px) {
    width: calc(50% - 2rem);
    height: auto;
    &:hover {
      transform: none;
    }
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const CardImgWrapper = styled(Link)`
  width: 100%;
  height: 167px;

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  @media (max-width: 1056px) {
    height: 100%;
  }
  @media (max-width: 767px) {
    height: 100%;
  }
`;

export const CardBody = styled.div`
  padding: 16px 1rem;
`;

export const CardTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 6px;
`;

export const CardContents = styled.p`
  height: 63px;
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 20px;
  line-height: 1.5;
  overflow: hidden;
  color: #52595f;
`;

export const CardInfo = styled.span`
  font-size: 12px;
  color: #868f97;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding: 8px 1rem;
`;

export const UserInfo = styled.span`
  display: flex;
  align-items: center;
  .by {
    color: #868f97;
  }
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin-right: 8px;
  }
`;

export const Likes = styled.span`
  display: flex;
  align-items: center;
  img {
    width: 12px;
    height: 12px;
    margin-right: 8px;
  }
`;
