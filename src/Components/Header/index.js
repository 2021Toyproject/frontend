import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { USER_TEST_REDUCER } from '../../Settings/Redux/Action/user';
import { Ico_Logo, Ico_Search } from '../Assets';
import {
  HeaderSection,
  IconBox,
  LoginButton,
  SearchIconWrapper,
} from './style';

// TODO
// HEADERTEXT -> 이미지로 변경해야됨 로고가 글자인줄알았는데 svg파일이였음.
const Header = () => {
  const dispatch = useDispatch();

  const dispatchEvenet = useCallback(() => {
    dispatch({
      type: USER_TEST_REDUCER,
    });
  }, []);

  return (
    <HeaderSection>
      <img src={Ico_Logo} width={71} height={24} alt="" />
      <IconBox>
        <SearchIconWrapper>
          <img width={18} height={18} src={Ico_Search} alt="" />
        </SearchIconWrapper>
        <LoginButton onClick={dispatchEvenet}>로그인</LoginButton>
      </IconBox>
    </HeaderSection>
  );
};

export default Header;
