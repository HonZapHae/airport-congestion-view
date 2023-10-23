import styled from '@emotion/styled';
import {
  CONGESTION_COLOR, CONGESTION_LVL, CongestionColorType, CongestionLvlType,
} from '../../../constant';
import { ReactComponent as CheongjuMap } from '../../../resources/images/CheongjuMap.svg';
import { ReactComponent as DaeguMap } from '../../../resources/images/DaeguMap.svg';
import { ReactComponent as GimhaeMap } from '../../../resources/images/GimhaeMap.svg';
import { ReactComponent as GimpoMap } from '../../../resources/images/GimpoMap.svg';
import { ReactComponent as IncheonMap1 } from '../../../resources/images/IncheonMap1.svg';
import { ReactComponent as IncheonMap2 } from '../../../resources/images/IncheonMap2.svg';
import { ReactComponent as JejuMap } from '../../../resources/images/JejuMap.svg';

export const StyledDiv = styled.div`
    max-width: 440px;
    min-width: 290px;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-top: 64px;
`;

function getCongestionColor(congestion: CongestionLvlType): CongestionColorType {
  switch (congestion) {
    case CONGESTION_LVL.NORMAL:
      return CONGESTION_COLOR.NORMAL;
    case CONGESTION_LVL.BAD:
      return CONGESTION_COLOR.BAD;
    case CONGESTION_LVL.VERY_BAD:
      return CONGESTION_COLOR.VERY_BAD;
    case CONGESTION_LVL.CLOSED:
      return CONGESTION_COLOR.CLOSED;
    case CONGESTION_LVL.GOOD:
    default:
      return CONGESTION_COLOR.GOOD;
  }
}

export const StyledIncheonMap1 = styled(IncheonMap1)<{congestions: CongestionLvlType[]}>`
  width: 100%;
  height: 50vw;
  max-height: 250px;
  object-fit: fill;
  & .gate1 { fill: ${(props) => getCongestionColor(props.congestions[0]) || CONGESTION_COLOR.GOOD} };
  & .gate2 { fill: ${(props) => getCongestionColor(props.congestions[0]) || CONGESTION_COLOR.GOOD} };
  & .gate3 { fill: ${(props) => getCongestionColor(props.congestions[1]) || CONGESTION_COLOR.GOOD} };
  & .gate4 { fill: ${(props) => getCongestionColor(props.congestions[2]) || CONGESTION_COLOR.GOOD} };
  & .gate5 { fill: ${(props) => getCongestionColor(props.congestions[3]) || CONGESTION_COLOR.GOOD} };
  & .gate6 { fill: ${(props) => getCongestionColor(props.congestions[3]) || CONGESTION_COLOR.GOOD} };
`;

export const StyledIncheonMap2 = styled(IncheonMap2)<{congestions: CongestionLvlType[]}>`
  width: 100%;
  height: 50vw;
  max-height: 250px;
  object-fit: contain;
  & .gate1 { fill: ${(props) => getCongestionColor(props.congestions[0]) || CONGESTION_COLOR.GOOD} };
  & .gate2 { fill: ${(props) => getCongestionColor(props.congestions[1]) || CONGESTION_COLOR.GOOD} };
`;

export const StyledGimpoMap = styled(GimpoMap)<{congestions: CongestionLvlType[]}>`
  width: 100%;
  height: 36vw;
  max-height: 180px;
  object-fit: contain;
  & .area { fill: ${(props) => getCongestionColor(props.congestions[0]) || CONGESTION_COLOR.GOOD} };
`;

export const StyledCheongjuMap = styled(CheongjuMap)<{congestions: CongestionLvlType[]}>`
  width: 100%;
  height: 40vw;
  max-height: 200px;
  object-fit: contain;
  & .area { fill: ${(props) => getCongestionColor(props.congestions[0]) || CONGESTION_COLOR.GOOD} };
`;

export const StyledJejuMap = styled(JejuMap)<{congestions: CongestionLvlType[]}>`
  width: 100%;
  height: 32vw;
  max-height: 160px;
  object-fit: contain;
  & .area { fill: ${(props) => getCongestionColor(props.congestions[0]) || CONGESTION_COLOR.GOOD} };
`;

export const StyledGimhaeMap = styled(GimhaeMap)<{congestions: CongestionLvlType[]}>`
  width: 100%;
  height: 36vw;
  max-height: 180px;
  object-fit: contain;
  & .area { fill: ${(props) => getCongestionColor(props.congestions[0]) || CONGESTION_COLOR.GOOD} };
`;

export const StyledDaeguMap = styled(DaeguMap)<{congestions: CongestionLvlType[]}>`
  width: 100%;
  height: 30vw;
  max-height: 150px;
  object-fit: contain;
  & .area { fill: ${(props) => getCongestionColor(props.congestions[0]) || CONGESTION_COLOR.GOOD} };
`;
