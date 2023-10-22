import React from 'react';
import * as Styled from './styled';
import { ReactComponent as Bubbleicon } from '../../../resources/icons/bubble_icon.svg';

function CongestionBar() {
  return (
    <Styled.CongestionBarArea>
      <Styled.NumofCar carnum={500} parkingTotal={2270}>220</Styled.NumofCar>
      <Styled.Numbubble>
        <Styled.NumbubbleText>1770</Styled.NumbubbleText>
        <Bubbleicon fill="#9837F9" />
      </Styled.Numbubble>
      <Styled.CongestionBarWrapper>
        <Styled.CongestionBar carnum={500} parkingTotal={2270} />
      </Styled.CongestionBarWrapper>
      <Styled.NumofParking>2270</Styled.NumofParking>
    </Styled.CongestionBarArea>
  );
}

export default CongestionBar;
