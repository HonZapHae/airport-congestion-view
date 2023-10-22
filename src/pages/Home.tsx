import React from 'react';
import styled from '@emotion/styled';
import CongestionMap from '../components/home/CongestionMap';
// import CongestionDesc from '../components/home/CongestionDesc';

const StyledDiv = styled.div`
  flex: 1;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Home() {
  return (
    <StyledDiv>
      <CongestionMap airportCode="CJU" />
      홈(혼잡행) 페이지
      {/* memo:테스트용으로 해놓음  */}
      {/* <CongestionDesc /> */}
    </StyledDiv>
  );
}
