import React from 'react';
import styled from '@emotion/styled';
import { ReactComponent as Passport } from '../../resources/icons/icon-passport.svg';
import { ReactComponent as Visa } from '../../resources/icons/icon-visa.svg';
import { ReactComponent as Driver } from '../../resources/icons/icon-driver.svg';
import { TipNavbar } from '../../components/Tip/TipNavbar';

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
  margin-top: 132px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-top: 400px; */
  padding-bottom: 144px;
  gap: 64px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InfoTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: #631ec6;
  font-size: 18px;
  font-weight: 700;
`;
const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
`;

const InfoSubTitle = styled.div`
  color: #1e1e1e; 
  font-weight: 600;
`;
const InfoBody = styled.div`
  color: #191919;
  font-size: 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 160%;
  b {
    color: #631ec6;
    font-weight: 400;
  }
`;

export function Checklist() {
  return (
    <StyledDiv>
      <Wrapper>
        <TipNavbar title="출국 전 체크사항" />
        <Body>
          <Info>
            {/* 여권 */}
            <InfoContainer>
              <InfoTitle>
                <Passport />
                <InfoTitle>여권</InfoTitle>
              </InfoTitle>
              <InfoList>
                <InfoSubTitle>해외여행 중 여권 분실</InfoSubTitle>
                <InfoBody>
                  가까운 대사관 또는 총영사관에 여권 분실 신고를 하고
                  여행증명서나 단수여권을 발급받아요.
                </InfoBody>
              </InfoList>
              <InfoList>
                <InfoSubTitle>여권이 훼손된 경우 </InfoSubTitle>
                <InfoBody>
                  외국 출입국 및 항공권 발권 등에 제한이 있을 수도 있으므로,
                  여권을 미리 재발급 받아요.
                </InfoBody>
              </InfoList>
              <InfoList>
                <InfoSubTitle>
                  여권 분실 등의 사유로 긴급하게 발급해야 하는 경우
                </InfoSubTitle>
                <InfoBody>
                  인천국제공항 여객터미널 내 영사민원실에서 발급 받을 수 있어요.
                </InfoBody>
              </InfoList>
            </InfoContainer>
            {/* 비자 */}
            <InfoContainer>
              <InfoTitle>
                <Visa />
                <InfoTitle>비자</InfoTitle>
              </InfoTitle>
              <InfoList>
                <InfoSubTitle>비자 취득</InfoSubTitle>
                <InfoBody>
                  비자 취득은 각 나라의 주권사항으로 해당 주한대사관에 직접
                  문의해요.
                  {' '}
                  <br />
                  &lsquo;사증면제협정 체결국가&rsquo;와 &lsquo;한국인의 무사증
                  입국이 가능한 국가&rsquo;에는 사증(비자) 없이 입국할 수
                  있어요.
                </InfoBody>
              </InfoList>
              <InfoList>
                <InfoSubTitle>미국, 캐나다, 영국의 경우 </InfoSubTitle>
                <InfoBody>
                  <b>미국 입국 시 ESTA / 캐나다 입국시</b>
                  {' '}
                  eTA라는
                  전자여행허가를 꼭 받아야 하고 영국 입국시에는 신분증명서,
                  재직증명서, 귀국항공권, 숙소정보, 여행계획을 반드시
                  지참해야해요.
                </InfoBody>
              </InfoList>
            </InfoContainer>
            {/* 국제운전면허증 */}
            <InfoContainer>
              <InfoTitle>
                <Driver />
                <InfoTitle>국제운전면허증</InfoTitle>
              </InfoTitle>
              <InfoList>
                <InfoSubTitle>외국 운전</InfoSubTitle>
                <InfoBody>
                  외국에서 운전하고자 한다면, 인천국제공항 제1여객터미널 및 전국
                  지방자치단체에서 발급 가능해요.
                </InfoBody>
              </InfoList>
            </InfoContainer>
          </Info>
        </Body>
      </Wrapper>
    </StyledDiv>
  );
}
