import React from 'react';
import { CongestionMapProps } from '../types';
import { StyledDiv, StyledIncheonMap1, StyledIncheonMap2 } from '../styled';
import { TERMINAL, TerminalType } from '../../../../constant';

type Props = {
  terminal: TerminalType;
} & CongestionMapProps;

function Incheon(props: Props) {
  const { congestions, terminal } = props;
  return (
    <StyledDiv>
      {
        {
          [TERMINAL.T1]: <StyledIncheonMap1 congestions={congestions} />,
          [TERMINAL.T2]: <StyledIncheonMap2 congestions={congestions} />,
        }[terminal]
      }
    </StyledDiv>
  );
}

export default Incheon;
