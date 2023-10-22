import React, { useState } from 'react';
import * as Styled from './styled';
import Congestion from './Congestion';
import { CONGESTION_DESC_INFO } from './constants';

function CongestionDesc() {
  return (
    <Styled.Container>
      <Styled.CongestionWrapper>
        {CONGESTION_DESC_INFO.map(({ color, title }) => (
          <Congestion color={color} title={title} />
        ))}
      </Styled.CongestionWrapper>
    </Styled.Container>
  );
}

export default CongestionDesc;
