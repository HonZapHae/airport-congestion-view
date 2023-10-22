import React from 'react';
import { CongestionMapProps } from '../types';
import Gate from '../Gate';
import { StyledDiv, StyledIncheonMap } from '../styled';

const GATE_POS = [
  { top: 67, left: 84 },
  { top: 54, left: 72 },
  { top: 47, left: 57 },
  { top: 47, left: 38 },
  { top: 54, left: 23 },
  { top: 67, left: 11 },
] as const;

function Incheon(props: CongestionMapProps) {
  const { congestions } = props;
  return (
    <StyledDiv>
      {GATE_POS.map((v, i) => <Gate key={v.top * v.left} no={i + 1} pos={GATE_POS[i]} />)}
      <StyledIncheonMap congestions={congestions} />
    </StyledDiv>
  );
}

export default Incheon;
