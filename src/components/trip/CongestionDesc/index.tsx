import React from 'react';
import * as Styled from './styled';
import Congestion from './Congestion';
import { congestionInfoArray } from './constants';

function CongestionDesc() {
  return (
    <Styled.Container>
      <Styled.CongestionWrapper>
        {congestionInfoArray.map(({ color, title }) => (
          <Congestion color={color} title={title} />
        ))}
      </Styled.CongestionWrapper>
    </Styled.Container>
  );
}

export default CongestionDesc;
