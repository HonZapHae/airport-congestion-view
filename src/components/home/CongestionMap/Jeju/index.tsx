import React from 'react';
import { CongestionMapProps } from '../types';
import { StyledDiv, StyledJejuMap } from '../styled';

function Jeju(props: CongestionMapProps) {
  const { congestions } = props;
  return (
    <StyledDiv>
      <StyledJejuMap congestions={congestions} />
    </StyledDiv>
  );
}

export default Jeju;
