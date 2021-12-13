import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const TabSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 24px;
  position: relative;

  ${({ scrollHeader }) =>
    scrollHeader &&
    css`
      padding-top: 0;
    `}
`;

export const TabItem = styled(Link)`
  width: 7rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.125rem;
  font-weight: ${(props) => (props.active ? 'bold' : 'none')};
  color: ${(props) => (props.active ? props.theme.black : props.theme.grey)};
  box-sizing: border-box;
  cursor: pointer;
  @media (max-width: 944px) {
    width: 5rem;
    font-size: 1rem;
  }
`;

export const TabWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const BottomBorder = styled.div`
  width: 50%;
  height: 2px;
  position: absolute;
  top: 46px;
  left: 0;
  transition: all 0.5s cubic-bezier(0.1, 0, 0.2, 1.5);
  ${({ active }) => (active ? `left: 0;` : `left: 50%;`)}
  background-color: ${({ theme }) => theme.black};
`;

export const DropDown = styled.div`
  width: 6rem;
  height: 2rem;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.grey};
    img {
      filter: invert(61%) sepia(10%) saturate(280%) hue-rotate(169deg)
        brightness(89%) contrast(93%);
    }
  }

  @media (max-width: 1024px) {
    width: 84px;
    font-size: 12px;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const TrendingIcon = styled.img`
  width: 20px;
  height: 12px;
  margin-right: 10px;
  filter: ${(props) =>
    props.active
      ? 'none'
      : 'invert(61%) sepia(10%) saturate(280%) hue-rotate(169deg) brightness(89%) contrast(93%)'};

  @media (max-width: 944px) {
    width: 16px;
    height: 10px;
  }
`;

export const RecentIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  filter: ${(props) =>
    props.active
      ? 'invert(61%) sepia(10%) saturate(280%) hue-rotate(169deg) brightness(89%) contrast(93%)'
      : 'none'};

  @media (max-width: 944px) {
    width: 16px;
    height: 16px;
  }
`;

export const MoreIcon = styled.img`
  width: 20px;
  height: 15px;
  margin-right: 5px;
  cursor: pointer;
  filter: invert(61%) sepia(10%) saturate(280%) hue-rotate(169deg)
    brightness(89%) contrast(93%);
`;

export const DropdownBox = styled.div`
  width: 8.75rem;
  height: 8.75rem;
  font-size: 0.85rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.07);
  background-color: white;
  visibility: hidden;
  transition: all 0.2s ease-in-out;
  opacity: 0;

  div {
    padding: 0.65rem 0.9rem;
  }

  ${({ date, currentDate, theme }) =>
    date &&
    css`
      top: 55px;
      right: 0;
      cursor: pointer;
      div {
        height: 25%;
        font-weight: bold;
      }

      div:nth-last-child(n + 2) {
        border-bottom: 1px solid #eceeee;
      }

      div:hover {
        background-color: ${theme.hover};
      }

      .${currentDate} {
        color: ${theme.green};
      }
    `}

  ${({ more }) =>
    more &&
    css`
      top: 80px;
      right: 2%;

      div {
        height: 25%;
        font-weight: bold;
      }

      div:nth-last-child(n + 2) {
        border-bottom: 1px solid #eceeee;
      }
    `}

  // 모달 열렸을 때
  ${({ isOpen }) =>
    isOpen &&
    css`
      z-index: 1;
      width: 192px;
      height: 171px;
      visibility: visible;
      opacity: 1;

      div {
        font-weight: bold;
        font-size: 0.9rem;
      }
    `};
`;
