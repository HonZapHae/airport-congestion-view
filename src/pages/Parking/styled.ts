import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  padding-top: 120px;
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

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

export const Title = styled.p`
  color: #191919;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: 150%; 
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

export const CongestionBarContainer = styled.div`
  height: calc(100vh - 550px);
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  padding-bottom: 96px;
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
