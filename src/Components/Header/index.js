import React, { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { USER_TEST_REDUCER } from '../../Settings/Redux/Action/user';
import {
  Ico_Logo,
  Ico_Search,
  Ico_User_Default,
  Ico_Dropdown,
} from '../Assets';
import {
  HeaderSection,
  IconBox,
  LoginButton,
  SearchIconWrapper,
  UserWrapper,
  UserMenuList,
  WriteButton,
} from './style';

// TODO
// HEADERTEXT -> 이미지로 변경해야됨 로고가 글자인줄알았는데 svg파일이였음.
const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const dispatchEvenet = useCallback(() => {
    dispatch({
      type: USER_TEST_REDUCER,
    });
  }, []);

  const toggleIsOpen = useCallback(() => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }, [isOpen]);

  const handleCloseModal = useCallback(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('click', handleCloseModal);
    return () => {
      window.removeEventListener('click', handleCloseModal);
    };
  }, [isOpen]);

  return (
    <HeaderSection>
      <Link to="/">
        <img src={Ico_Logo} height={24} alt="" className="Logo" />
      </Link>
      <IconBox>
        <SearchIconWrapper to="/search">
          <img width={18} height={18} src={Ico_Search} alt="" />
        </SearchIconWrapper>
        <WriteButton>새 글 작성</WriteButton>
        <UserWrapper onClick={toggleIsOpen}>
          <img src={Ico_User_Default} className="user" alt="" />
          <img src={Ico_Dropdown} className="down" alt="" />
          <UserMenuList isOpen={isOpen}>
            <Link to="/">내 벨로그</Link>
            <Link to="/">임시 글</Link>
            <Link to="/">읽기 목록</Link>
            <Link to="/">설정</Link>
            <Link to="/">로그아웃</Link>
          </UserMenuList>
        </UserWrapper>
        {/* <LoginButton onClick={dispatchEvenet}>로그인</LoginButton> */}
      </IconBox>
    </HeaderSection>
  );
};

export default Header;
