import React from 'react';
import { StyledDiv } from './styled';
import { PosType } from '../../../../constant';

type Props = {
  no: number;
  pos: PosType;
};

function Gate(props: Props) {
  const { no, pos } = props;
  return <StyledDiv pos={pos}>{no}</StyledDiv>;
}

export default Gate;
