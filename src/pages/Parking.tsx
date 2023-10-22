import React from 'react';
import styled from '@emotion/styled';
import CongestionBar from '../components/parking/CongestionBar';

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Parking() {
  return (
    <StyledDiv>
      주차장 페이지
      <CongestionBar />
    </StyledDiv>

  );
}
