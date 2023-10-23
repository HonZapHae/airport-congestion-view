import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 30px;
  padding-right: 24px;
  padding-left: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  gap: 16px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
`;

export const CongestionDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
`;

export const RefreshWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
`;

export const RefreshDesc = styled.p`
  margin: 0;
  color: #808080;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Time = styled.h1`
  font-size: 65px;
`;
