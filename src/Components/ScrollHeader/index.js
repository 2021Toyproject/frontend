import React, { useEffect, useState, useCallback } from 'react';
import Header from '../Header';
import { ScrollHeaderWrapper } from './style';
import Tab from '../Tab';
import { BodySection } from '../MainBody/style';

const ScrollHeader = () => {
  return (
    <ScrollHeaderWrapper>
      <Header />
      <BodySection>
        <Tab scrollHeader />
      </BodySection>
    </ScrollHeaderWrapper>
  );
};

export default ScrollHeader;
