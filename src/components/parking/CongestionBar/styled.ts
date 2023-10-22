import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

const slide = (carnum?: number, parkingTotal?: number) => keyframes`
  from {
    width: 0;
  }
  to {
    width: calc(253px * (${carnum}/${parkingTotal}));
  }
`;
export const CongestionBarArea = styled.div`
  width: 307px;
  height: 34px;
`;
export const CongestionBarWrapper = styled.div`
  background-color: #F4F4F4;
  width: 273px;
  height: 26px;
  border-radius: 6px;
  display: flex;
  padding: 0 10px;
  justify-content: start;
  align-items: center;
  box-sizing: border-box;
;
`;
export const CongestionBar = styled.div<{ carnum?: number, parkingTotal?: number }>`
  animation: ${(props) => slide(props.carnum, props.parkingTotal)} 1s ease;
  width: calc(253px * (${(props) => props.carnum}/${(props) => props.parkingTotal}));
  height: 10px;
  border-radius: 6px;
  background-color: #9837F9;
  transform: rotate( 720deg );
`;
export const NumofParking = styled.span`
  position: relative;
  font-size: 10px;
  bottom: 27px;
  left: 280px;
`;
export const NumofCar = styled.span<{ carnum?: number, parkingTotal?: number }>`
  position: relative;
  left: calc(253px * (${(props) => props.carnum}/${(props) => props.parkingTotal}));
  width: 20px;
  font-size: 10px;
  color: #9837F9;
`;
export const Numbubble = styled.div`
  display: inline-block;
  position: relative;
  width: 35px;
  height: 18px;
  left: 250px;
`;
export const NumbubbleText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -55% -65%;
  font-size: 10px;
  color: #fff;
  font-weight: 700;
`;
