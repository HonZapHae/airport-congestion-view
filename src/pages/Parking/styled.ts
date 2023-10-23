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

export const Title = styled.div`
  width: 100%;
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CongestionBarContainer = styled.div`
  height: 350px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const CongestionBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
`;

export const CongestionBarTitle = styled.p`
  color: #9837F9;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.3px;
  white-space: pre;
  margin-top: 46px;
`;
