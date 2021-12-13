import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  TabSection,
  TabItem,
  TabWrapper,
  BottomBorder,
  DropDown,
  ItemWrapper,
  TrendingIcon,
  RecentIcon,
  MoreIcon,
  DropdownBox,
} from './style';
import { Ico_Trend, Ico_Time, Ico_More, Ico_Dropdown } from '../Assets';

const Tab = ({ scrollHeader }) => {
  const [active, setActive] = useState(true);
  const [isDateOpen, setIsDateOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [currentDateText, setCurrentDateText] = useState('이번 주');
  const [currentDate, setCurrentDate] = useState('week');

  const toggleActive = useCallback((index) => {
    if (index === 'trending') {
      setActive(true);
    } else {
      setActive(false);
    }
  }, []);

  const toggleIsWhenOpen = useCallback(
    () => setIsDateOpen(!isDateOpen),
    [isDateOpen],
  );

  const toggleIsMoreOpen = useCallback(
    () => setIsMoreOpen(!isMoreOpen),
    [isMoreOpen],
  );

  const handleCloseModal = useCallback(() => {
    if (isDateOpen) {
      setIsDateOpen(false);
    } else if (isMoreOpen) {
      setIsMoreOpen(false);
    }
  }, [isDateOpen, isMoreOpen]);

  const handleClickItem = (e) => {
    const { className } = e.target;
    setCurrentDate(className);
    if (className === 'today') {
      setCurrentDateText('오늘');
    } else if (className === 'week') {
      setCurrentDateText('이번 주');
    } else if (className === 'month') {
      setCurrentDateText('이번 달');
    } else if (className === 'year') {
      setCurrentDateText('올해');
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleCloseModal);
    return () => {
      window.removeEventListener('click', handleCloseModal);
    };
  }, [handleCloseModal, handleCloseModal]);

  return (
    <TabSection scrollHeader={scrollHeader}>
      <ItemWrapper>
        <TabWrapper active={active}>
          <TabItem
            to="/"
            active={active}
            onClick={() => toggleActive('trending')}
          >
            <TrendingIcon active={active} src={Ico_Trend} />
            트렌딩
          </TabItem>
          <TabItem to="/" active={!active} onClick={() => toggleActive()}>
            <RecentIcon active={active} src={Ico_Time} />
            최신
          </TabItem>
          <BottomBorder active={active} />
        </TabWrapper>
        {active && (
          <>
            <DropDown onClick={toggleIsWhenOpen}>
              {currentDateText}
              <img src={Ico_Dropdown} alt="" />
            </DropDown>
            <DropdownBox date currentDate={currentDate} isOpen={isDateOpen}>
              <div className="today" onClick={handleClickItem}>
                오늘
              </div>
              <div className="week" onClick={handleClickItem}>
                이번 주
              </div>
              <div className="month" onClick={handleClickItem}>
                이번 달
              </div>
              <div className="year" onClick={handleClickItem}>
                올해
              </div>
            </DropdownBox>
          </>
        )}
      </ItemWrapper>
      <MoreIcon
        src={Ico_More}
        alt=""
        className="down"
        onClick={toggleIsMoreOpen}
      />
      <DropdownBox more isOpen={isMoreOpen}>
        <div>공지사항</div>
        <div>태그 목록</div>
        <div>서비스 정책</div>
        <div>Slack</div>
      </DropdownBox>
    </TabSection>
  );
};

export default Tab;
