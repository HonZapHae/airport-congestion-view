import { CongestionMapProps } from '../types';
import { StyledDiv, StyledIncheonMap1, StyledIncheonMap2 } from '../styled';
import { TERMINAL, TerminalType } from '../../../../constants';

type Props = {
  terminal: TerminalType;
} & CongestionMapProps;

function Incheon(props: Props) {
  const { congestions, terminal } = props;
  return (
    <StyledDiv>
      {
        terminal === TERMINAL.T1
          ? <StyledIncheonMap1 congestions={congestions} />
          : <StyledIncheonMap2 congestions={congestions} />
      }
    </StyledDiv>
  );
}

export default Incheon;
