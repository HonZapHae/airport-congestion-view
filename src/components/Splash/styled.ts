import styled from '@emotion/styled';
import { SPLASH_TIME } from '@/constants';

export const Container = styled.div<{
  show: boolean;
}>`
  flex: 1 0 0%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-width: 320px;
  height: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  background-color: #631ec6;
  z-index: 100;
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  gap: 33px;
  align-items: stretch;
  justify-content: center;
`;

export const Splash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const Logo = styled.div`
  width: 192px;
  height: 192px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const Title = styled.p`
  color: #e9daff;
  font-family: 'Roboto';
  font-size: 40px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%; /* 60px */
  margin: 0;
`;

export const Bar = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 4px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Track = styled.div`
  width: inherit;
  height: 4px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #e9daff;
`;

export const Thumb = styled.div<{
  progress: number;
}>`
  width: ${(props) => `${props.progress}%` || '0%'};
  height: 4px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #9b67e7;
  transition: width ${() => `${SPLASH_TIME}ms`} ease-in-out;
`;
