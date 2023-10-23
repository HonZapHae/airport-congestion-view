import React from 'react';
import styled from '@emotion/styled';
import { TipNavbar } from '../../components/Tip/TipNavbar';

import { ReactComponent as Lighter } from '../../resources/icons/icon-lighter.svg';
import { ReactComponent as Gas } from '../../resources/icons/icon-gas.svg';
import { ReactComponent as Gun } from '../../resources/icons/icon-gun.svg';
import { ReactComponent as Danger } from '../../resources/icons/icon-danger.svg';
import { ReactComponent as Battery } from '../../resources/icons/icon-battery.svg';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`;

const Body = styled.div`
display: flex;
flex-direction: column;
margin-top: 144px;
padding-bottom: 80px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAF9FC;
  padding-top: 15px;
  padding-bottom: 19px;
  width: 100%;
  gap: 15px;
`;

const InfoTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InfoTitleMain = styled.div`
  color: #631ec6;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 150%; /* 27px */
  letter-spacing: -0.54px;
`;

const InfoTitleSub = styled.div`
  color: #1e1e1e;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
`;

export function Notallowed() {
  return (
    <StyledDiv>
      <Wrapper>
        <TipNavbar title="기내반입금지물품" />
        <Body>
          <Grid>
            <InfoBox>
              <Lighter />
              <InfoTitle>
                <InfoTitleMain>발화성/인화성 물질</InfoTitleMain>
                <InfoTitleSub>
                  휘발유, 페인트,
                  {' '}
                  <br />
                  {' '}
                  라이터용 연료 등
                </InfoTitleSub>
              </InfoTitle>
            </InfoBox>
            <InfoBox>
              <Gas />
              <InfoTitle>
                <InfoTitleMain style={{ marginTop: '-7px' }}>고압가스용기</InfoTitleMain>
                <InfoTitleSub>부탄가스캔</InfoTitleSub>
              </InfoTitle>
            </InfoBox>
            <InfoBox>
              <Gun />
              <InfoTitle>
                <InfoTitleMain>무기 및 폭발물 종류</InfoTitleMain>
                <InfoTitleSub>총기, 폭죽 등</InfoTitleSub>
              </InfoTitle>
            </InfoBox>
            <InfoBox>
              <Danger />
              <InfoTitle>
                <InfoTitleMain style={{ marginTop: '-25px' }}>
                  기타 위험 물질
                </InfoTitleMain>
                <InfoTitleSub>
                  소화기, 살충제, 락스 등
                  {' '}
                  <br />
                  {' '}
                  위험 가능성이 있는 물질
                </InfoTitleSub>
              </InfoTitle>
            </InfoBox>
            <InfoBox>
              <Battery />
              <InfoTitle>
                <InfoTitleMain>
                  리튬배터리 장착
                  {' '}
                  <br />
                  {' '}
                  전자기기
                </InfoTitleMain>
              </InfoTitle>
            </InfoBox>
          </Grid>
        </Body>
      </Wrapper>
    </StyledDiv>
  );
}
