import React from 'react';
import * as Styled from './styled';
import { ReactComponent as Bubbleicon } from '../../../resources/icons/bubble_icon.svg';

type Props = {
  remain: number,
  all: number,
}

function CongestionBar(props: Props) {
  const { remain, all } = props;
  return (
    <Styled.CongestionBarArea>
      {!!all
        && (
          <Styled.NumofCar
            carnum={all - remain}
            parkingTotal={all}
          >
            {all - remain}
          </Styled.NumofCar>
        )}
      <Styled.Numbubble>
        <Styled.NumbubbleText>{all ? remain : 0}</Styled.NumbubbleText>
        <Bubbleicon fill={!all ? '#FF4A4A' : '#9837F9'} />
      </Styled.Numbubble>
      <Styled.CongestionBarWrapper>
        <Styled.CongestionBar
          carnum={!all ? 1 : all - remain}
          parkingTotal={!all ? 1 : all}
          full={!all}
        />
      </Styled.CongestionBarWrapper>
      <Styled.NumofParking>{!all ? '만차' : all}</Styled.NumofParking>
    </Styled.CongestionBarArea>
  );
}

export default CongestionBar;
