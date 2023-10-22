import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Parking() {
  return (
    <StyledDiv>주차장 페이지</StyledDiv>
  );
}
