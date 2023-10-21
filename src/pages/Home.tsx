import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export function Home() {
  return (
    <StyledDiv>홈(혼잡행) 페이지</StyledDiv>
  );
}
