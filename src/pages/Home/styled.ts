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
`;

export const Header = styled.div`
  width: 100%;
  height: 36px;
  position: relative;
  margin: 16px 0;
`;

export const Switch = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;

export const Favorite = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export const CongestionDescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  margin-top: 16px;
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

export const Time = styled.p`
  color:#631EC6;
  font-size: 48px;
  font-weight: 900;
  line-height: 72px;
  margin : 0px
`;

export const NotificationWrapper = styled.div`
  margin-top:5px;
  display:flex;
  align-items: center;
`;
export const Notification = styled.p`
  margin-left: 8px;
  margin-bottom: 3px;
  margin-top: 3px;
  font-size: 20px;
  font-weight: 900;
  line-height: 30px;
`;

export const NotificationPuple = styled.span`
  color: #631EC6;
`;

export const StayTime = styled.p`
  margin-top:0px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
`;

export const Minute = styled.p`
  margin-bottom: 11px;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
`;

export const TimeWrapper = styled.div`
  margin-top:0px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;
