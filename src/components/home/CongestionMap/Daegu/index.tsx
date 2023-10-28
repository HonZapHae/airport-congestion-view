import { CongestionMapProps } from '../types';
import { StyledDiv, StyledDaeguMap } from '../styled';

function Daegu(props: CongestionMapProps) {
  const { congestions } = props;
  return (
    <StyledDiv>
      <StyledDaeguMap congestions={congestions} />
    </StyledDiv>
  );
}

export default Daegu;
