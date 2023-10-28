import { CongestionMapProps } from '../types';
import { StyledDiv, StyledGimhaeMap } from '../styled';

function Gimhae(props: CongestionMapProps) {
  const { congestions } = props;
  return (
    <StyledDiv>
      <StyledGimhaeMap congestions={congestions} />
    </StyledDiv>
  );
}

export default Gimhae;
