import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CardWrapper,
  CardImgWrapper,
  CardBody,
  CardTitle,
  CardContents,
  CardInfo,
  CardFooter,
  UserInfo,
  Likes,
} from './style';
import { Ico_HeartBlack } from '../Assets';

const Card = (props) => {
  return (
    <CardWrapper>
      <CardImgWrapper to="/">
        <img
          src="https://media.vlpt.us/images/teo/post/d9f3ac1c-2a29-41cd-bd60-542da3edbaf5/%E2%9C%8A%E2%9C%8C%EF%B8%8F%E2%9C%8B.png?w=640"
          alt="img"
          width="100%"
          height="100%"
        />
      </CardImgWrapper>

      <CardBody to="/">
        <Link to="/">
          <CardTitle>2021</CardTitle>
          <CardContents>
            예전 글에서는 삼천포로 빠져서 하지 못했던 프론트엔드 입문자를 위한
            커리큘럼 내용에 대해서 좀 적어보려합니다. 1. 가위바위보만들기 2.
            다른글자찾기게임ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
          </CardContents>
        </Link>
        <CardInfo>2021년 12월 3일 · 17개의 댓글</CardInfo>
      </CardBody>
      <CardFooter>
        <UserInfo>
          <img
            src="https://media.vlpt.us/images/teo/profile/97dd319e-a77f-488f-a502-f2ac80fec110/IMG_4733_Original.jpg?w=120"
            alt=""
          />
          <span className="by">by&nbsp;</span> <b>teo</b>
        </UserInfo>
        <Likes>
          <img src={Ico_HeartBlack} alt="" />
          123
        </Likes>
      </CardFooter>
    </CardWrapper>
  );
};

export default Card;
