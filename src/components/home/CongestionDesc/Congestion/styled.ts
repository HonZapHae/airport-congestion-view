import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: fit-content;
  height: 24px;
`;

export const ColorBox = styled.div`
  background-color: ${(props) => props.color};
  width: 10px;
  height: 10px;
`;

export const Text = styled.span`
  color: #191919;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; 
`;
