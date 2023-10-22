import React from 'react';
import { CongestionMapProps } from '../types';
import { StyledDiv, StyledCheongjuMap } from '../styled';

function Cheongju(props: CongestionMapProps) {
  const { congestions } = props;
  return (
    <StyledDiv>
      <StyledCheongjuMap congestions={congestions} />
    </StyledDiv>
  );
}

export default Cheongju;
