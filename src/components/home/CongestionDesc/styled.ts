import styled from '@emotion/styled';

export const Container = styled.div`
  border: 1px dashed #dcdcdc;
  width: 320px;
  border-radius: 10px;
  padding: 12px 22px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  align-self: stretch;
`;
export const CongestionWrapper = styled.div`
  flex: 1 0 0%;
  display: grid;
  grid-template-columns: 1.4fr 1.3fr 1fr;
  row-gap: 10px;
`;
