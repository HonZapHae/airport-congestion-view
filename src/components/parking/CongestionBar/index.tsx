import * as Styled from './styled';
import Bubbleicon from '@/resources/icons/bubble_icon.svg?react';

type Props = {
  remain: number,
  all: number,
}

function CongestionBar(props: Props) {
  const { remain, all } = props;
  const isAvailable = !!all && remain > 0;
  return (
    <Styled.CongestionBarArea>
      {isAvailable
        && (
          <Styled.NumofCar
            carnum={all - remain}
            parkingTotal={all}
          >
            {all - remain}
          </Styled.NumofCar>
        )}
      <Styled.Numbubble>
        <Styled.NumbubbleText>{isAvailable ? remain : 0}</Styled.NumbubbleText>
        <Bubbleicon fill={!isAvailable ? '#FF4A4A' : '#9837F9'} />
      </Styled.Numbubble>
      <Styled.CongestionBarWrapper>
        <Styled.CongestionBar
          carnum={!isAvailable ? 1 : all - remain}
          parkingTotal={!isAvailable ? 1 : all}
          full={!isAvailable}
        />
      </Styled.CongestionBarWrapper>
      <Styled.NumofParking>{!isAvailable ? '만차' : all}</Styled.NumofParking>
    </Styled.CongestionBarArea>
  );
}

export default CongestionBar;
