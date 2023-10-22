import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  width: 90px;
  margin-left: 10px;
`;

export const ColorBox = styled.div`
  background-color: ${(props) => props.color};
  width: 10px;
  height: 10px;
`;
