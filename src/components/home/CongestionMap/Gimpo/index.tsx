import React from 'react';
import { CongestionMapProps } from '../types';
import { StyledDiv, StyledGimpoMap } from '../styled';

function Gimpo(props: CongestionMapProps) {
  const { congestions } = props;
  return (
    <StyledDiv>
      <StyledGimpoMap congestions={congestions} />
    </StyledDiv>
  );
}

export default Gimpo;
