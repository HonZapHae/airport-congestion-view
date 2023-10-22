import styled from '@emotion/styled';
import { PosType } from '../../../../constant';

export const StyledDiv = styled.div<{pos: PosType}>`
  width: 14px;
  height: 14px;
  position: absolute;
  top: ${(props) => `${props.pos.top}%` || 0};
  left: ${(props) => `${props.pos.left}%` || 0};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 2px;
  background: #7c7c7c;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
`;
