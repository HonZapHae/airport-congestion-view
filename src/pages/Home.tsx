import React from 'react';
import styled from '@emotion/styled';
// import CongestionDesc from '../components/tip/CongestionDesc';

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Home() {
  return (
    <StyledDiv>
      홈(혼잡행) 페이지
      {/* memo:테스트용으로 해놓음  */}
      {/* <CongestionDesc /> */}
    </StyledDiv>
  );
}
