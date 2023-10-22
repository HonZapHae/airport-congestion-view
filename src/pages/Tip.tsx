import React from 'react';
import styled from '@emotion/styled';
import CongestionDesc from '../components/trip/CongestionDesc';

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Tip() {
  return (
    <StyledDiv>
      공항이용팁 페이지
      {/* memo:테스트용으로 해놓음  */}
      {/* <CongestionDesc /> */}
    </StyledDiv>
  );
}
